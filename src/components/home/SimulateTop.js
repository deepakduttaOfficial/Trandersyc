import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import simulatorTop from "../../assets/home/trading-simulator-top.jpg";

const SimulateTop = () => {
  const [sm] = useMediaQuery("(max-width: 800px)");
  const maxItem = ({ title, body }) => {
    return (
      <Box>
        <Heading
          as={"h4"}
          color={"brand.light"}
          fontSize={"26px"}
          fontWeight={"semibold"}
        >
          {title}
        </Heading>
        <Text
          color={"brand.light"}
          fontSize={"18px"}
          fontWeight={"normal"}
          mt={5}
        >
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
      bgColor={"#242833"}
    >
      <Box w={sm ? "100%" : "41%"} px={"20px"} mt={sm ? 10 : 0}>
        <VStack alignItems={"flex-start"}>
          {maxItem({
            title: "Trading Market Replay Simulator",
            body: `Practice day trading stocks anytime now from the comfort of your browser within your TraderSync account.`,
          })}
          {maxItem({
            body: `Unlike any other market replay, you can make use of our inbuilt screeners, level II, times and sales, charting and your trades will be automatically synced with your trading journal allowing you to analyze your performance.`,
          })}
        </VStack>
        <Button
          size={"lg"}
          mt={10}
          bg={"transparent"}
          border={"1px solid #707070"}
          borderRadius={"none"}
          fontWeight={"normal"}
          _hover={{ bgColor: "#707070", color: "#fff" }}
        >
          LEARN MORE
        </Button>
      </Box>
      <Box w={sm ? "100%" : "50%"}>
        <Image src={simulatorTop} />
      </Box>
    </Stack>
  );
};

export default SimulateTop;
