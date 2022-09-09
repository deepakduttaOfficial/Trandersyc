import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const SmNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navItem = ({ link, title }) => {
    return (
      <MenuItem
        as={NavLink}
        to={link}
        mt={2}
        borderRadius={"5px"}
        py={"10px"}
        _hover={{ backgroundColor: "#251d4a" }}
      >
        {title}
      </MenuItem>
    );
  };
  return (
    <Box display={{ base: "flex", lg: "none" }}>
      <IconButton
        variant="outline"
        aria-label="HamburgerIcon"
        ref={btnRef}
        onClick={onOpen}
        _hover={{ bg: "#251d4a" }}
        _focus={{ backgroundColor: "#251d4a" }}
        icon={<HamburgerIcon color={"whiteAlpha.900"} fontSize={25} />}
        border={"none"}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#1d1738"} color={"whiteAlpha.900"}>
          <DrawerCloseButton _hover={{ backgroundColor: "#251d4a" }} />

          <DrawerBody mt={50}>
            <Menu>
              {navItem({ link: "/", title: "Home" })}
              {navItem({ link: "/signup", title: "Features" })}
              {navItem({ link: "/signin", title: "Tutorials" })}
              <Stack mt={"10px"}>
                <MenuItem>
                  <Button
                    size="md"
                    w={"full"}
                    as={NavLink}
                    to={"/signup"}
                    bg={"transparent"}
                    color={"gray.400"}
                    _hover={{ bgColor: "brand.100", color: "#0f1014" }}
                    border="2px"
                    borderColor="brand.100"
                    borderRadius={"1px"}
                  >
                    Signup
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    size="md"
                    w={"full"}
                    as={NavLink}
                    to={"/signin"}
                    bg={"transparent"}
                    color={"gray.400"}
                    _hover={{ color: "#fff" }}
                    border="2px"
                    borderColor={"#707070"}
                    borderRadius={"1px"}
                  >
                    Signin
                  </Button>
                </MenuItem>
              </Stack>
            </Menu>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SmNavbar;
