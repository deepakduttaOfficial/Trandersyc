import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  GridItem,
  Image,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import loginlogo from "../../assets/home/login_logo.svg";

const Signin = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: false,
    success: false,
    loading: false,
  });
  const { email, password } = value;

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
      <Container maxW={"xl"}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} w={"full"} mb={1}>
            <Image src={loginlogo} />
          </VStack>

          <SimpleGrid columns={2} columnGap={3} rowGap={4} w="full">
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel fontSize={"14px"}>Email</FormLabel>
                <Input
                  placeholder="Enter your email"
                  size="lg"
                  value={email}
                  onChange={handleChange("email")}
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
                  value={password}
                  onChange={handleChange("password")}
                />
              </FormControl>
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
                    Forgot your password?{" "}
                    <Text as={NavLink} to="/" color={"brand.100"}>
                      Reset your password
                    </Text>{" "}
                  </Text>
                  <Text fontSize={"sm"}>
                    Don't have an account?{" "}
                    <Text as={NavLink} to="/signup" color={"brand.100"}>
                      Sign up
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

export default Signin;
