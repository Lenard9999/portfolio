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
    bg="rgba(14, 14, 30, 0.9)"
    borderWidth="1px"
    borderColor="rgba(255, 232, 31, 0.15)"
    borderRadius="2xl"
    overflow="hidden"
    transition="all 0.25s ease"
    _hover={{
      boxShadow: "0 0 24px rgba(255, 232, 31, 0.15), 0 8px 32px rgba(0,0,0,0.4)",
      transform: "translateY(-3px)",
      borderColor: "rgba(255, 232, 31, 0.4)",
    }}
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
        <Heading size="sm" fontWeight="700" color="gray.100" letterSpacing="-0.01em">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.400" noOfLines={3} lineHeight="1.7">
          {description}
        </Text>
        <HStack wrap="wrap" spacing={1} gap={1}>
          {tech.map((t) => (
            <Badge
              key={t}
              fontSize="xs"
              px={2}
              py={0.5}
              borderRadius="md"
              fontWeight="500"
              bg="rgba(255, 232, 31, 0.1)"
              color="#FFE81F"
              border="1px solid rgba(255, 232, 31, 0.2)"
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
              rightIcon={<ExternalLinkIcon />}
              borderRadius="lg"
              fontWeight="600"
              bg="#FFE81F"
              color="#090914"
              _hover={{ bg: "#FFD700" }}
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
              borderColor="rgba(255, 232, 31, 0.3)"
              color="gray.300"
              _hover={{ bg: "rgba(255, 232, 31, 0.1)", borderColor: "#FFE81F" }}
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
