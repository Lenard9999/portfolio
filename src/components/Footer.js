import { Box, Text, Link, HStack, Container } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" borderTop="1px solid" borderColor="gray.200" bg="white">
    <Container maxW="container.lg" py={6} px={6}>
      <HStack justify="space-between" wrap="wrap" gap={2}>
        <Text fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} Lenard To. All rights reserved.
        </Text>
        <HStack spacing={4}>
          <Text fontSize="sm" color="gray.400">
            Built with React & Chakra UI
          </Text>
          <Link
            href="#landing"
            fontSize="sm"
            color="teal.500"
            fontWeight="500"
            _hover={{ color: "teal.600", textDecoration: "none" }}
          >
            Back to top ↑
          </Link>
        </HStack>
      </HStack>
    </Container>
  </Box>
);

export default Footer;
