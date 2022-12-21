import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Layouts from "@app/components/Layouts";
import Button from "@app/components/General/Button";
import PlusIcon from "@app/icons/PlusIcon";
import Card from "@app/components/General/Activity/Card";

const Dashboard = () => {
  return (
    <Layouts>
      <Flex justifyContent="space-between" alignItems="center">
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
          data-cy="activity-title"
          fontSize={["12px", "12px", "12px", "18px"]}
          lineHeight={["18px", "18px", "18px", "27px"]}
        >
          Tambah
        </Button>
      </Flex>

      <SimpleGrid
        mt={["37px", "37px", "37px", "49px"]}
        spacing="20px"
        columns={[2, 2, 2, 4]}
      >
        {Array.from(new Array(10)).map((_, i) => (
          <Card i={i} />
        ))}
      </SimpleGrid>
    </Layouts>
  );
};

export default Dashboard;
