import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  GridItem,
  Image,
  Input,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import loginlogo from "../../assets/home/login_logo.svg";

const Signup = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  const isSubmit = (e) => {
    console.log("Click");
  };

  return (
    <Box color={"brand.light"}>
      <Container maxW={"xl"}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} w={"full"} mb={3}>
            <Image src={loginlogo} />
          </VStack>
          <SimpleGrid
            columns={2}
            columnGap={3}
            rowGap={4}
            w="full"
            as={FormControl}
            onSubmit={isSubmit}
          >
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel fontSize={"14px"}>First Name</FormLabel>
                <Input placeholder="First Name" size="lg" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel fontSize={"14px"}>Last Name</FormLabel>
                <Input placeholder="Last Name" size="lg" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize={"14px"}>Email</FormLabel>
                <Input placeholder="Enter your email" size="lg" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize={"14px"}>Number</FormLabel>
                <Input placeholder="Enter your Number" size="lg" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize={"14px"}>Password</FormLabel>
                <Input placeholder="Password" type={"password"} size="lg" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox defaultChecked>
                I have read and agree to the{" "}
                <Text as={NavLink} to={"/"} color="brand.100">
                  Terms and Conditions
                </Text>
              </Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                size="md"
                w={"full"}
                bg={"transparent"}
                _hover={{ bgColor: "brand.200" }}
                _focus={{ bgColor: "brand.200" }}
                color="#0f1014"
                border="2px"
                bgColor={"brand.100"}
                px={10}
                py={6}
                fontSize={"lg"}
                letterSpacing={"1px"}
                fontWeight={"bold"}
              >
                Sign Up
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Signup;
