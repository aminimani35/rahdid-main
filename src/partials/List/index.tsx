"use client"
import {CardItem} from "@/partials/List/CardItem";
import {Box, Chip, Divider, Flex, Select, Title} from "@mantine/core";
import {IconChefHat} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import {CategoryService} from "@/services/HTTP";


export const List = () => {
    const [locations,setLocations] = useState([])


    useEffect(()=>{
        CategoryService.getRestaurants().then(response=>{
            console.log(response,"33333333")
            setLocations(response)
        })
    },[])

    return <Box style={{flex: 0.75}}>
        <Flex align="center" justify="space-around">

            <Flex gap={5} align="center" m={5}>
                <Title>مرتبط:</Title>
                <Chip checked readOnly icon={<IconChefHat/>}>رستوران</Chip>
                <Chip checked readOnly icon={<IconChefHat/>}>رستوران</Chip>
                <Chip checked readOnly icon={<IconChefHat/>}>رستوران</Chip>
                <Chip checked readOnly icon={<IconChefHat/>}>رستوران</Chip>
            </Flex>
            <Select
                // label="Your favorite library"
                placeholder="مرتب سازی"
                data={['صعودی', 'نزولی']}
            />
        </Flex>

        <Divider/>

        {locations.map(location=>{
            return <CardItem key={Math.random()} location={location}/>
        })}

    </Box>
}