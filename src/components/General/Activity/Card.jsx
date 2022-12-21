import { Box, Flex, chakra, Text } from "@chakra-ui/react";
import TrashIcon from "@app/icons/TrashIcon";
import { Link } from "react-router-dom";

const Card = ({ i }) => {
  const isKey = `activity_item_${i + 1}`;

  return (
    <Box
      bg="white"
      key={isKey}
      data-cy={isKey}
      borderRadius="12px"
      mb={["20px", "20px", "20px", "26px"]}
      w={["150px", "150px", "150px", "235px"]}
      h={["150px", "150px", "150px", "235px"]}
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
          to={`/list`}
          as={Link}
          color="text.500"
          fontWeight={700}
          fontSize={["14px", "14px", "14px", "18px"]}
          lineHeight={["21px", "21px", "21px", "27px"]}
        >
          New Activity
        </Text>

        <Flex align="center" justify="space-between">
          <Text
            color="#888888"
            fontWeight={500}
            fontSize={["10px", "10px", "10px", "14px"]}
            lineHeight={["15px", "15px", "15px", "21px"]}
          >
            6 Oktober 2021
          </Text>

          <chakra.button _hover={{ opacity: 0.9 }}>
            <TrashIcon />
          </chakra.button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
