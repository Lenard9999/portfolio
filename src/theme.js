import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#F8FAFC",
        color: "gray.800",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: "-0.02em",
      },
    },
  },
});

export default theme;
