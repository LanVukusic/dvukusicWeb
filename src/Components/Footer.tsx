import { Box,Link, Stack } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Stack width="100%" backgroundColor={"gray.700"} color="whiteAlpha.900" p={4} spacing={4} fontSize={20} marginTop={200}>
      <Box><b> Property of Drazen Vukušič </b></Box>
      <Box>
        <b>Author:</b>&nbsp;
        <Link href="https://github.com/LanVukusic" isExternal color={"teal.300"}>
          Lan Vukušič
        </Link>
      </Box>
    </Stack>
  );
};
