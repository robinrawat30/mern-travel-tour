import React from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import list from '../../../public/list.json'
import PackageCard from '../cardspage/PackageCard';



const HomePackageCard = () => {
    return (

        <>
            <div className=" max-w-screen-2xl space-y-4 m-auto py-4 lg:py-5 px-4 lg:px-20 ">
                <div className="flex gap-4 items-center flex-col">
                    <h1 className="text-5xl text-center font-sans font-semibold" >Most Popular Trips</h1>
                    <p className=" text-xl text-center text-gray-600 font-sans ">Choose Our popular destination</p>
                </div>
                <div>
                    <Swiper
                     slidesPerView={1}
                     spaceBetween={10}
                      
                        speed={1800}
                        autoplay={
                            { delay: 2000, }
                        }
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1400: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}




                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper"

                    // map the list items 
                    >
                        {list.map((item) => (
                            <SwiperSlide> <PackageCard item={item} key={item.id} /></SwiperSlide>

                        ))}

                    </Swiper>

                </div>

            </div >
        </>
    )
}

export default HomePackageCard
