import { Swiper , SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import brand2 from '../../assets/brand-2.png';
import brand3 from '../../assets/brand-3.png';
import brand4 from '../../assets/brand-4.png';
import brand5 from '../../assets/brand-5.png';
import brand6 from '../../assets/brand-6.png';

export default function SeenIn() {
  return (
    <>
      <div className="text-center px-[8%] lg:px-[12%] seen-in">
            <div>
                <h1 className='mb-5 font-semibold text-2xl'>As seen in</h1>
                <Swiper
                spaceBetween={10}
                slidesPerView={6}
                modules={[Autoplay]}
                loop={true}
                autoplay={{delay:2000}}
                breakpoints={{
                    1399: {slidesPerView: 6},
                    1199: {slidesPerView: 6},
                    991: {slidesPerView: 4},
                    575: {slidesPerView: 2},
                    0: {slidesPerView: 2}
                }}
                >
                    <SwiperSlide>
                        <img src={brand2} className='w-[200px] h-20 object-contain border rounded-md border-black p-3' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brand3} className='w-[200px] h-20 object-contain border rounded-md border-black p-3' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brand4} className='w-[200px] h-20 object-contain border rounded-md border-black p-3' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brand5} className='w-[200px] h-20 object-contain border rounded-md border-black p-3' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brand6} className='w-[200px] h-20 object-contain border rounded-md border-black p-3' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brand2} className='w-[200px] h-20 object-contain border rounded-md border-black p-3' alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brand4} className='w-[200px] h-20 object-contain border rounded-md border-black p-3' alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </>
  )
}
