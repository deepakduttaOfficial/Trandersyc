import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Stack,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

const Question = () => {
  const [mobile] = useMediaQuery("(max-width: 960px)");
  const according = ({ question, answer }) => (
    <AccordionItem bgColor={"rgb(42 49 67)"} border="none" borderRadius={"lg"}>
      <AccordionButton
        py={5}
        px={6}
        as={HStack}
        justifyContent={"space-between"}
        mt={3}
      >
        <Heading as={"h1"} fontSize="20px" fontWeight={"semibold"}>
          {question}
        </Heading>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel px={6} pb={10} fontWeight={"normal"} fontSize="18px">
        {answer}
      </AccordionPanel>
    </AccordionItem>
  );

  return (
    <Box
      py={"100px"}
      color={"brand.light"}
      px={{ xl: "100px", lg: "40px", md: "20px", base: "10px" }}
    >
      <Heading
        as="h4"
        fontFamily={"inherit"}
        fontWeight={500}
        size={{ xl: "xl", lg: "lg", base: "lg" }}
        textAlign={"center"}
        color={"brand.light"}
      >
        Frequently Asked Questions
      </Heading>
      <Stack
        mt={"100px"}
        flexDir={mobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <VStack w={mobile ? "100%" : "48%"} mt={mobile ? 0 : 2}>
          <Accordion defaultIndex={[0]} allowMultiple w={"full"}>
            {according({
              question: "What assets do you cover?",
              answer:
                "Stocks, Options, Futures, Future Options, Forex, and Crypto.",
            })}
            {according({
              question: "Do you have a mobile App?",
              answer:
                "Yes, our mobile app is available for iOS and Android via the Apple App Store and Google Play Store",
            })}
            {according({
              question: "How does the free/basic account work?",
              answer: "Click here to learn more about our free/basic account",
            })}
            {according({
              question: "Can I track my account balance?",
              answer:
                "No, most brokers fail to provide us with all the account adjustments for TraderSync to properly match the account balance. For example, ThinkorSwim most of the time do not report on commissions. ",
            })}
          </Accordion>
        </VStack>
        <VStack w={mobile ? "100%" : "48%"} mt={0}>
          <Accordion allowMultiple w={"full"}>
            {according({
              question: "Do you support option spreads?",
              answer:
                "Yes, if your broker makes that information available, we can support options spreads",
            })}
            {according({
              question: "How secure is TraderSync?",
              answer:
                "Your trades are safely stored on the cloud with Amazon Servers. Data is backed up in multiple regions to guarantee the availability of your information at all times.",
            })}
            {according({
              question: "Do you have tutorials?",
              answer:
                "Click on this link to view our library to help you get the most of the trading journal.",
            })}
            {according({
              question: "Do you offer refunds?",
              answer:
                "While we don’t offer a refund, we do offer a 7-day free trial to try out the platform. Additionally, you can cancel at any time",
            })}
          </Accordion>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Question;
