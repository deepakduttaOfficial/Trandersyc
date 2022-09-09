import React from "react";
import BgNavbar from "./BgNavbar";
import { Box, Flex, HStack, Image } from "@chakra-ui/react";
// logo
import logo from "../../assets/home/logo.png";
import SmNavbar from "./SmNavbar";

const Navbar = () => {
  return (
    <Box
      w={"full"}
      className="navbar"
      py={10}
      px={{ xl: "100px", lg: "40px", md: "20px", base: "10px" }}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <HStack flexGrow={1}>
          <Box>
            <Image
              src={logo}
              alt="Dan Abramov"
              w={{ xl: 230, lg: 200, base: 180 }}
            />
          </Box>
        </HStack>
        <BgNavbar />
        <SmNavbar />
      </Flex>
    </Box>
  );
};

export default Navbar;
