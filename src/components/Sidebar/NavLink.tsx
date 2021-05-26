import { Text, Link as ChakraLink, Icon } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        display="flex"
        align="center"
        _hover={{ color: "pink.500" }}
        {...rest}
      >
        <Icon as={icon} fontSize={["1.3rem", "1.5rem", "1.8rem", "2rem"]} />
        <Text
          ml="4"
          fontWeight="medium"
          fontSize={["1.1rem", "1.3rem", "1.5rem"]}
        >
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};
