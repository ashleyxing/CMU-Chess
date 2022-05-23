import React from "react";
import { Box, Heading, Flex, Text, Spacer, Link } from "@chakra-ui/react";
import { Link as ReachLink } from 'react-router-dom';
import { ColorModeSwitcher } from "../ColorModeSwitcher";
const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="20px"
      bg="gray.900"
      color="white"
      {...props}
    >
      <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
        <Link as={ReachLink} to={"/"}>CMU Chess Club </Link>
      </Heading>
      <Spacer />
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="end"
        flexGrow={1}
      >
        <Spacer />
        <MenuItems>
          <Link as={ReachLink} to={"/about"}>about</Link>
        </MenuItems>
        <MenuItems>
          <Link as={ReachLink} to={"/events"}>events</Link>
        </MenuItems>
        <MenuItems>
          <Link as={ReachLink} to={"/contact"}>contact</Link>
        </MenuItems>
      </Box>
    <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Header;
