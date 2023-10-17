import React, { useContext, useState } from 'react'
import './Detail.css'
import { newsContext } from '../../Context'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import dayjs from 'dayjs'
import NearMeIcon from '@mui/icons-material/NearMe';

export default function Detail() {

  const { news } = useContext(newsContext)

  return (
    <div className='detail'>
      {news &&
        <>
          <Stack className='detail_1'>
            <LazyLoadImage
              alt={"Loading"}
              effect="blur"
              src={news.urlToImage}
              threshold={200} />
          </Stack>

          <Stack className='detail_2'>

          <Stack flexDirection={'row'} width={'100%'} justifyContent={'space-between'}>
              <Typography className='detail_source'>{news.source.name}</Typography>

              <Typography className='detail_date'>{dayjs(news.publishedAt).format("MMM DD")}</Typography>
            </Stack>

            <Typography className='detail_title' variant='p'><p>{news.title}</p></Typography>



            <Typography className='detail_content'><b>CONTENT</b> :<p> {news.content}</p></Typography>

            <Typography className='detail_description'><b>DESCRIPTION</b> : <p>{news.description}</p></Typography>

            <div className='detail_plane'><IconButton href={news.url}><NearMeIcon sx={{color:'blue', fontSize : '30px'}}/></IconButton></div>

          </Stack>
        </>}
    </div>
  )
}
