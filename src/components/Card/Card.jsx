import React from 'react'
import './Card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs'
import pic from '../../assets/default.webp'

export default function Card({ data }) {
    console.log(data)
    const fakeTitle = "Deepika Padukone shares first look from Singham Again, Alia Bhatt and Ranveer Singh react:.."
    return (
        <div className='main_card'>
            {
                data?.map((e, i) => (
                    <div key={i} className='card'>

                        <Stack className='grid1 img'>
                            <LazyLoadImage
                                alt={"Loading"}
                                effect="blur"
                                src={e.urlToImage ? e.urlToImage : pic}
                                threshold={400} />
                        </Stack>

                        <Stack className='grid2'>
                            <Typography className='author'>{e.author}</Typography>

                            <Typography variant='p' className='title'>{e.title.slice(0,90)}...</Typography>

                            <Typography className='date'>{dayjs(e.publishedAt).format("MMM DD")}</Typography>
                        </Stack>

                    </div>
                ))
            }
        </div>
    )
}
