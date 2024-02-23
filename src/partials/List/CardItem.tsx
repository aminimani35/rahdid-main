import {Box, Card} from '@mantine/core';
import {ImageGallery} from "@/components/ImageGallery";
import {Chip, Flex, Rating, Title} from "@mantine/core";
import {PresentsTime} from "@/components/PresentsTime";
import {IconAlertCircle, IconBookmark, IconBug, IconLocationPin, IconPhone} from "@tabler/icons-react";


export const CardItem = ({location}) => {
    return (
        <Card m={5} style={{boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)"}}>
            <Flex justify="flex-start" gap={20}>

                <Box> <ImageGallery photo={location?.photo}/></Box>

                <Box>
                    <Flex justify="space-between" align="center">
                        <Title>{location.name}</Title>
                        <Chip  checked={false} readOnly>
                            <Rating  value={Number(location.rating)} fractions={4} readOnly/>
                        </Chip>
                    </Flex>
                    <PresentsTime timeSlots={location.working_times}/>
                    <Flex gap={5} justify="flex-end" wrap="wrap">
                        <Chip size="lg" icon={<IconLocationPin style={{width: 18}}/>} checked readOnly>مسیریابی</Chip>
                        <Chip size="lg" icon={<IconPhone style={{width: 18}}/>} checked readOnly>تماس</Chip>
                        <Chip size="lg" icon={<IconBookmark style={{width: 18}}/>} checked readOnly>ذخیره</Chip>
                        <Chip size="lg" icon={<IconBug style={{width: 18}}/>} checked readOnly>گزارش خرابی</Chip>
                        <Chip size="lg" icon={<IconAlertCircle style={{width: 18}}/>} checked readOnly>احراز
                            مالکیت</Chip>

                    </Flex>
                </Box>
            </Flex>

        </Card>

    );
}
