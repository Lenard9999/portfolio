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
        color="gray.900"
        mb={3}
      >
        Featured Projects
      </Heading>
      <Text color="gray.500" fontSize="md">
        A selection of work I've built across different industries and stacks.
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
