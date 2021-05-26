import { Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { HomeContainer } from "../components/HomeContainer";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
        align="center"
        justify="center"
      >
        <Sidebar />

        <HomeContainer />
      </Flex>
    </Flex>
  );
};

export default Home;
