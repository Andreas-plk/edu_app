'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,EffectCoverflow} from 'swiper/modules';

import React from 'react'
import Image from "next/image";
import {ImageItem} from "@/data/images";

const ImageScroller = ({images}: { images: ImageItem[] }) => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,EffectCoverflow]}
            effect="coverflow"
            navigation={true}
            pagination={false}
            scrollbar={false}
            spaceBetween={10}
            slidesPerView={1}
            className="w-[70%] rounded-xl my-10 "
            coverflowEffect={{rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,}}
            loop
        >
            {images.map((img:ImageItem, index:number) => (
                <SwiperSlide key={index} >
                    <span className=" text-2xl font-bold flex flex-col justify-center items-center ">{img.description}
                    <Image src={img.url} alt={`Slide ${index}`} width={800} height={400} className="rounded-xl p-5 shadow-2xl h-[500px]" /></span>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default ImageScroller
