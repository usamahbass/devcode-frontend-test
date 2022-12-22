import { useState } from "react";
import { request } from "@app/utils/request";
import { Flex, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import useSwr, { mutate } from "swr";
import Layouts from "@app/components/Layouts";
import Button from "@app/components/General/Button";
import PlusIcon from "@app/icons/PlusIcon";
import Card from "@app/components/General/Activity/Card";
import Fallback from "@app/components/General/Activity/Fallback";
import Empty from "@app/components/General/Activity/Empty";
import ModalDelete from "@app/components/General/Modal/Delete";

const Dashboard = () => {
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

  const { data: activityData, isLoading } = useSwr(
    `/activity-groups?email=${import.meta.env.VITE_EMAIL_URL}`
  );

  const [activityPick, setActivityPick] = useState(null);
  const [loadingPostActivity, setLoadingPostActivity] = useState(false);
  const [loadingDeleteActivity, setLoadingDeleteActivity] = useState(false);

  const isActivityData = activityData?.data;

  const handleCreateActivity = () => {
    setLoadingPostActivity(true);

    request
      .post("/activity-groups", {
        title: "New Activity",
        email: import.meta.env.VITE_EMAIL_URL,
      })
      .then(() =>
        mutate(`/activity-groups?email=${import.meta.env.VITE_EMAIL_URL}`)
      )
      .finally(() => setLoadingPostActivity(false));
  };

  const handleDeleteActivity = () => {
    setLoadingDeleteActivity(true);

    request
      .delete(`/activity-groups/${activityPick?.id}`)
      .then(() => {
        onCloseModalDelete();
        onOpenDone();
        mutate(`/activity-groups?email=${import.meta.env.VITE_EMAIL_URL}`);
      })
      .finally(() => setLoadingDeleteActivity(false));
  };

  return (
    <Layouts title="Dashboard">
      <Flex
        m="43px 0px 55px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          color="text.500"
          fontWeight={700}
          data-cy="activity-title"
          lineHeight={["24px", "24px", "24px", "54px"]}
          fontSize={["16px", "16px", "16px", "36px"]}
        >
          Activity
        </Text>

        <Button
          colorScheme="primary"
          leftIcon={<PlusIcon />}
          data-cy="activity-add-button"
          isLoading={loadingPostActivity}
          fontSize={["12px", "12px", "12px", "18px"]}
          lineHeight={["18px", "18px", "18px", "27px"]}
          onClick={handleCreateActivity}
        >
          Tambah
        </Button>
      </Flex>

      {!isLoading && isActivityData?.length <= 0 ? (
        <Empty />
      ) : (
        <SimpleGrid
          pb="10"
          spacing="26px"
          mt={["37px", "37px", "37px", "49px"]}
          columns={[2, 2, 2, 4]}
        >
          {isLoading
            ? Array.from(new Array(10)).map((_, i) => <Fallback i={i} />)
            : isActivityData?.map((activity, i) => (
                <Card
                  i={i}
                  id={activity.id}
                  title={activity.title}
                  date={activity.created_at}
                  handleDeleteActivity={() => {
                    onOpenModalDelete();
                    setActivityPick(activity);
                  }}
                />
              ))}
        </SimpleGrid>
      )}

      <ModalDelete
        keyName="activity"
        isOpenDone={isOpenDone}
        onCloseDone={onCloseDone}
        isOpen={isOpenModalDelete}
        title={activityPick?.title}
        onClose={onCloseModalDelete}
        handleDelete={handleDeleteActivity}
        isLoadingDelete={loadingDeleteActivity}
      />
    </Layouts>
  );
};

export default Dashboard;
