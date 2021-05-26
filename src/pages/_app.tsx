import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { MenuDrawerProvider } from "../contexts/MenuDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MenuDrawerProvider>
        <Component {...pageProps} />
      </MenuDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
