import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        backgroundColor="white"
        display="flex"
        p={2}
        m="15px 0"
        w="100%"
        justifyContent="center"
        borderRadius={10}
      >
        <Text fontSize="4xl">ChatX</Text>
      </Box>
      <Box backgroundColor="white" p={4} w="100%" borderRadius={10}>
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab w="50%">Login</Tab>
            <Tab w="50%">Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
