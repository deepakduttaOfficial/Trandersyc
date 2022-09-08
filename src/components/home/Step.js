import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import StepBox from "./StepBox";

import step1 from "../../assets/home/step1.png";
import step2 from "../../assets/home/step2.png";
import step3 from "../../assets/home/step3.png";

const Step = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const steps = [
    {
      image: step1,
      step: "step 1",
      title: "Journal Your Trades",
      body: `Journal your trades in seconds. Have peace of mind knowing your data is fully backed up and secured. The more you use your trading journal, the more TraderSync can help sharpen your trading edge.`,
    },
    {
      image: step2,
      step: "step 2",
      title: "Identify Your Patterns",
      body: `Our trading journal software identifies patterns in your trading and reports them back to you. You can use these patterns to help you determine what is working and not for you.`,
    },
    {
      image: step3,
      step: "step 3",
      title: "Boost Your Performance",
      body: `Most of our trading losses coming from a set of trading mistakes. Once you have analyzed the patterns to identify which trading mistakes are making you lose money, you can .`,
    },
  ];
  return (
    <Stack
      spacing={20}
      mt={5}
      px={{ xl: "100px", lg: "40px", md: "20px", base: "10px" }}
    >
      <Box
        px={{ xl: "100px", lg: "40px", md: "20px", base: "10px" }}
        textAlign={"center"}
        mt={20}
      >
        <Button
          onClick={onOpen}
          variant={"outline"}
          color={"brand.light"}
          _hover={{ bgColor: "transferent" }}
        >
          WATCH DEMO
        </Button>

        <Modal onClose={onClose} isOpen={isOpen} size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody mt={10}>
              <AspectRatio maxW="560px" ratio={16 / 9}>
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  allowFullScreen
                />
              </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      <Box>
        <Heading
          as="h4"
          fontFamily={"inherit"}
          fontWeight={500}
          size={{ xl: "xl", lg: "lg", base: "lg" }}
          textAlign={"center"}
          bgGradient="linear(to-r, rgba(0,255,179,1) 0%,rgba(99,68,211,1) 100%)"
          bgClip="text"
        >
          3 Easy Steps To Improve Your Performance
        </Heading>
        <HStack mt={5} flexWrap={"wrap"} justifyContent={"center"}>
          {steps.map((value, index) => (
            <StepBox key={index} value={value} />
          ))}
        </HStack>
      </Box>
    </Stack>
  );
};

export default Step;
