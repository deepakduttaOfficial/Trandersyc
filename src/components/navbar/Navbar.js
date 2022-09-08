import React from "react";
import BgNavbar from "./BgNavbar";
import { Box, Flex, HStack, Image, useMediaQuery } from "@chakra-ui/react";
// logo
import logo from "../../assets/home/logo.png";
import SmNavbar from "./SmNavbar";

const Navbar = () => {
  const [mobile] = useMediaQuery("(max-width: 960px)");
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
              w={{ xl: 230, lg: 200, md: 180, base: 130 }}
            />
          </Box>
        </HStack>
        {mobile ? <SmNavbar /> : <BgNavbar />}
      </Flex>
    </Box>
  );
};

export default Navbar;
