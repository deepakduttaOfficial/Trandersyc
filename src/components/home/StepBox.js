import React from "react";
import { Box, Heading, Image, useMediaQuery } from "@chakra-ui/react";

const StepBox = ({ value }) => {
  const { image, step, title, body } = value;
  const [mobile] = useMediaQuery("(max-width: 800px)");

  return (
    <Box
      bgColor={"#000"}
      borderRadius="lg"
      py={10}
      color={"brand.light"}
      maxW={mobile ? "full" : "360px"}
      border={0}
    >
      <Box px={10}>
        <Box textAlign={"center"}>
          <Image src={image} alt={"stape"} m={"auto"} />
        </Box>
        <Box mt={"10 "}>
          <Heading
            as={"h5"}
            size={"md"}
            fontWeight={"semibold"}
            color={"#707070"}
          >
            {step}
          </Heading>
          <Heading as={"h4"} fontSize={"24px"} color={"brand.light"} mt={1}>
            {title}
          </Heading>
          <Heading
            as={"p"}
            fontWeight={"normal"}
            fontSize={"20px"}
            my={"32px"}
            color={"brand.light"}
          >
            {body}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default StepBox;
