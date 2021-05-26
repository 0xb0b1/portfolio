import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { RiMenuLine } from "react-icons/ri";
import { useMenu } from "../../contexts/MenuDrawerContext";

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useMenu();

  return (
    <Flex as="header" w="100%" h="20" mx="auto" mt="4" px="6" align="center">
      <IconButton
        aria-label="Open navitation"
        icon={<Icon as={RiMenuLine} />}
        fontSize="24"
        mr="2"
        // variant="unstyled"
        onClick={onOpen}
      />

      {/* <Logo /> */}

      {/* <Navigation /> */}

      <Flex align="center" ml="auto">
        {/* <SwitchThemeButton /> */}
      </Flex>
    </Flex>
  );
};
