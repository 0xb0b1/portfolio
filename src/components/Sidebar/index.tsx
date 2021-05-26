import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
} from "@chakra-ui/react";

import { SidebarNav } from "./SidebarNav";

import { useMenu } from "../../contexts/MenuDrawerContext";
import React from "react";

export const Sidebar = () => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onClose, isOpen } = useMenu();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={() => {}}>
      <DrawerOverlay>
        <DrawerContent color="alphaWhite" bg="gray.900" p="4">
          <DrawerCloseButton onClick={onClose} mt="6" />

          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
