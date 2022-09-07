import React from "react";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

// logo
import logo from "../../assets/home/logo.png";

const BgNavbar = () => {
  return (
    <Box maxW={"7xl"} className="navbar" py={10} px={20}>
      <Flex justifyContent={"space-between"}>
        <HStack flexGrow={1}>
          <Box>
            <Image src={logo} alt="Dan Abramov" w={230} />
          </Box>
        </HStack>
        <HStack>
          <Text>H</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default BgNavbar;
