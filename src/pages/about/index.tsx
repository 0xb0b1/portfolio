import { Flex, Box} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export const About = () => {
  return (
    <Flex>
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

        <Box>hello</Box>
      </Flex>
    </Flex>
  );
};

export default About;
