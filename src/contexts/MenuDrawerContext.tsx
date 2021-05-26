import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { ReactNode, useContext, createContext, useEffect } from "react";

interface MenuDrawerProviderProps {
  children: ReactNode;
}

type MenuDrawerContextData = UseDisclosureReturn;

const MenuDrawerContext = createContext({} as MenuDrawerContextData);

export const MenuDrawerProvider = ({ children }: MenuDrawerProviderProps) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <MenuDrawerContext.Provider value={disclosure}>
      {children}
    </MenuDrawerContext.Provider>
  );
};

export const useMenu = () => useContext(MenuDrawerContext);
