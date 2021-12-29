import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export const Head = () => {
  const click=()=>{
    window.location.replace("#contact")
  };
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-around"} p={3}>
        <Box>
          <Heading
            paddingTop={6}
            paddingBottom={3}
            as="h1"
            size={"4xl"}
            color="teal.400"
          >
            Dražen Vukušič
          </Heading>
          <Box
            fontSize={30}
            fontWeight={"bold"}
            paddingBottom={3}
            opacity={0.6}
          >
            Direktor & Trgovski potnik
          </Box>
          <Button colorScheme="teal" variant="outline" size='lg' onClick={click}>
            Konaktiraj me
          </Button>
        </Box>
        <Box p={4}>
          {/* Image necesa bo pač tle, če se tata hoče slikat kar....yea */}
        </Box>
      </Flex>
    </Box>
  );
};
