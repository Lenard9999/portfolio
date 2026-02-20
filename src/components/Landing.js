import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Badge,
  HStack,
} from "@chakra-ui/react";

const Landing = () => (
  <Box id="landing" py={20}>
    <Stack spacing={6} maxW="2xl">
      <Badge
        px={3}
        py={1}
        borderRadius="full"
        fontSize="xs"
        textTransform="none"
        fontWeight="600"
        w="fit-content"
        bg="rgba(255, 232, 31, 0.12)"
        color="#FFE81F"
        border="1px solid rgba(255, 232, 31, 0.3)"
      >
        Jedi Full-Stack Engineer
      </Badge>
      <Heading
        as="h1"
        fontSize={["4xl", "5xl", "6xl"]}
        fontWeight="800"
        letterSpacing="-0.03em"
        lineHeight="1.1"
        color="white"
      >
        Hi, I'm Lenard
      </Heading>
      <Text fontSize={["md", "lg"]} color="gray.300" lineHeight="1.8">
        I use the Force of React and AWS to build scalable web apps and
        automation systems. My midi-chlorian count may be classified, but my
        ability to turn complex problems into clean, practical solutions? Very
        much real—and strong with this one.
      </Text>
      <Text fontSize={["md", "lg"]} color="gray.300" lineHeight="1.8">
        When I'm not wielding my keyboard like a lightsaber, I'm tinkering with
        new tech, exploring new galaxies (and restaurants), and feeding my
        never-ending curiosity. Do or do not—there is no try.
      </Text>
      <HStack spacing={3} pt={2} wrap="wrap">
        <Button
          as="a"
          href="#projects"
          size="lg"
          px={8}
          borderRadius="xl"
          fontWeight="600"
          bg="#FFE81F"
          color="#090914"
          _hover={{ bg: "#FFD700", transform: "translateY(-1px)" }}
          transition="all 0.2s"
        >
          View my Holocron
        </Button>
        <Button
          as="a"
          href="#contact"
          variant="outline"
          size="lg"
          px={8}
          borderRadius="xl"
          fontWeight="600"
          borderColor="rgba(255, 232, 31, 0.4)"
          color="gray.200"
          _hover={{ bg: "rgba(255, 232, 31, 0.1)", borderColor: "#FFE81F" }}
        >
          Send a Transmission
        </Button>
      </HStack>
    </Stack>
  </Box>
);

export default Landing;
