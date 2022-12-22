import {
  Flex,
  chakra,
  Box,
  SkeletonText,
  Stack,
  SkeletonCircle,
} from "@chakra-ui/react";
import TrashIcon from "@app/icons/TrashIcon";

const Fallback = ({ i }) => {
  const isKey = `activity_item_${i + 1}`;

  return (
    <Box
      bg="white"
      key={isKey}
      data-cy={isKey}
      borderRadius="12px"
      w={["150px", "150px", "150px", "235px"]}
      h={["150px", "150px", "150px", "235px"]}
      boxShadow="0px 6px 10px rgba(0, 0, 0, 0.1)"
      p={[
        "13px 17px 17px 17px",
        "13px 17px 17px 17px",
        "13px 17px 17px 17px",
        "22px 25px 25px 27px",
      ]}
    >
      <Flex h="full" flexDirection="column" justifyContent="space-between">
        <Stack spacing={3}>
          <SkeletonText
            noOfLines={1}
            color="text.500"
            fontWeight={700}
            fontSize={["14px", "14px", "14px", "18px"]}
            lineHeight={["21px", "21px", "21px", "27px"]}
          >
            New Activity
          </SkeletonText>

          <SkeletonText
            w="50%"
            noOfLines={1}
            color="text.500"
            fontWeight={700}
            fontSize={["14px", "14px", "14px", "18px"]}
            lineHeight={["21px", "21px", "21px", "27px"]}
          >
            New
          </SkeletonText>
        </Stack>

        <Flex align="center" justify="space-between">
          <SkeletonText
            noOfLines={1}
            color="#888888"
            fontWeight={500}
            fontSize={["10px", "10px", "10px", "14px"]}
            lineHeight={["15px", "15px", "15px", "21px"]}
          >
            6 Oktober 2021
          </SkeletonText>

          <SkeletonCircle size={[5, 5, 5, 10]}>
            <TrashIcon />
          </SkeletonCircle>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Fallback;
