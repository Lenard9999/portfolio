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
        colorScheme="teal"
        px={3}
        py={1}
        borderRadius="full"
        fontSize="xs"
        textTransform="none"
        fontWeight="600"
        w="fit-content"
      >
        Software Engineer
      </Badge>
      <Heading
        as="h1"
        fontSize={["4xl", "5xl", "6xl"]}
        fontWeight="800"
        letterSpacing="-0.03em"
        lineHeight="1.1"
        color="gray.900"
      >
        Hi, I'm Lenard
      </Heading>
      <Text fontSize={["md", "lg"]} color="gray.600" lineHeight="1.8">
        I build scalable web apps and automation systems with React and AWS. I
        love turning complex problems into clean, practical solutions—especially
        when it helps make someone's life easier.
      </Text>
      <Text fontSize={["md", "lg"]} color="gray.600" lineHeight="1.8">
        Outside of work, I'm always tinkering with new technologies, traveling,
        exploring new ideas, and feeding my never-ending curiosity.
      </Text>
      <HStack spacing={3} pt={2} wrap="wrap">
        <Button
          as="a"
          href="#projects"
          colorScheme="teal"
          size="lg"
          px={8}
          borderRadius="xl"
          fontWeight="600"
        >
          See my work
        </Button>
        <Button
          as="a"
          href="#contact"
          variant="outline"
          size="lg"
          px={8}
          borderRadius="xl"
          fontWeight="600"
          borderColor="gray.300"
          color="gray.700"
          _hover={{ bg: "gray.100" }}
        >
          Get in touch
        </Button>
      </HStack>
    </Stack>
  </Box>
);

export default Landing;
