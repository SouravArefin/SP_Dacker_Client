import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import './Review.module.css'
import SingleReview from "./SingleReview";
export default function App() {
    const [reviewes, setReviewes] = useState([]);
    const copyReview = [...reviewes]
    const reverseReview = copyReview.reverse()
    useEffect(() => {
        fetch("https://salty-reef-27679.herokuapp.com/reviews/")
            .then(res => res.json())
            .then(res => {
                setReviewes(res);
            });
    }, [])
    // console.log(reviewes);
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    reverseReview?.map(singleReview => <SwiperSlide key={singleReview._id}>
                        <SingleReview
                            singleReview={singleReview}
                        />

                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
}