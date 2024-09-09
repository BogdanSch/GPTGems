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
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: spaceBetweenSlides,
                },
            }}
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
                            isSliderImage={true}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
