import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { capitalizeFirstLetter } from "@app/utils/helper";
import WarningIcon from "@app/icons/WarningIcon";
import InformationIcon from "@app/icons/InformationIcon";

const ModalDelete = ({
  isOpen,
  onClose,
  keyName,
  title,
  isOpenDone,
  onCloseDone,
  handleDelete,
  isLoadingDelete,
}) => {
  return (
    <>
      {/* DONE */}

      <Modal
        isCentered
        isOpen={isOpenDone}
        onClose={onCloseDone}
        motionPreset="slideInBottom"
      >
        <ModalOverlay data-cy="modal-information" />
        <ModalContent
          h="58px"
          data-cy="modal-information"
          w={["323px", "323px", "323px", "490px"]}
          borderRadius="12px"
        >
          <ModalBody
            p="1rem"
            gap="13px"
            display="flex"
            alignItems={["center", "center", "center", "start"]}
          >
            <InformationIcon />

            <Text
              fontWeight={500}
              color="#111111"
              textAlign="center"
              data-cy="modal-information-title"
              lineHeight={["21px", "21px", "21px", "27px"]}
              fontSize="14px"
            >
              {capitalizeFirstLetter(keyName ?? "activity")} berhasil dihapus
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => {
          document
            .querySelector(".chakra-modal__content-container")
            .setAttribute("data-cy", "modal-delete");

          setTimeout(() => {
            onClose();
          }, 100);
        }}
        motionPreset="slideInBottom"
        size={["xs", "sm", "md", "lg"]}
      >
        <ModalOverlay data-cy="modal-delete" />
        <ModalContent data-cy="modal-delete" borderRadius="12px">
          <ModalBody
            display="flex"
            alignItems="center"
            flexDir="column"
            py="12"
            justifyContent="center"
          >
            <WarningIcon />

            <Text
              w="400px"
              fontWeight={500}
              color="#111111"
              textAlign="center"
              data-cy="modal-delete-title"
              mt={["41px", "41px", "41px", "51px"]}
              lineHeight={["21px", "21px", "21px", "27px"]}
              fontSize={["14px", "14px", "14px", "18px"]}
            >
              Apakah anda yakin menghapus {keyName}{" "}
              <Text fontWeight={700}>“{title}”?</Text>
            </Text>
          </ModalBody>

          <ModalFooter
            pb={["36px", "36px", "36px", "43px"]}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={["10px", "10px", "10px", "20px"]}
          >
            <Button
              color="#4A4A4A"
              colorScheme="secondary"
              borderRadius="45px"
              h={["48px", "48px", "48px", "54px"]}
              w={["117px", "117px", "117px", "150px"]}
              onClick={onClose}
              fontWeight={600}
              data-cy="modal-delete-cancel-button"
              fontSize={["16px", "16px", "16px", "18px"]}
            >
              Batal
            </Button>
            <Button
              colorScheme="danger"
              borderRadius="45px"
              onClick={handleDelete}
              isLoading={isLoadingDelete}
              data-cy="modal-delete-confirm-button"
              h={["48px", "48px", "48px", "54px"]}
              w={["117px", "117px", "117px", "150px"]}
              fontWeight={600}
              fontSize={["16px", "16px", "16px", "18px"]}
            >
              Hapus
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

ModalDelete.defaultProps = {
  keyName: "activity",
  title: "Meeting dengan Client",
};

export default ModalDelete;
