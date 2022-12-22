import { useEffect, useState } from "react";
import {
  Flex,
  Stack,
  chakra,
  EditablePreview,
  Editable,
  EditableInput,
  useEditableControls,
  Skeleton,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useSWR, { mutate } from "swr";
import { request } from "@app/utils/request";
import { useDebounce } from "@app/hooks/useDebounce";
import { SORT_TYPE } from "@app/utils/constants";
import Layouts from "@app/components/Layouts";
import PlusIcon from "@app/icons/PlusIcon";
import Button from "@app/components/General/Button";
import BackIcon from "@app/icons/BackIcon";
import MenuSort from "@app/components/General/MenuSort";
import EditIcon from "@app/icons/EditIcon";
import Card from "@app/components/General/Todo/Card";
import Fallback from "@app/components/General/Todo/Fallback";
import Empty from "@app/components/General/Todo/Empty";
import ModalCreate from "@app/components/General/Modal/Create";
import ModalDelete from "@app/components/General/Modal/Delete";

const EditableControls = () => {
  const { isEditing, getEditButtonProps } = useEditableControls();

  return isEditing ? null : (
    <chakra.button
      data-cy="todo-title-edit-button"
      pos={["absolute", "relative"]}
      right={["20px", "0"]}
      left={["auto", "19px"]}
      top={["115px", "0"]}
      {...getEditButtonProps()}
    >
      <EditIcon w={["20px", "20px", "20px", "24px"]} />
    </chakra.button>
  );
};

const ItemLists = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset: resetForm,
    formState: { isValid },
  } = useForm();

  const {
    isOpen: isOpenDone,
    onOpen: onOpenDone,
    onClose: onCloseDone,
  } = useDisclosure();

  const {
    isOpen: isOpenModalDelete,
    onOpen: onOpenModalDelete,
    onClose: onCloseModalDelete,
  } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: activityData, isLoading } = useSWR(`/activity-groups/${id}`);

  const [sortPicked, setSortPicked] = useState(SORT_TYPE.NEW);

  const [titleValue, setTitleValue] = useState("");
  const [todoPicked, setTodoPicked] = useState(null);
  const [methodType, setMethodType] = useState("post");
  const [loadingProcess, setLoadingProcess] = useState(false);
  const [loadingDeleteTodo, setLoadingDeleteTodo] = useState(false);

  const [completedTodo, setCompletedTodo] = useState([]);

  const debounceTitleValue = useDebounce(titleValue, 500);

  const handleProcessTodo = (values) => {
    setLoadingProcess(true);

    const isPayload =
      methodType === "post"
        ? {
            ...values,
            activity_group_id: id,
          }
        : values;

    const urlProcess =
      methodType === "post" ? "/todo-items" : `/todo-items/${todoPicked?.id}`;

    request[methodType](urlProcess, isPayload)
      .then(() => {
        onClose();
        mutate(`/activity-groups/${id}`);
        resetForm({
          title: "",
          priority: "very-high",
        });
      })
      .finally(() => setLoadingProcess(false));
  };

  const handleUpdateTitleActivity = (newTitle) =>
    request.patch(`/activity-groups/${id}`, {
      title: newTitle,
    });

  const handleCompletedTodo = (e, activity) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setCompletedTodo((prevCompletedTodo) => [
        ...prevCompletedTodo,
        activity.id,
      ]);

      request.patch(`/todo-items/${activity.id}`, { is_active: 0 });
    } else {
      setCompletedTodo(completedTodo.filter((todo) => todo !== activity.id));

      request.patch(`/todo-items/${activity.id}`, { is_active: 1 });
    }
  };

  const handleDeleteTodo = () => {
    setLoadingDeleteTodo(true);

    request
      .delete(`/todo-items/${todoPicked?.id}`)
      .then(() => {
        onCloseModalDelete();
        onOpenDone();
        mutate(`/activity-groups/${id}`);
      })
      .finally(() => setLoadingDeleteTodo(false));
  };

  useEffect(() => {
    if (debounceTitleValue) {
      handleUpdateTitleActivity(debounceTitleValue);
    }

    return () => setTitleValue("");
  }, [debounceTitleValue]);

  useEffect(() => {
    if (activityData?.todo_items?.length > 0) {
      const getActiveTodo = activityData.todo_items.filter(
        (todo) => todo.is_active === 0
      );
      const getTodoID = getActiveTodo.map((todo) => todo.id);

      setCompletedTodo(getTodoID);
    }

    return () => setCompletedTodo([]);
  }, [activityData]);

  const isTodoItemSortable =
    sortPicked === SORT_TYPE.NEW
      ? activityData?.todo_items?.sort((a, b) => Number(b.id) - Number(a.id))
      : sortPicked === SORT_TYPE.OLD
      ? activityData?.todo_items?.sort((a, b) => Number(a.id) - Number(b.id))
      : sortPicked === SORT_TYPE.AZ
      ? activityData?.todo_items?.sort((a, b) =>
          a.title?.toLowerCase().localeCompare(b.title?.toLowerCase())
        )
      : sortPicked === SORT_TYPE.ZA
      ? activityData?.todo_items?.sort((a, b) =>
          b.title?.toLowerCase().localeCompare(a.title?.toLowerCase())
        )
      : activityData?.todo_items?.sort(
          (a, b) => completedTodo.includes(a.id) - completedTodo.includes(b.id)
        );

  useEffect(() => {
    if (activityData) {
      document
        .querySelector(".chakra-editable__preview")
        .setAttribute("data-cy", "todo-title");
    }
  }, [activityData]);

  useEffect(() => {
    if (methodType === "post") {
      setValue("priority", "very-high");
    }
  }, [methodType]);

  return (
    <Layouts title={`List Item for ${activityData?.title ?? ""}`}>
      <Flex
        flexWrap="wrap"
        m="43px 0px 55px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          w={["full", "auto"]}
          align="center"
          direction="row"
          spacing="19px"
        >
          <chakra.button
            data-cy="todo-back-button"
            onClick={() => navigate("/")}
            _hover={{ opacity: 0.9 }}
          >
            <BackIcon w={["21px", "16px"]} h={["21px", "24px"]} />
          </chakra.button>

          <Skeleton
            isLoaded={!isLoading}
            w={["189px", "189px", "189px", "430px"]}
            h={activityData ? "auto" : ["24px", "24px", "24px", "34px"]}
          >
            <Editable
              color="text.500"
              fontWeight={[600, 700]}
              onChange={(val) => setTitleValue(val)}
              w={["189px", "189px", "189px", "430px"]}
              lineHeight={["24px", "24px", "24px", "54px"]}
              fontSize={["16px", "18px", "18px", "36px"]}
              defaultValue={activityData?.title}
            >
              <EditablePreview />
              <EditableInput />
              <EditableControls />
            </Editable>
          </Skeleton>
        </Stack>

        <Stack
          mt={["34px", "0"]}
          justify={["end", "inherit"]}
          w={["100%", "auto"]}
          direction="row"
          align="center"
          spacing="18px"
        >
          <MenuSort onChange={(e) => setSortPicked(e.keyName)} />
          <Button
            colorScheme="primary"
            leftIcon={<PlusIcon />}
            onClick={onOpen}
            data-cy="todo-add-button"
            fontSize={["12px", "12px", "12px", "18px"]}
            lineHeight={["18px", "18px", "18px", "27px"]}
          >
            Tambah
          </Button>
        </Stack>
      </Flex>

      {!isLoading && activityData?.todo_items?.length <= 0 ? (
        <Empty />
      ) : (
        <SimpleGrid pb="10" columns={1} spacing="15px">
          {isLoading
            ? Array.from(new Array(10)).map((_, i) => <Fallback key={i} />)
            : isTodoItemSortable?.map((todo, i) => {
                const isCompletedTodo = completedTodo.includes(todo.id);

                return (
                  <Card
                    i={i}
                    key={i}
                    title={todo?.title}
                    isActive={isCompletedTodo}
                    priority={todo?.priority}
                    handleCompleted={(e) => handleCompletedTodo(e, todo)}
                    handleDeleteAction={() => {
                      setTodoPicked(todo);
                      onOpenModalDelete();
                    }}
                    handleEditAction={() => {
                      setTodoPicked(todo);
                      setMethodType("patch");

                      setValue("title", todo?.title);
                      setValue("priority", todo?.priority);
                      onOpen();
                    }}
                  />
                );
              })}
        </SimpleGrid>
      )}

      <ModalCreate
        register={register}
        control={control}
        isOpen={isOpen}
        methodType={methodType}
        isLoadingButton={loadingProcess}
        disabledButton={!isValid || loadingProcess}
        onSubmit={handleSubmit(handleProcessTodo)}
        onClose={() => {
          onClose();
          setMethodType("post");
          resetForm({
            title: "",
            priority: "very-high",
          });
        }}
      />

      <ModalDelete
        keyName="List Item"
        isOpenDone={isOpenDone}
        onCloseDone={onCloseDone}
        isOpen={isOpenModalDelete}
        title={todoPicked?.title}
        onClose={onCloseModalDelete}
        handleDelete={handleDeleteTodo}
        isLoadingDelete={loadingDeleteTodo}
      />
    </Layouts>
  );
};

export default ItemLists;
