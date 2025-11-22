import { useState } from "react";

import about1 from '../assets/About.webp';
import about2 from '../assets/About3.webp';

import { Swiper , SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import serviceImg1 from '../assets/service-icon-1.svg';
import serviceImg2 from '../assets/service-icon-2.svg';
import serviceImg3 from '../assets/service-icon-3.svg';
import serviceImg4 from '../assets/service-icon-4.svg';

import brand1 from '../assets/brand-1.png';
import brand2 from '../assets/brand-2.png';
import brand3 from '../assets/brand-3.png';
import brand4 from '../assets/brand-4.png';
import brand5 from '../assets/brand-5.png';
import brand6 from '../assets/brand-6.png';

import team1 from '../assets/team-1.webp';
import team2 from '../assets/team-2.webp';
import team3 from '../assets/team-3.webp';
import SeenIn from "./index/SeenIn";

export default function About() {
  return (
    <>
      <div className="banner-section about-banner-section flex justify-center items-center">
            <div className="banner-section-content text-center z-10">
                <h6 className="uppercase text-white">- Multinest</h6>
                <h1 className='text-6xl font-semibold text-white'>
                    About<span className=' text-[#ff823a]'> Us</span>
                </h1>
            </div>
      </div> 
      <div className="py-5 px-[8%] lg:px-[12%]">
        <div className="mb-5">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="w-full lg:w-1/2 group overflow-hidden">
                    <img src={about1} className="w-full transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="w-full lg:w-1/2 group overflow-hidden">
                    <h4 className="font-bold capitalize text-2xl md:text-4xl mb-3">The story of the shoes</h4>
                    <span className="block mb-3 capitalize text-base md:text-xl font-semibold">We like to think of our waves as full sensory experiences!</span>
                    <p className="text-gray-500 leading-relaxed mb-3 text-sm lg:text-lg">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking 
                        at it's layout.
                    </p>
                    <button className="py-2 px-4 bg-black text-white text-base lg:text-xl outline-none rounded-md cursor-pointer">Discover Now</button>
                </div>
            </div>
        </div>
        <div>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
                <div className="w-full lg:w-1/2 mb-4 md:mb-0 group overflow-hidden">
                    <img src={about2} className="w-full transition-transform duration-500 group-hover:scale-110" alt="" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h4 className="font-bold capitalize text-xl md:text-4xl mb-3">We use 100% high quality materials</h4>
                    <p className="text-gray-500 leading-relaxed mb-3 text-sm lg:text-lg">
                        Our premium materials ensure every pair delivers 
                        unmatched comfort, durability, and style, making 
                        each step a truly luxurious experience.
                    </p>
                </div>
            </div>
        </div>
      </div>
      <SeenIn/>
      <div className="py-10 px-5 lg:px-[12%] bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Team Members</h2>
        <div className="flex flex-wrap justify-center gap-10">
            <div className="w-[300px] relative overflow-hidden group">
                <div className="relative">
                    <img src={team1} alt="team-img" className="w-full h-auto object-cover rounded cursor-pointer"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 flex justify-center gap-4 py-2 text-xl opacity-0 translate-y-full group-hover:opacity-[1] group-hover:translate-y-0 transition-colors duration-300">
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-twitter-line"></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-facebook-line"></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-youtube-line"></i>
                        </a>
                    </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold">Betty J. Turner</h3>
                <p className="text-sm text-gray-500">-CEO, Company</p>
            </div>
            <div className="w-[300px] relative overflow-hidden group">
                <div className="relative">
                    <img src={team2} alt="team-img" className="w-full h-auto object-cover rounded cursor-pointer"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 flex justify-center gap-4 py-2 text-xl opacity-0 translate-y-full group-hover:opacity-[1] group-hover:translate-y-0 transition-colors duration-300">
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-twitter-line"></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-facebook-line"></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-youtube-line"></i>
                        </a>
                    </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold">Constance K. Whang</h3>
                <p className="text-sm text-gray-500">- Jr. Project Manager</p>
            </div>
            <div className="w-[300px] relative overflow-hidden group">
                <div className="relative">
                    <img src={team3} alt="team-img" className="w-full h-auto object-cover rounded cursor-pointer"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 flex justify-center gap-4 py-2 text-xl opacity-0 translate-y-full group-hover:opacity-[1] group-hover:translate-y-0 transition-colors duration-300">
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-twitter-line"></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-facebook-line"></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-[#ff823a] transition-colors duration-300">
                            <i className="ri-youtube-line"></i>
                        </a>
                    </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold">Alfredo S. Rocha</h3>
                <p className="text-sm text-gray-500">- Sr. Project Manager</p>
            </div>
        </div>
      </div>
    </>
  )
}
