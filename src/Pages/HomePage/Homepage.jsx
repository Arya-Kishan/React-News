import React, { useContext, useEffect, useState } from 'react'
import './Homepage.css'
import Card from '../../components/Card/Card';
import axios from 'axios'
import { Stack, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import pic from '../../assets/default.webp'
import Slider from '../../components/Slider/Slider';
import { fetchApiData } from '../../hooks/useFetch'
import { newsContext } from '../../Context';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {

  const { news, setNews } = useContext(newsContext)
  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate("/detail")
    setNews(e)
  }

  const [change, setChange] = useState('india')

  let { data, isLoading, isFetching, isError, error } = fetchApiData(change);

  // data = null;

  if (isError) {
    return <h1>{error}</h1>
  }

  return (
    <>

      {
        data?.articles ? (
          <>
            <Typography variant='h4' borderBottom={'0'} textAlign={"center"} ><b>NEWS</b></Typography>

            <div className='homepage_grid'>
              {
                data?.articles?.slice(10, 15)?.map((e, i) => (
                  <div key={i}>
                    <Stack className='homepage_img'>
                      <LazyLoadImage
                        alt={"Loading"}
                        effect="blur"
                        src={e.urlToImage ? e.urlToImage : pic}
                        threshold={200} />
                    </Stack>
                  </div>
                ))
              }
            </div>

            <Slider data={data?.articles} />

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
                data?.articles?.slice(10, 15)?.map((e, i) => (
                  <div key={i} onClick={() => { handleClick(e) }}>
                    <Stack>
                      <LazyLoadImage
                        alt={"Loading"}
                        effect="blur"
                        src={e.urlToImage ? e.urlToImage : pic}
                        threshold={200} />
                    </Stack>
                  </div>
                ))
              }
            </div>


            <Card data={data?.articles} endpoint={change} />
          </>
        ) : (
          <>
            <div className='other'>
              <div className='other_heading'></div>
              <div className='other_homepage_grid'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className='other_swiper'></div>
              <div className='other_discover'></div>
              <div className='other_rounded'>
                <div></div>
                <div></div>
              </div>
              <div className='other_card'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </>
        )
      }

    </>
  )
}
