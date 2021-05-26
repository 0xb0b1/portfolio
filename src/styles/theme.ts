import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Lato",
    body: "Nunito Sans",
  },
  styles: {
    global: {
      body: "gray.800",
      color: "gray.50",
    },
  },
});
