import { Box, Text, Link, HStack, Container } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" borderTop="1px solid" borderColor="rgba(255, 232, 31, 0.15)" bg="rgba(9, 9, 20, 0.95)">
    <Container maxW="container.lg" py={6} px={6}>
      <HStack justify="space-between" wrap="wrap" gap={2}>
        <Text fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} Lenard To. All rights reserved. May the Force be with you.
        </Text>
        <HStack spacing={4}>
          <Text fontSize="sm" color="gray.600">
            Forged with React & Chakra UI
          </Text>
          <Link
            href="#landing"
            fontSize="sm"
            color="#FFE81F"
            fontWeight="500"
            _hover={{ color: "#FFD700", textDecoration: "none" }}
          >
            Return to orbit ↑
          </Link>
        </HStack>
      </HStack>
    </Container>
  </Box>
);

export default Footer;
