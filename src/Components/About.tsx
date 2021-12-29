import { Text, Box, Heading, Stack, Tag, Divider } from "@chakra-ui/react";

const H2 = () => {
  return <Text fontSize={20} marginLeft={3}></Text>;
};

export const About = () => {
  return (
    <Box>
      <Stack spacing={5} marginTop={"10"} p="4">
        <Heading as="h2" color="gray.700" fontSize="50">
          O meni
        </Heading>
        <Text fontSize={20}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          expedita nihil, aspernatur repellendus quidem repudiandae, cupiditate
          atque assumenda voluptates repellat ex? Repellat nulla autem,
          reprehenderit placeat corrupti quisquam? Provident aspernatur quidem
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          cupiditate laboriosam cum error inventore eaque! Quia minus ipsa cum
          earum.
        </Text>
        <Divider></Divider>
        <Box>
          <Heading as="h2" color="gray.700" marginY="6" textColor={"teal.400"}>
            Dosežki in pretekle zaposlitve
          </Heading>
          <Box>
            <Heading as="h3" color="gray.600">
              Organizacija festivalov
            </Heading>
            <Text fontSize={20}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              expedita nihil, aspernatur repellendus quidem repudiandae,
              cupiditate atque assumenda voluptates repellat ex? Repellat nulla
              autem, reprehenderit placeat corrupti quisquam? Provident
              aspernatur quidem
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              cupiditate laboriosam cum error inventore eaque! Quia minus ipsa
              cum earum.
            </Text>
          </Box>
          <Box marginY={4}>
            <Heading as="h3" color="gray.600">
              Gostinski obrati
            </Heading>
            <Text fontSize={20}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              expedita nihil, aspernatur repellendus quidem repudiandae,
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              expedita nihil, aspernatur repellendus quidem repudiandae,
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              cupiditate laboriosam cum error inventore eaque! Quia minus ipsa
              cum earum.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" color="gray.600">
              Turizem
            </Heading>
            <Text fontSize={20}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              expedita nihil, aspernatur repellendus quidem repudiandae,
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              cupiditate laboriosam cum error inventore eaque! Quia minus ipsa
              cum earum.
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
