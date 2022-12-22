import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  Text,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { TODO_INDICATOR } from "@app/utils/constants";
import MenuSelect from "../MenuSelect";

const priorityDatas = TODO_INDICATOR.map((todoIndicator) => ({
  label: todoIndicator.name,
  value: todoIndicator.value,
  icon: <Box w="9px" h="9px" borderRadius="50px" bg={todoIndicator.color} />,
}));

const ModalCreate = ({
  isOpen,
  onClose,
  control,
  register,
  disabledButton,
  isLoadingButton,
  onSubmit,
  methodType,
}) => {
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      size={["xs", "sm", "md", "2xl"]}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent data-cy="modal-add" borderRadius="12px">
        <form onSubmit={onSubmit}>
          <ModalHeader
            py="24px"
            borderBottom="1px solid #E5E5E5"
            display="flex"
            w="full"
            alignItems="center"
          >
            <Text
              data-cy="modal-add-title"
              fontWeight={600}
              fontSize={["16px", "16px", "16px", "18px"]}
            >
              {methodType === "post" ? "Tambah" : "Ubah"} List Item
            </Text>
            <ModalCloseButton
              data-cy="modal-add-close-button"
              top="18px !important"
            />
          </ModalHeader>
          <ModalBody mt={["23px", "23px", "23px", "38px"]}>
            <FormControl mb={["23px", "23px", "23px", "26px"]}>
              <FormLabel
                data-cy="modal-add-name-title"
                color="text.500"
                fontWeight={600}
                fontSize={["10px", "10px", "10px", "12px"]}
              >
                NAMA LIST ITEM
              </FormLabel>
              <Input
                h="52px"
                {...register("title", { required: true })}
                data-cy="modal-add-name-input"
                placeholder="Tambahkan nama list item"
                _placeholder={{
                  color: "#A4A4A4",
                  fontWeight: 400,
                  fontSize: ["14px", "14px", "14px", "16px"],
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel
                data-cy="modal-add-priority-title"
                color="text.500"
                fontWeight={600}
                fontSize={["10px", "10px", "10px", "12px"]}
              >
                PRIORITY
              </FormLabel>

              <Controller
                name="priority"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <MenuSelect
                    value={value}
                    onChange={onChange}
                    options={priorityDatas}
                  />
                )}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter
            mt={["28px", "28px", "28px", "23px"]}
            borderTop="1px solid #E5E5E5"
          >
            <Button
              borderRadius="45px"
              h="54px"
              w="150px"
              type="submit"
              isLoading={isLoadingButton}
              data-cy="modal-add-save-button"
              colorScheme="primary"
              disabled={disabledButton}
              fontSize={["1rem", "1rem", "1rem", "18px"]}
            >
              Simpan
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreate;
