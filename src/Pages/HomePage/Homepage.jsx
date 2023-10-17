import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Card from '../../components/Card/Card';
import axios from 'axios'
import { Stack, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import pic from '../../assets/default.webp'
import Slider from '../../components/Slider/Slider';

export default function Homepage() {

  const [data1, setData1] = useState(null)
  const [change, setChange] = useState('india')

  const fetchData = async () => {
    const { data } = await axios.get(`https://arya-kishan.github.io/JSON/${change}.json`)
    console.log(data)
    setData1(data.articles.slice(0, 50));
  }



  useEffect(() => {
    fetchData();
  }, [change])


  return (
    <>

      {
        data1 ? (
          <>
            <Typography variant='h4' borderBottom={'0'} textAlign={"center"} ><b>NEWS</b></Typography>

            <div className='homepage_grid'>
              {
                data1?.slice(10, 15)?.map((e, i) => (
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

            <Slider data={data1} />

            <div className='discover'>
              <div onClick={() => { setChange('health') }}>Health</div>
              <div onClick={() => { setChange('music') }}>Music</div>
              <div onClick={() => { setChange('politics') }}>Politics</div>
              <div onClick={() => { setChange('tesla') }}>Tesla</div>
              <div onClick={() => { setChange('travel') }}>Travel</div>
              <div onClick={() => { setChange('trending') }}>Trending</div>
              <div onClick={() => { setChange('weather') }}>Weather</div>
            </div>


            <Card data={data1} />
          </>
        ) : (
          <>
            <div className='other'>
              <div className='other_heading'></div>
              <div className='other_swiper'></div>
              <div className='other_discover'></div>
              <div className='other_card'>
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
