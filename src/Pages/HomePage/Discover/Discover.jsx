import React, { useContext, useState } from 'react'
import './Discover.scss'
import { fetchApiData } from '../../../hooks/useFetch';
import Card from '../../../components/Card/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import pic from '../../../assets/default.webp'
import { newsContext } from '../../../Context';
import { useNavigate } from 'react-router-dom';

export default function Discover() {

    const [change, setChange] = useState('india')

    let { data } = fetchApiData(change);

    const { setNews } = useContext(newsContext)
    const navigate = useNavigate()

    const handleClick = (e, i) => {
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
                {
                    data?.articles?.slice(6, 15)?.map((e, i) => (
                        <div key={i} onClick={() => { handleClick(e, i + 6) }}>
                            <div>
                                <LazyLoadImage
                                    alt={"Loading"}
                                    effect="blur"
                                    src={e.urlToImage ? e.urlToImage : pic}
                                    threshold={200} />
                            </div>
                        </div>
                    ))
                }
            </div>


            <Card data={data?.articles} endpoint={change} />

        </div>
    )
}
