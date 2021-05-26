import { Stack } from "@chakra-ui/react";
import React from "react";

import { NavLink } from "./NavLink";

import { SiAboutDotMe } from "react-icons/si";
import { FaBlog } from "react-icons/fa";
import { RiCodeSSlashLine, RiContactsLine } from "react-icons/ri";

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
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
  );
};