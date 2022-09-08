import React from "react";
import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import tradeAnalytics from "../../assets/home/Trade-Journal-Analytics.png";

const Simulate = () => {
  const [md] = useMediaQuery("(max-width: 960px)");
  const [sm] = useMediaQuery("(max-width: 800px)");
  const miniItem = ({ title, body }) => {
    return (
      <Box>
        <Heading
          as={"h4"}
          color={"brand.light"}
          fontSize={"16px"}
          fontWeight={"bold"}
        >
          {title}
        </Heading>
        <Text as={"p"} color={"brand.light"} fontWeight={"normal"}>
          {body}
        </Text>
      </Box>
    );
  };
  const maxItem = ({ title, body }) => {
    return (
      <Box>
        <Heading
          as={"h4"}
          color={"brand.light"}
          fontSize={"26px"}
          fontWeight={"normal"}
        >
          {title}
        </Heading>
        <Text color={"brand.light"} fontWeight={"semibold"} mt={2}>
          {body}
        </Text>
      </Box>
    );
  };

  return (
    <Stack
      px={{ xl: "100px", lg: "40px", md: "20px", base: "10px" }}
      color={"brand.light"}
      mt={"100px"}
      flexDir={sm ? "column-reverse" : "row"}
      justifyContent={sm ? "center" : "space-between"}
      alignItems={!sm && "center"}
      py={20}
    >
      <Box w={sm ? "100%" : "41%"} px={"15px"} mt={sm ? 10 : 0}>
        <VStack alignItems={"flex-start"}>
          {maxItem({
            title: "Smart Trades Feedback",
            body: `Evaluate your current and future setup performances. Take the right direction based on your trading patterns.`,
          })}
        </VStack>

        <VStack ml={md ? "0px" : "67px"} mt={"40px"} spacing={10}>
          {miniItem({
            title: "Simulator",
            body: `Create various trading scenarios based on your trading journal data, allowing you to quickly find your edge.`,
          })}
          {miniItem({
            title: "Evaluator",
            body: `Easily evaluate how each of your strategies performs in comparison to one another.`,
          })}
        </VStack>
      </Box>
      <Box w={sm ? "100%" : "54%"}>
        <Image src={tradeAnalytics} />
      </Box>
    </Stack>
  );
};

export default Simulate;
