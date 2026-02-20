import React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  useToast,
  Text,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string().min(10, "Too short").required("Required"),
    }),
    onSubmit: (values, actions) => {
      const mailto = `mailto:lenardbto@gmail.com?subject=${encodeURIComponent("Portfolio Contact from " + values.name)}&body=${encodeURIComponent(values.message + "\n\n" + values.email)}`;
      window.location.href = mailto;
      actions.setSubmitting(false);
      toast({
        title: "Transmission incoming!",
        description: "Your email client should open. May the Force be with you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    },
  });

  return (
    <Box id="contact" py={16}>
      <Box mb={10}>
        <Heading
          fontSize={["2xl", "3xl"]}
          fontWeight="700"
          letterSpacing="-0.02em"
          color="white"
          mb={3}
        >
          Open a Channel
        </Heading>
        <Text color="gray.400" fontSize="md">
          Have a mission briefing or just want to say hi? The Force brought you here—I'd love to hear from you.
        </Text>
      </Box>
      <Grid templateColumns={["1fr", "1fr", "1fr 2fr"]} gap={12}>
        <GridItem>
          <Stack spacing={6}>
            <Box>
              <Text fontWeight="600" color="gray.300" mb={1} fontSize="sm">
                Email
              </Text>
              <Text color="gray.400" fontSize="sm">
                lenardbto@gmail.com
              </Text>
            </Box>
            <Box>
              <Text fontWeight="600" color="gray.300" mb={3} fontSize="sm">
                Other Outposts
              </Text>
              <VStack align="start" spacing={2}>
                <Button
                  as="a"
                  href="https://github.com/lenard9999"
                  target="_blank"
                  leftIcon={<FaGithub />}
                  size="sm"
                  variant="outline"
                  borderRadius="lg"
                  borderColor="rgba(255, 232, 31, 0.3)"
                  color="gray.300"
                  _hover={{ bg: "rgba(255, 232, 31, 0.1)", borderColor: "#FFE81F" }}
                >
                  GitHub
                </Button>
                <Button
                  as="a"
                  href="https://linkedin.com/in/lenard-to-8634691a2/"
                  target="_blank"
                  leftIcon={<FaLinkedin />}
                  size="sm"
                  variant="outline"
                  borderRadius="lg"
                  borderColor="rgba(255, 232, 31, 0.3)"
                  color="gray.300"
                  _hover={{ bg: "rgba(255, 232, 31, 0.1)", borderColor: "#FFE81F" }}
                >
                  LinkedIn
                </Button>
              </VStack>
            </Box>
          </Stack>
        </GridItem>
        <GridItem>
          <Box
            bg="rgba(14, 14, 30, 0.9)"
            borderWidth="1px"
            borderColor="rgba(255, 232, 31, 0.15)"
            borderRadius="2xl"
            p={8}
          >
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={5} align="stretch">
                <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                  <FormLabel fontSize="sm" fontWeight="600" color="gray.300">
                    Name
                  </FormLabel>
                  <Input
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    borderRadius="xl"
                    borderColor="rgba(255, 232, 31, 0.2)"
                    bg="rgba(9, 9, 20, 0.6)"
                    color="gray.100"
                    _placeholder={{ color: "gray.600" }}
                    _focus={{ borderColor: "#FFE81F", boxShadow: "0 0 0 3px rgba(255, 232, 31, 0.15)" }}
                    _hover={{ borderColor: "rgba(255, 232, 31, 0.4)" }}
                  />
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel fontSize="sm" fontWeight="600" color="gray.300">
                    Email
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    borderRadius="xl"
                    borderColor="rgba(255, 232, 31, 0.2)"
                    bg="rgba(9, 9, 20, 0.6)"
                    color="gray.100"
                    _placeholder={{ color: "gray.600" }}
                    _focus={{ borderColor: "#FFE81F", boxShadow: "0 0 0 3px rgba(255, 232, 31, 0.15)" }}
                    _hover={{ borderColor: "rgba(255, 232, 31, 0.4)" }}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.message && formik.errors.message}>
                  <FormLabel fontSize="sm" fontWeight="600" color="gray.300">
                    Message
                  </FormLabel>
                  <Textarea
                    name="message"
                    rows={5}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    borderRadius="xl"
                    borderColor="rgba(255, 232, 31, 0.2)"
                    bg="rgba(9, 9, 20, 0.6)"
                    color="gray.100"
                    _placeholder={{ color: "gray.600" }}
                    _focus={{ borderColor: "#FFE81F", boxShadow: "0 0 0 3px rgba(255, 232, 31, 0.15)" }}
                    _hover={{ borderColor: "rgba(255, 232, 31, 0.4)" }}
                    resize="none"
                  />
                  <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  isLoading={formik.isSubmitting}
                  borderRadius="xl"
                  fontWeight="600"
                  bg="#FFE81F"
                  color="#090914"
                  _hover={{ bg: "#FFD700", transform: "translateY(-1px)" }}
                  transition="all 0.2s"
                >
                  Send Transmission
                </Button>
              </VStack>
            </form>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Contact;
