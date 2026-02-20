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
        bg: "#090914",
        color: "#e2e8f0",
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
