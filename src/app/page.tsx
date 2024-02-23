import React from 'react';
import {Header} from '@/partials/Header';
import {List} from '@/partials/List';
import {Box, Chip, Flex, Pagination, Select, Title} from "@mantine/core";
import {Filter} from "@/partials/Filter";
import {IconChefHat} from "@tabler/icons-react"

export default function HomePage() {
    return (
        <>
            <Header/>
            <Flex>



            </Flex>
            <Flex wrap="wrap">

                <Filter/>
                <List/>
            </Flex>
            <Flex justify="center">
                {/*<Text mb="xs">1 sibling (default)</Text>*/}
                <Pagination dir="ltr" total={20} siblings={1} defaultValue={10}/>
            </Flex>
        </>
    );
}
