import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => (
  <Box id="projects" py={16}>
    <Box mb={10}>
      <Heading
        fontSize={["2xl", "3xl"]}
        fontWeight="700"
        letterSpacing="-0.02em"
        color="white"
        mb={3}
      >
        The Holocron
      </Heading>
      <Text color="gray.400" fontSize="md">
        A collection of missions I've completed across different sectors of the galaxy.
      </Text>
    </Box>
    <SimpleGrid columns={[1, 2, 3]} spacing={6}>
      {projects.map((p) => (
        <ProjectCard key={p.id} {...p} />
      ))}
    </SimpleGrid>
  </Box>
);

export default Projects;
