import React from "react";
import { Link, Flex, IconButton, Spacer, Center } from "@chakra-ui/react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaChessPawn, FaDiscord, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <Flex bg='gray.900'>
            <Spacer/>
            <Center>
                <Link href='https://www.facebook.com' isExternal>
                    <IconButton colorScheme='whiteAlpha' size='lg' variant='ghost' aria-label='facebook icon' href='www.google.com' icon={<FaFacebook/>}/>
                </Link>
                <Link href='https://www.discord.com' isExternal>
                    <IconButton colorScheme='whiteAlpha' size='lg' variant='ghost' aria-label='discord icon' icon={<FaDiscord/>}/>
                </Link>
                <Link href='https://www.chess.com/club/carnegie-mellon-tartans-chess-club' isExternal>
                    <IconButton colorScheme='whiteAlpha' size='lg' variant='ghost' aria-label='chess.com icon' icon={<FaChessPawn/>}/>
                </Link>
                <Link href='https://www.instagram.com/cmuchess/' isExternal>
                    <IconButton colorScheme='whiteAlpha' size='lg' variant='ghost' aria-label='instagram icon' icon={<FaInstagram/>}/>
                </Link>
            </Center>
            <Spacer/>
        </Flex>
    );
}

export default Footer