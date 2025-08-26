import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { useRef } from 'react';
import UpdateBox from './UpdateBox';

function SwiperUpdate() {
    const swiperRef = useRef(null);

    return (
        <>
            <div className='lg:px-20 sm:px-8 flex flex-col px-3 py-16'>
                <div className='flex flex-col items-center gap-2'>
                    <img className='mb-8' src="src/assets/Icon.png" alt="" />
                    <h1 className='text-4xl text-[#201C44] font-bold text-center'>
                        Our latest updates for you here!
                    </h1>
                    <h1 className='text-sm font-medium mb-10'>What's happening around the World.</h1>
                </div>

                {/* Swiper Slides */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className='w-full lg-w-fit'
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // Mobile
                        },
                        768: {
                            slidesPerView: 2, // Tablet
                        },
                        1024: {
                            slidesPerView: 3, // Desktop
                        },
                    }}

                >
                    <SwiperSlide>
                        <UpdateBox
                            imageUrl={"src/assets/update1.png"}
                            title={"Growth"}
                            desc={"15 ways to grow your saas in 21 days with no money"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UpdateBox
                            imageUrl={"src/assets/update2.png"}
                            title={"Career"}
                            desc={"Why everyone is moving today to subscriptions"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UpdateBox
                            imageUrl={"src/assets/update3.png"}
                            title={"Design"}
                            desc={"9 ways to make it quick and never look back again in your life"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UpdateBox
                            imageUrl={"src/assets/update1.png"}
                            title={"Growth"}
                            desc={"15 ways to grow your saas in 21 days with no money"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UpdateBox
                            imageUrl={"src/assets/update2.png"}
                            title={"Career"}
                            desc={"Why everyone is moving today to subscriptions"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UpdateBox
                            imageUrl={"src/assets/update3.png"}
                            title={"Design"}
                            desc={"9 ways to make it quick and never look back again in your life"}
                        />
                    </SwiperSlide>
                </Swiper>

                {/* Navigation Arrows */}
                <div className='flex justify-center items-center gap-5 lg:mt-14 sm:mt-10 '>
                    <div
                        onClick={() => swiperRef.current?.slidePrev()}
                        className='size-10 rounded border-[1px] flex items-center justify-center border-[#FAE0E1] cursor-pointer'
                    >
                        <img src="src/assets/arrowleft.svg" alt="Previous" />
                    </div>
                    <div
                        onClick={() => swiperRef.current?.slideNext()}
                        className='size-10 rounded border-[1px] flex items-center justify-center border-[#FAE0E1] cursor-pointer'
                    >
                        <img src="src/assets/arrowicon.svg" alt="Next" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default SwiperUpdate;
