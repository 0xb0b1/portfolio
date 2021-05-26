import { Center, IconButton, Icon } from "@chakra-ui/react";
import { FiGithub, FiInstagram, FiLink, FiLinkedin } from "react-icons/fi";

import { socialLinks } from "./social-links";

export const SocialButton = () => {
  return (
    <Center h="100px" color="gray.50">
      {socialLinks.map((item, index) => (
        <IconButton
          key={index}
          as="a"
          href={item.link}
          fontSize={["1.4rem", "1.7rem", "2rem"]}
          variant="unstyled"
          aria-label={item.name}
          icon={<Icon as={item.icon} />}
          _hover={{ color: "pink.500" }}
        />
      ))}
    </Center>
  );
};
