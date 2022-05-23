import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./navbar/Header";

const LoadPage = (props) => {
    return (
        <Flex h='full' direction='column'>
            <Header/>
            <Divider/>
            {props.page}
            <Footer/>     
        </Flex>
    );
}

export default LoadPage;