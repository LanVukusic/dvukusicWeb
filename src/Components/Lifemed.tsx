import {
  Image,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export const Lifemed = () => {
  return (
    <Box>
      <Stack spacing={6}>
        {/* Heading */}
        <Flex
          justifyContent={"space-around"}
          alignItems={"center"}
          flexDir={["column", "column", "row", "row"]}
        >
          <Box>
            <Heading as="h1" fontSize={"5rem"} textColor={"teal.400"}>
              LifeMed
            </Heading>
            <Text
              fontSize={30}
              fontWeight={"bold"}
              paddingBottom={3}
              opacity={0.6}
            >
              Trgovski potnik
            </Text>
          </Box>
          <Image boxSize="15rem" src="lifemed.png" alt="Dan Abramov" />
        </Flex>

        <Heading as="h2" color="gray.600">
          Na kratko
        </Heading>
        <Text fontSize={20}>
          <p>
            boriosam cum error invenor sit amet consectetur adipisicing elit.
            Tempore expedita nihil, aspernatur repellendus quidem repudiandae,
            cupiditate
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            cupiditate laboriosam cum error inventore eaque! Quia minus ipsa cum
            earum.
          </p>
        </Text>

        <Tabs variant="line" colorScheme="teal" pt={"2rem"}>
          <TabList>
            <Tab fontSize={"1.5rem"} px={["0.4rem", "1rem", "1rem", "2rem"]}>
              Kavomati
            </Tab>
            <Tab fontSize={"1.5rem"} px={["0.4rem", "1rem", "1rem", "2rem"]}>
              Vodomati
            </Tab>
            <Tab fontSize={"1.5rem"} px={["0.4rem", "1rem", "1rem", "2rem"]}>
              Čistilci zraka
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Text fontSize={20} pt={4}>
                <p>
                  boriosam cum error invenor sit amet consectetur adipisicing
                  elit. Tempore expedita nihil, aspernatur repellendus quidem
                  repudiandae, cupiditate
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam cupiditate laboriosam cum error inventore eaque! Quia
                  minus ipsa cum earum.
                </p>
              </Text>

              <UnorderedList pt={4} fontSize={20} fontWeight={"semibold"} opacity={0.9}>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </TabPanel>
            <TabPanel>
              <p>nč ni tle. napisat moreš kej!</p>
            </TabPanel>
            <TabPanel>
              <p>tud tle ni nč. glej taprvo!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};
