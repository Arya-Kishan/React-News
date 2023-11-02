import React from 'react'
import { Scrollbar, Autoplay } from 'swiper/modules';
import './Slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';

export default function Slider({data}) {

    const navigate = useNavigate()

    return (
        <div className='main_slider'>
            <Swiper
                autoplay={{ delay: 4000 }}
                modules={[Scrollbar, Autoplay]}
                slidesPerView={1}
            >

                {
                    data &&
                    <>
                        <div>
                            {
                                data.slice(0,6).map((e,i) => (
                                    <SwiperSlide key={i} className='swiper'>

                                        <img src={e.urlToImage}/>

                                        <div className='slider_title'>
                                            <div><h3>{e.title.slice(0,60)}...</h3></div>
                                        </div>

                                    </SwiperSlide>
                                ))
                            }
                        </div>
                    </>
                }

            </Swiper>
        </div>
    )
}
