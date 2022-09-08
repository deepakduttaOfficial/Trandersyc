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
import tradeJournalreporting from "../../assets/home/tradeJournalreporting.png";

const Intrady = () => {
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
      flexDir={sm ? "column-reverse" : "row-reverse"}
      justifyContent={sm ? "center" : "space-between"}
      alignItems={!sm && "center"}
      py={20}
      bgColor={"#181c27"}
    >
      <Box w={sm ? "100%" : "41%"} px={"15px"} mt={sm ? 10 : 0}>
        <VStack alignItems={"flex-start"}>
          {maxItem({
            title: "Find Your Trading Edge",
            body: `Forget trying to interpret hundreds of spreadsheets of stock trading data. Replace those spreadsheets with our easy to use reports to understand your trading behavior quickly.`,
          })}
        </VStack>

        <VStack ml={md ? "0px" : "67px"} mt={"40px"} spacing={10}>
          {miniItem({
            title: "Find and Refine Your Trading Edge",
            body: `We have synthesized everything you need to know into two reports. Refine your stock trading from feedback generated reports designed to provide quick and useful information.`,
          })}
          {miniItem({
            title: "Understand Your Numbers",
            body: ` We give you feedback in plain English. Let our trading journal software interpret your data.`,
          })}
          {miniItem({
            title: "Get Powerful Feedback",
            body: `Have a clear picture of your trading patterns with customizable reports that helps you understand your unique trading edge.`,
          })}
        </VStack>
      </Box>
      <Box w={sm ? "100%" : "54%"}>
        <Image src={tradeJournalreporting} />
      </Box>
    </Stack>
  );
};

export default Intrady;
