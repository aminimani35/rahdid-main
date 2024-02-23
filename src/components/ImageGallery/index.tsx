'use client';
import {Fragment} from "react";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import {rem} from "@mantine/core";
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import {Carousel} from '@mantine/carousel';
import img from "@/assets/desktop-wallpaper-rick-and-morty-awesome-cool-rick-and-morty-pc.jpg";
import {IImageGalleryProps} from "@/components/ImageGallery/@types";

export const ImageGallery = ({photo,images}: IImageGalleryProps) => {
    // Todo implement Images
    console.log("=>(index.tsx:41) images", images,photo);
    return <Fragment>
        <Carousel
            height={200}
            withIndicators
            nextControlIcon={<IconArrowLeft style={{width: rem(16), height: rem(16)}}/>}
            previousControlIcon={<IconArrowRight style={{width: rem(16), height: rem(16)}}/>}
        >
            <Carousel.Slide>
                <Image fill src={photo ?? img} alt={"test"}/>
                {/*<img src={photo} alt="photo"/>*/}
            </Carousel.Slide>
            <Carousel.Slide>
                <Image fill src={img} alt={"test"}/>
            </Carousel.Slide>
            <Carousel.Slide>
                <Image fill src={img} alt={"test"}/>
            </Carousel.Slide>


            {/* ...other slides */}
        </Carousel>
        <div className={styles.restImages}>
            <Image width={100} height={50} src={img} alt={"test"}/>
            <Image width={100} height={50} src={img} alt={"test"}/>
            <Image width={100} height={50} src={img} alt={"test"}/>
        </div>
    </Fragment>
}
