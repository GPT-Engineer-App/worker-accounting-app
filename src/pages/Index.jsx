import { Box, Flex, Heading, Text, Button, VStack, Input, Image } from "@chakra-ui/react";
import { FaUserClock, FaCalendarAlt, FaPlus, FaMobileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} textAlign="center">
        <Image src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTQwNjQ4OTl8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={4} />
        <Heading mb={4}>Worker Accounting App</Heading>
        <Text fontSize="lg" mb={6}>
          Manage your work, time, and holidays efficiently with our mobile application.
        </Text>
        <VStack spacing={4} align="stretch">
          <Button leftIcon={<FaUserClock />} colorScheme="blue">
            Log Time
          </Button>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="green">
            Manage Holidays
          </Button>
          <Button leftIcon={<FaPlus />} colorScheme="purple">
            Add Worker
          </Button>
          <Button leftIcon={<FaMobileAlt />} colorScheme="teal">
            Download App
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;
