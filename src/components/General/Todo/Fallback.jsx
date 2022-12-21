import {
  Box,
  Stack,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";

const Fallback = () => {
  return (
    <Box
      bg="white"
      display="flex"
      alignItems="center"
      borderRadius="12px"
      transition=".3s all"
      justifyContent="space-between"
      px={["19px", "19px", "19px", "28px"]}
      py={["18px", "18px", "18px", "26px"]}
      h={["56px", "56px", "56px", "80px"]}
      boxShadow="0px 6px 10px rgba(0, 0, 0, 0.1)"
    >
      <Box display="flex" alignItems="center">
        <Skeleton
          mr="22px"
          h={["10px", "10px", "10px", "20px"]}
          w={["10px", "10px", "10px", "20px"]}
        />

        <Stack direction="row" align="center" spacing="16px">
          <Skeleton w="9px" h="9px" borderRadius="50px" />

          <SkeletonText
            noOfLines={1}
            fontWeight={500}
            color="#111111"
            fontSize="18px"
          >
            Telur Ayam
          </SkeletonText>

          <SkeletonCircle />
        </Stack>
      </Box>

      <SkeletonCircle />
    </Box>
  );
};

export default Fallback;
