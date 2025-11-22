import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react';
import { Autoplay , EffectFade , Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Hero() {
  return (
    <>
        <div className="hero">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                modules={[EffectFade , Autoplay]}
                effect='fade'
                loop={true}
                autoplay={{delay:3000}}
            >
                <SwiperSlide>
                    <div className="hero-wrap hero-wrap1 px-[8%] lg:px-[12%]">
                        <div className="hero-content">
                            <h5>- 50% off shoes sale -</h5>
                            <h1>Must Have Collection <br /> Shoes <span className='text-[#ff823a]'>For Men!</span></h1>
                            <p className='my-3'>
                                Shoes are more than just a practical necessity,
                                they are a reflection of personal style, cultural
                                heritage,  and technological innovation.
                            </p>
                            <a href="#" className='btn hero-btn px-4 py-2 rounded-full'>Shop Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-wrap hero-wrap2 px-[8%] lg:px-[12%]">
                        <div className="hero-content">
                            <h5>- NEW COLLECTION -</h5>
                            <h1>Get The Perfectly <br /> Shoes <span className='text-[#ff823a]'>Best Price!</span></h1>
                            <p className='my-3'>
                                Shoes are more than just a practical necessity,
                                they are a reflection of personal style, cultural
                                heritage,  and technological innovation.
                            </p>
                            <a href="#" className='btn hero-btn px-4 py-2 rounded-full'>Shop Now</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>      
    </>
  )
}
