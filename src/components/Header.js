import React from "react";
import { Box, Flex, HStack, IconButton, Link, Spacer, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => (
  <Box
    as="header"
    position="fixed"
    top={0}
    width="100%"
    bg="rgba(9, 9, 20, 0.85)"
    backdropFilter="saturate(180%) blur(12px)"
    zIndex={1000}
    borderBottom="1px solid"
    borderColor="rgba(255, 232, 31, 0.2)"
  >
    <Flex align="center" maxW="container.lg" mx="auto" px={6} py={4}>
      <Link href="#landing" _hover={{ textDecoration: "none" }}>
        <Text fontWeight="700" fontSize="lg" color="#FFE81F" letterSpacing="-0.02em">
          Lenard To
        </Text>
      </Link>
      <Spacer />
      <HStack spacing={8} mr={6}>
        <Link
          href="#landing"
          fontSize="sm"
          fontWeight="500"
          color="gray.400"
          _hover={{ color: "#FFE81F", textDecoration: "none" }}
          transition="color 0.2s"
        >
          Home
        </Link>
        <Link
          href="#projects"
          fontSize="sm"
          fontWeight="500"
          color="gray.400"
          _hover={{ color: "#FFE81F", textDecoration: "none" }}
          transition="color 0.2s"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          fontSize="sm"
          fontWeight="500"
          color="gray.400"
          _hover={{ color: "#FFE81F", textDecoration: "none" }}
          transition="color 0.2s"
        >
          Contact
        </Link>
      </HStack>
      <HStack spacing={1}>
        <IconButton
          as="a"
          href="https://github.com/lenard9999"
          target="_blank"
          aria-label="GitHub"
          icon={<FaGithub size={18} />}
          variant="ghost"
          size="sm"
          color="gray.400"
          _hover={{ color: "#FFE81F", bg: "rgba(255, 232, 31, 0.1)" }}
        />
        <IconButton
          as="a"
          href="https://linkedin.com/in/lenard-to-8634691a2/"
          target="_blank"
          aria-label="LinkedIn"
          icon={<FaLinkedin size={18} />}
          variant="ghost"
          size="sm"
          color="gray.400"
          _hover={{ color: "#FFE81F", bg: "rgba(255, 232, 31, 0.1)" }}
        />
      </HStack>
    </Flex>
  </Box>
);

export default Header;
