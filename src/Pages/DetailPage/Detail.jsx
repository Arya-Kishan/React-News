import React, { useContext, useState } from 'react'
import './Detail.css'
import { newsContext } from '../../Context'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import dayjs from 'dayjs'
import Message from '../../components/Message/Message';
import NearMeIcon from '@mui/icons-material/NearMe';
import { useParams } from 'react-router-dom';

export default function Detail() {

  const { news } = useContext(newsContext)
  const { endpoint, id } = useParams()

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

            <Typography className='detail_title' variant='span'><p>{news.title}</p></Typography>



            <Typography className='detail_content'><b>CONTENT</b> :<span> {news.content}</span></Typography>

            <Typography className='detail_description'><b>DESCRIPTION</b> : <span>{news.description}</span></Typography>

            <div className='detail_plane'><IconButton href={news.url}><NearMeIcon sx={{ color: 'blue', fontSize: '30px' }} /></IconButton></div>

          </Stack>

          <Message endpoint={endpoint} id={id} />
        </>}
    </div>
  )
}
