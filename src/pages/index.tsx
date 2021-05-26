import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { HomeContainer } from "../components/HomeContainer";
import { Sidebar } from "../components/Sidebar";
import { SocialButton } from "../components/SocialButton";

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

        <Flex
          direction="column"
          fontSize={["3xl", "5xl", "7xl"]}
          mt={["20", "10", "2"]}
        >
          <HomeContainer />

          <SocialButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
