import React from "react";
import { Button, HStack, Stack } from "@chakra-ui/react";

// logo
import Navitem from "./Navitem";
import { NavLink } from "react-router-dom";

const BgNavbar = () => {
  return (
    <HStack>
      <Navitem link={"/"} title={"Home"} active />
      <Navitem link={"/"} title={"Features"} />
      <Navitem link={"/"} title={"Tutorials"} />
      <Stack direction="row" spacing={5} align="center">
        <Button
          size="md"
          as={NavLink}
          to={"/signup"}
          bg={"transparent"}
          color={"gray.400"}
          _hover={{ bgColor: "brand.100", color: "#0f1014" }}
          border="2px"
          borderColor="brand.100"
          borderRadius={"1px"}
        >
          Signup
        </Button>
        <Button
          size="md"
          as={NavLink}
          to={"/signin"}
          bg={"transparent"}
          color={"gray.400"}
          _hover={{ color: "#fff" }}
          border="2px"
          borderColor={"#707070"}
          borderRadius={"1px"}
        >
          Signin
        </Button>
      </Stack>
    </HStack>
  );
};

export default BgNavbar;
