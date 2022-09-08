import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

const StepBox = ({ value }) => {
  const { image, step, title, body } = value;

  return (
    <Box
      bgColor={"#000"}
      borderRadius="lg"
      py={10}
      color={"brand.light"}
      maxW={"360px"}
      m={"10px"}
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
