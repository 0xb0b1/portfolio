import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { RiMenu4Line } from "react-icons/ri";
import { useMenu } from "../../contexts/MenuDrawerContext";

export const Header = () => {
  const { onOpen } = useMenu();

  return (
    <Flex
      as="header"
      w="100%"
      h={["10", "20"]}
      mx="auto"
      px="6"
      align="center"
      justify="space-between"
      bg="gray.900"
      color="gray.50"
    >
      <IconButton
        aria-label="Open navitation"
        icon={<Icon as={RiMenu4Line} />}
        fontSize="24"
        mr="2"
        variant="unstyled"
        onClick={onOpen}
        position="absolute"
      />
    </Flex>
  );
};
