import { Box, Image, Badge, Heading, Text, Stack, Button, HStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  tech = [],
  image,
  repoLink,
  liveLink,
}) => (
  <Box
    bg="white"
    borderWidth="1px"
    borderColor="gray.200"
    borderRadius="2xl"
    overflow="hidden"
    transition="all 0.2s ease"
    _hover={{ shadow: "lg", transform: "translateY(-2px)", borderColor: "gray.300" }}
    display="flex"
    flexDirection="column"
  >
    {image && (
      <Box overflow="hidden">
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          w="100%"
          h="180px"
          transition="transform 0.3s ease"
          _groupHover={{ transform: "scale(1.03)" }}
        />
      </Box>
    )}
    <Box p={5} flex="1" display="flex" flexDirection="column">
      <Stack spacing={3} flex="1">
        <Heading size="sm" fontWeight="700" color="gray.900" letterSpacing="-0.01em">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500" noOfLines={3} lineHeight="1.7">
          {description}
        </Text>
        <HStack wrap="wrap" spacing={1} gap={1}>
          {tech.map((t) => (
            <Badge
              key={t}
              colorScheme="teal"
              variant="subtle"
              fontSize="xs"
              px={2}
              py={0.5}
              borderRadius="md"
              fontWeight="500"
            >
              {t}
            </Badge>
          ))}
        </HStack>
      </Stack>
      {(liveLink || repoLink) && (
        <HStack spacing={2} pt={4} mt="auto">
          {liveLink && (
            <Button
              as="a"
              href={liveLink}
              target="_blank"
              size="sm"
              colorScheme="teal"
              rightIcon={<ExternalLinkIcon />}
              borderRadius="lg"
              fontWeight="600"
            >
              Live
            </Button>
          )}
          {repoLink && (
            <Button
              as="a"
              href={repoLink}
              target="_blank"
              size="sm"
              variant="outline"
              borderRadius="lg"
              fontWeight="600"
              leftIcon={<FaGithub />}
              borderColor="gray.300"
              color="gray.700"
              _hover={{ bg: "gray.50" }}
            >
              Code
            </Button>
          )}
        </HStack>
      )}
    </Box>
  </Box>
);

export default ProjectCard;
