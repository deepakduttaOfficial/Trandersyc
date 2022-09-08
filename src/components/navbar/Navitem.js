import { Flex, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navitem = ({ link, title, active }) => {
  return (
    <Flex px={[2, 3, 5]}>
      <Menu>
        <Link
          as={NavLink}
          to={link}
          color={active ? "whiteAlpha.900" : "gray.400"}
          _hover={{ textDecor: "none", color: "whiteAlpha.900" }}
        >
          <MenuButton>
            <Text fontSize={"lg"}>{title}</Text>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default Navitem;
