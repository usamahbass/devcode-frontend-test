import { useNavigate } from "react-router-dom";
import { Box, Flex, chakra, Text } from "@chakra-ui/react";
import format from "date-fns/format";
import idLocale from "date-fns/locale/id";
import TrashIcon from "@app/icons/TrashIcon";

const Card = ({ i, title, id, handleDeleteActivity, date }) => {
  const isKey = `activity-item-${i + 1}`;

  const navigate = useNavigate();

  return (
    <Box
      bg="white"
      key={isKey}
      data-cy={isKey}
      borderRadius="12px"
      w="100%"
      h={["150px", "150px", "150px", "234px"]}
      boxShadow="0px 6px 10px rgba(0, 0, 0, 0.1)"
      p={[
        "13px 17px 17px 17px",
        "13px 17px 17px 17px",
        "13px 17px 17px 17px",
        "22px 25px 25px 27px",
      ]}
      transition=".3s all"
      _hover={{
        backgroundColor: "#F5F9FC",
        transform: "translateY(-10px)",
      }}
    >
      <Flex h="full" flexDirection="column" justifyContent="space-between">
        <Text
          color="text.500"
          fontWeight={700}
          data-cy="activity-item-title"
          fontSize={["14px", "14px", "14px", "18px"]}
          lineHeight={["21px", "21px", "21px", "27px"]}
          onClick={() => navigate(`/item-list/${id}`)}
          _hover={{
            cursor: "pointer",
          }}
        >
          {title}
        </Text>

        <Flex align="center" justify="space-between">
          <Text
            color="#888888"
            fontWeight={500}
            data-cy="activity-item-date"
            fontSize={["10px", "10px", "10px", "14px"]}
            lineHeight={["15px", "15px", "15px", "21px"]}
          >
            {format(new Date(date), "d LLLL yyyy", {
              locale: idLocale,
            })}
          </Text>

          <chakra.button
            data-cy="activity-item-delete-button"
            _hover={{ opacity: 0.9 }}
            onClick={handleDeleteActivity}
          >
            <TrashIcon />
          </chakra.button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
