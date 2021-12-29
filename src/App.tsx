import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Divider,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Head } from "./Components/Heading";
import { Contacts } from "./Components/Contacts";
import { Lifemed } from "./Components/Lifemed";
import { Footer } from "./Components/Footer";
import { About } from "./Components/About";

const myTheme = theme;
console.log(myTheme.fonts.body);

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW='container.xl'> 
      <Head></Head>
      <About></About>
      <Divider my={10}></Divider>
      <Lifemed></Lifemed>
      <Divider my={10}></Divider>
      <Contacts></Contacts>
    </Container>
    <Footer></Footer>
  </ChakraProvider>
)
