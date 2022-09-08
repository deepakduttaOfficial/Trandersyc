import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import tradeJournal from "../../assets/home/trade_journal.png";

import appstore from "../../assets/home/appstore.svg";
import googleplay from "../../assets/home/googleplay.svg";

const Hero = () => {
  return (
    <Stack
      spacing={8}
      px={{ xl: "100px", lg: "40px", md: "20px", base: "10px" }}
      color={"brand.light"}
      alignItems={"center"}
      mt={5}
    >
      <Box textAlign={"center"}>
        <Heading
          as="h4"
          fontFamily={"inherit"}
          fontWeight={500}
          size={{ xl: "xl", lg: "lg", base: "lg" }}
          textAlign={"center"}
        >
          The Trading Journal To Boost Your Performance
        </Heading>
        <Heading
          as="h6"
          size={{ base: "sm", xs: "xs" }}
          fontWeight={500}
          mt={2}
        >
          The Best Trading Journal Software to Help You Find Your Edge
        </Heading>
      </Box>
      <Box textAlign={"center"}>
        <Button
          size="md"
          w={"full"}
          as={NavLink}
          to={"/signin"}
          bg={"transparent"}
          _hover={{ bgColor: "brand.200" }}
          color="#0f1014"
          border="2px"
          bgColor={"brand.100"}
          px={10}
          py={6}
          fontSize={"lg"}
          letterSpacing={"1px"}
        >
          TRY IT FREE FOR 7 DAYS
        </Button>
        <Text mt={2}>*No Credit Card Required</Text>
      </Box>
      <Box>
        <Image src={tradeJournal} />
      </Box>
      <Box>
        <HStack spacing={10}>
          <Box as={NavLink} to="/">
            <Image src={appstore} />
          </Box>
          <Box as={NavLink} to="/">
            <Image src={googleplay} />
          </Box>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Hero;
