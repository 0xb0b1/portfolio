import { Stack, Flex, Box } from "@chakra-ui/react";

import { NavLink } from "./NavLink";

import { SiAboutDotMe } from "react-icons/si";
import { FaBlog } from "react-icons/fa";
import { RiCodeSSlashLine, RiContactsLine, RiHome2Line } from "react-icons/ri";

export const SidebarNav = () => {
  return (
    <Box>
      <Flex justify="space-between" direction="column">
        <Stack spacing="12" align="flex-start" justify="center">
          <NavLink href="/" icon={RiHome2Line}>
            Home
          </NavLink>
          <NavLink href="/about" icon={SiAboutDotMe}>
            About
          </NavLink>
          <NavLink href="/work" icon={RiCodeSSlashLine}>
            Work
          </NavLink>
          <NavLink href="/contact" icon={RiContactsLine}>
            Contact
          </NavLink>
          <NavLink href="/blog" icon={FaBlog}>
            Blog Posts
          </NavLink>
        </Stack>
      </Flex>
    </Box>
  );
};
