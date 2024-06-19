import { Box, Container, VStack, Text, Heading, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      {/* Header */}
      <Box as="header" bg="blue.500" color="white" py={4} textAlign="center">
        <Heading as="h1" size="xl">PhotoShare</Heading>
      </Box>

      {/* Feed Section */}
      <VStack spacing={8} py={8}>
        <Heading as="h2" size="lg">Feed</Heading>
        <Flex direction="column" align="center" width="100%">
          {/* Placeholder content */}
          <Box bg="gray.100" p={4} borderRadius="md" width="100%" mb={4}>
            <Text fontSize="lg" mb={2}>User1</Text>
            <Image src="https://via.placeholder.com/600x400" alt="Placeholder Image" borderRadius="md" />
            <Text mt={2}>This is a placeholder caption for the photo.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" width="100%" mb={4}>
            <Text fontSize="lg" mb={2}>User2</Text>
            <Image src="https://via.placeholder.com/600x400" alt="Placeholder Image" borderRadius="md" />
            <Text mt={2}>Another placeholder caption for a different photo.</Text>
          </Box>
        </Flex>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="blue.500" color="white" py={4} textAlign="center">
        <Text>&copy; 2023 PhotoShare. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;