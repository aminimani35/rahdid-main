import {Chip, Flex, Title} from "@mantine/core";
import {IPresentsTimeProps} from "@/components/PresentsTime/@type";
import {Icon24Hours, IconClock} from "@tabler/icons-react"

export const PresentsTime = ({timeSlots, isFullTime = false}: IPresentsTimeProps) => {
    console.log(timeSlots, "---------++++")


    return <Flex gap={5} style={{margin: "20px 0", maxWidth: "98vw"}} >
        <Title style={{fontSize: "1rem", marginBottom: 5,whiteSpace:"nowrap"}}>ساعت کاری :</Title>
        {isFullTime ? <Chip  checked icon={<Icon24Hours style={{width: 16, height: 16}}/>}>
            24 ساعت
        </Chip> : <Flex wrap="wrap" gap={5}>


            {timeSlots && Object.keys(timeSlots).map((timeKey, index) => (
                <Chip  key={index} style={{display: "flex", alignItems: "center"}} checked
                      icon={<IconClock style={{width: 16, height: 16}}/>}
                >{timeKey} {timeSlots[timeKey]} </Chip>

            ))}


            {/*{timeSlots?.map(timeSlot => (*/}
            {/*    <Chip style={{display: "flex", alignItems: "center"}} checked*/}
            {/*          icon={<IconClock style={{width: 16, height: 16}}/>}*/}
            {/*    >{`${timeSlot.start}  تا ${timeSlot.end}`}</Chip>*/}
            {/*))}*/}
        </Flex>}
    </Flex>
}