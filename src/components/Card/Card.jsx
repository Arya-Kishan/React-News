import React, { useContext } from 'react'
import './Card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs'
import pic from '../../assets/default.webp'
import { newsContext } from '../../Context';
import { useNavigate } from 'react-router-dom'

export default function Card({ data }) {

    const { news, setNews } = useContext(newsContext)
    const navigate = useNavigate()

    const handleClick = (e) => {
        navigate("/detail")
        setNews(e)
    }

    return (
        <div className='main_card'>
            {
                data?.map((e, i) => (
                    <div key={i} className='card' onClick={() => { handleClick(e) }}>

                        <div className='grid1 img'>
                            <LazyLoadImage
                                alt={"Loading"}
                                effect="blur"
                                src={e.urlToImage ? e.urlToImage : pic}
                                threshold={200} />
                        </div>

                        <div className='grid2'>
                            <Typography className='author'>{e.author}</Typography>

                            <Typography variant='p' className='title'>{e.title?.split(" ").slice(0, 20).join(" ")}...</Typography>

                            <Typography className='date'>{dayjs(e.publishedAt).format("MMM DD")}</Typography>
                        </div>

                        <div className="grid_3">
                            <Typography variant='p' className='content'>{e.content?.split(" ").slice(0,20).join(" ")}...</Typography>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}
