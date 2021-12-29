import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";

export const Contacts = () => {
  return (
    <Box id="contact">
      <Stack spacing={4}>
        <Heading
          paddingTop={6}
          paddingBottom={3}
          as="h1"
          size={"3xl"}
          color="teal.400"
        >
          Kontaktirajte me
        </Heading>
        <Flex fontSize={25}>
          <Box>
            <Text fontWeight={"bold"} py={2}>
              E-mail:{" "}
              <Link
                href="mailto:vuk1.drazen1@gmail.com"
                isExternal
                color={"teal.300"}
              >
                vuk1.drazen1@gmail.com
              </Link>
            </Text>
            <Text fontWeight={"bold"} py={2}>
              Telefon:{" "}
              <Link
                href="tel:+38631388018"
                isExternal
                color={"teal.300"}
              >
                031 388 018
              </Link>
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};
