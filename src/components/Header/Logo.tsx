import { Box, Text, Image } from "@chakra-ui/react";

interface LogoProps {
  name: string;
}

export const Logo = ({ name }: LogoProps) => {
  return (
    <Box mx="auto" fontSize={["1xl", "2xl", "3xl"]}>
      <Text fontFamily="Lato" fontWeight="900">{`<${name}/>`}</Text>
    </Box>
  );
};
