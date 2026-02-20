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
        title: "Ready to send",
        description: "Your email client should open.",
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
          color="gray.900"
          mb={3}
        >
          Get in Touch
        </Heading>
        <Text color="gray.500" fontSize="md">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </Text>
      </Box>
      <Grid templateColumns={["1fr", "1fr", "1fr 2fr"]} gap={12}>
        <GridItem>
          <Stack spacing={6}>
            <Box>
              <Text fontWeight="600" color="gray.700" mb={1} fontSize="sm">
                Email
              </Text>
              <Text color="gray.500" fontSize="sm">
                lenardbto@gmail.com
              </Text>
            </Box>
            <Box>
              <Text fontWeight="600" color="gray.700" mb={3} fontSize="sm">
                Find me elsewhere
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
                  borderColor="gray.300"
                  color="gray.700"
                  _hover={{ bg: "gray.50" }}
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
                  borderColor="gray.300"
                  color="gray.700"
                  _hover={{ bg: "blue.50", borderColor: "blue.200" }}
                >
                  LinkedIn
                </Button>
              </VStack>
            </Box>
          </Stack>
        </GridItem>
        <GridItem>
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="2xl"
            p={8}
          >
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={5} align="stretch">
                <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                  <FormLabel fontSize="sm" fontWeight="600" color="gray.700">
                    Name
                  </FormLabel>
                  <Input
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    borderRadius="xl"
                    borderColor="gray.200"
                    _focus={{ borderColor: "teal.400", boxShadow: "0 0 0 3px rgba(20, 184, 166, 0.15)" }}
                  />
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel fontSize="sm" fontWeight="600" color="gray.700">
                    Email
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    borderRadius="xl"
                    borderColor="gray.200"
                    _focus={{ borderColor: "teal.400", boxShadow: "0 0 0 3px rgba(20, 184, 166, 0.15)" }}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.message && formik.errors.message}>
                  <FormLabel fontSize="sm" fontWeight="600" color="gray.700">
                    Message
                  </FormLabel>
                  <Textarea
                    name="message"
                    rows={5}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    borderRadius="xl"
                    borderColor="gray.200"
                    _focus={{ borderColor: "teal.400", boxShadow: "0 0 0 3px rgba(20, 184, 166, 0.15)" }}
                    resize="none"
                  />
                  <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  isLoading={formik.isSubmitting}
                  borderRadius="xl"
                  fontWeight="600"
                >
                  Send Message
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
