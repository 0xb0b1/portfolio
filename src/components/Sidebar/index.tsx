import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

import { SidebarNav } from "./SidebarNav";

import { useMenu } from "../../context/MenuDrawerContext";
import React from "react";

export const Sidebar = () => {
  const { onClose, isOpen } = useMenu();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={() => {}}>
      <DrawerOverlay>
        <DrawerContent color="gray.50" bg="gray.900" p="4">
          <DrawerCloseButton onClick={onClose} mt="6" />

          <DrawerHeader
            textTransform="uppercase"
            fontWeight="900"
            fontSize="20"
          >
            Navigation
          </DrawerHeader>

          <DrawerBody mx="auto" mt="10">
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
