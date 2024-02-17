import React, { useContext, useState } from 'react'
import './Discover.scss'
import { fetchApiData } from '../../../hooks/useFetch';
import Card from '../../../components/Card/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import pic from '../../../assets/default.webp'
import { newsContext } from '../../../Context';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';

export default function Discover() {

    const [change, setChange] = useState('india')

    let { data } = fetchApiData(change);
    console.log(data.articles.slice(6, 15));

    const { setNews } = useContext(newsContext)
    const navigate = useNavigate()

    const handleClick = (e, i) => {
        console.log("hii");
        setNews(e)
        navigate(`/detail/${change}/${i}`)
    }

    return (
        <div>

            <div className='discover'>
                <div onClick={() => { setChange('health') }}>Health</div>
                <div onClick={() => { setChange('music') }}>Music</div>
                <div onClick={() => { setChange('politics') }}>Politics</div>
                <div onClick={() => { setChange('tesla') }}>Tesla</div>
                {/* <div onClick={() => { setChange('travel') }}>Travel</div> */}
                <div onClick={() => { setChange('trending') }}>Trending</div>
                <div onClick={() => { setChange('weather') }}>Weather</div>
            </div>

            <div className='homepage_rounded'>
                <Swiper
                    slidesPerView={window.innerWidth >= 700 ? 5 : 2}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {
                        data?.articles?.slice(6, 15)?.map((e, i) => (
                            <SwiperSlide key={i} onClick={() => { handleClick(e, i + 6) }}>
                                <LazyLoadImage
                                    alt={"Loading"}
                                    effect="blur"
                                    src={e.urlToImage ? e.urlToImage : pic}
                                    threshold={200} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>

            <Card data={data?.articles} endpoint={change} />

        </div>
    )
}


// {
//     data?.articles?.slice(6, 15)?.map((e, i) => (
//         <div key={i} onClick={() => { handleClick(e, i + 6) }}>
//             <div>
//                 <LazyLoadImage
//                     alt={"Loading"}
//                     effect="blur"
//                     src={e.urlToImage ? e.urlToImage : pic}
//                     threshold={200} />
//             </div>
//         </div>
//     ))
// }