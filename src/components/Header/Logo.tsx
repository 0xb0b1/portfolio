import { Box, Text, Tooltip } from "@chakra-ui/react";

interface LogoProps {
  name: string;
}

export const Logo = ({ name }: LogoProps) => {
  return (
    <Box mx="auto" fontSize="1xl">
      <Tooltip
        label="Paulo Vicente' Home page"
        aria-label="homepage tooltip"
        fontSize={["sm", "md", "lg"]}
        bg="gray.800"
        color="gray.50"
      >
        <Text fontFamily="Lato" fontWeight="900">{`<${name}/>`}</Text>
      </Tooltip>
    </Box>
  );
};
