import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import laptopTrade from "../../assets/home/Laptop-Trade-Journal.png";
import thinkorswim from "../../assets/home/thinkorswim.png";
import extrade from "../../assets/home/extrade.png";
import { NavLink } from "react-router-dom";

const LaptopTrade = () => {
  const [sm] = useMediaQuery("(max-width: 800px)");

  const maxItem = ({ title, body }) => {
    return (
      <Box>
        <Heading
          as={"h4"}
          color={"brand.light"}
          fontSize={"26px"}
          fontWeight={"normal"}
          bgGradient="linear(to-r, rgba(0,255,179,1) 0%,rgba(99,68,211,1) 100%)"
          bgClip="text"
        >
          {title}
        </Heading>
        <Text
          color={"brand.light"}
          fontSize={"18px"}
          fontWeight={"semibold"}
          mt={5}
        >
          {body}
        </Text>
      </Box>
    );
  };

  return (
    <Stack
      px={{ xl: "80px", lg: "40px", md: "20px", base: "10px" }}
      color={"brand.light"}
      mt={"100px"}
      flexDir={sm ? "column-reverse" : "row"}
      justifyContent={sm ? "center" : "space-between"}
      alignItems={"center"}
      py={15}
    >
      <Box w={sm ? "100%" : "41%"} px={"15px"}>
        <VStack alignItems={"flex-start"}>
          {maxItem({
            title: "Smart Trades Feedback",
            body: `Evaluate your current and future setup performances. Take the right direction based on your trading patterns.`,
          })}
        </VStack>
        <HStack
          alignItems={"flex-start"}
          py={sm ? 10 : 20}
          spacing={5}
          bgGradient="linear(to-r, rgb(92 57 223) 0%,rgb(46 29 112) 100%)"
          justifyContent={"space-between"}
          px={"10px"}
          mt={5}
          flexWrap="wrap"
        >
          <Image src={thinkorswim} w={"200px"} />
          <Image src={extrade} w={"200px"} />
        </HStack>
        <Button
          mt={10}
          size="md"
          w={"full"}
          as={NavLink}
          to={"/signin"}
          bg={"transparent"}
          _hover={{ bgColor: "brand.200" }}
          color="#0f1014"
          border="2px"
          bgColor={"brand.100"}
          py={6}
          fontSize={"lg"}
          letterSpacing={"1px"}
        >
          TRY IT FREE FOR 7 DAYS
        </Button>
      </Box>
      <Box w={sm ? "100%" : "60%"}>
        <Image src={laptopTrade} />
      </Box>
    </Stack>
  );
};

export default LaptopTrade;
