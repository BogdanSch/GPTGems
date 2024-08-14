import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Image from "../Image";
import "swiper/css";
import "swiper/css/autoplay";

export default function ImagesSlider({
    className = "",
    slidesPerView = 4,
    images,
    spaceBetweenSlides = 50,
}) {
    return (
        <Swiper
            className={`swiper-slider ${className}`}
            spaceBetween={spaceBetweenSlides}
            slidesPerView={slidesPerView}
            loop={true}
            autoplay={{
                delay: 100,
                disableOnInteraction: false,
            }}
            speed={10000}
            modules={[Autoplay]}
        >
            {images.map((image, index) => {
                return (
                    <SwiperSlide key={`sliderImage${index}`}>
                        <Image
                            className="rounded-3 border"
                            width="400"
                            src={image}
                            alt="Slider"
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
