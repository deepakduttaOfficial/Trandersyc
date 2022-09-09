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
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import loginlogo from "../../assets/home/login_logo.svg";

const Signup = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    error: false,
    success: false,
    loading: false,
  });
  const { firstName, lastName, email, number, password } = value;

  const handleChange = (name) => (e) => {
    setValue({
      ...value,
      [name]: e.target.value,
      error: false,
      success: false,
      loading: false,
    });
  };
  const isSubmit = () => {
    console.log(value);
  };

  return (
    <Box color={"brand.light"}>
      <style>{"body { background-color: #121721; }"}</style>
      <Container maxW={{ md: "xl", base: "full" }}>
        <VStack
          w="full"
          h="full"
          px={{ md: "20px", base: "10px" }}
          spacing={10}
          alignItems="flex-start"
        >
          <VStack spacing={3} w={"full"} mb={3}>
            <Image src={loginlogo} />
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={4} w="full">
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel fontSize={"14px"}>First Name</FormLabel>
                <Input
                  placeholder="First Name"
                  size="lg"
                  onChange={handleChange("firstName")}
                  value={firstName}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel fontSize={"14px"}>Last Name</FormLabel>
                <Input
                  placeholder="Last Name"
                  size="lg"
                  onChange={handleChange("lastName")}
                  value={lastName}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize={"14px"}>Email</FormLabel>
                <Input
                  placeholder="Enter your email"
                  size="lg"
                  onChange={handleChange("email")}
                  value={email}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize={"14px"}>Number</FormLabel>
                <Input
                  placeholder="Enter your Number"
                  size="lg"
                  onChange={handleChange("number")}
                  value={number}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize={"14px"}>Password</FormLabel>
                <Input
                  placeholder="Password"
                  type={"password"}
                  size="lg"
                  onChange={handleChange("password")}
                  value={password}
                />
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
                border="none"
                bgColor={"brand.100"}
                px={10}
                py={6}
                fontSize={"lg"}
                letterSpacing={"1px"}
                fontWeight={"bold"}
                borderRadius={"sm"}
                onClick={isSubmit}
              >
                Sign Up
              </Button>
            </GridItem>
            <GridItem colSpan={2}>
              <VStack w="full">
                <Box textAlign={"center"}>
                  <Text fontSize={"sm"}>
                    Already a user?
                    <Text as={NavLink} to="/signin" color={"brand.100"}>
                      {" "}
                      Login
                    </Text>
                  </Text>
                  <Text fontSize={"sm"}>
                    By clicking Sign Up you agree
                    <Text as={NavLink} to="/" color={"brand.100"}>
                      {" "}
                      Terms of Use
                    </Text>
                  </Text>
                </Box>
              </VStack>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Signup;
