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

import mobileTrade from "../../assets/home/Mobile-App-Trade-Journal.png";
import appstore from "../../assets/home/appstore.svg";
import googleplay from "../../assets/home/googleplay.svg";

const MobileTrade = () => {
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
      px={{ xl: "100px", lg: "40px", md: "20px", base: "10px" }}
      color={"brand.light"}
      flexDir={sm ? "column" : "row"}
      justifyContent={sm ? "center" : "space-between"}
      alignItems={!sm && "center"}
      py={20}
      bgColor={"#181c27"}
    >
      <Box w={sm ? "100%" : "35%"} px={"15px"}>
        <VStack alignItems={"flex-start"}>
          {maxItem({
            title: "Journal on the Go",
            body: `Record and review your trades with the TraderSync App from your mobile phone.`,
          })}
        </VStack>
        <VStack
          alignItems={sm ? "center" : "flex-start"}
          mt={sm ? 10 : 20}
          spacing={5}
          w="full"
        >
          <Image src={appstore} />
          <Image src={googleplay} />
        </VStack>
      </Box>
      <Box w={sm ? "100%" : "54%"}>
        <Image src={mobileTrade} />
      </Box>
    </Stack>
  );
};

export default MobileTrade;
