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
import tradejournal from "../../assets/home/tradejournal.png";

const Tradingjournal = () => {
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
            title: " Trading Journal",
            body: `Start recording your trades with TraderSync and let our powerful
              journaling show you the path to minimize your mistakes.`,
          })}
        </VStack>

        <VStack ml={md ? "0px" : "67px"} mt={"40px"} spacing={10}>
          {miniItem({
            title: "Journal Trades",
            body: `The simplest yet most powerful stock trading journal to date.
              Build a vault of valuable information that can be analyzed at any
              time from anywhere.`,
          })}
          {miniItem({
            title: "Stop Losing Profits",
            body: ` Refine your performance by learning which setups are not working
            for you and focus on the ones that are.`,
          })}
          {miniItem({
            title: "Save Time",
            body: ` Import your stock trade history from your trading platform, simple
            and easy.`,
          })}
          {miniItem({
            title: "Customize Your Experience",
            body: `Custom tailor your stock journal to fit your unique trading style
            with highly customizable modules.`,
          })}
        </VStack>
      </Box>
      <Box w={sm ? "100%" : "54%"}>
        <Image src={tradejournal} />
      </Box>
    </Stack>
  );
};

export default Tradingjournal;
