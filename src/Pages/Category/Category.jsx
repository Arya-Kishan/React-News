import React, { useEffect, useState } from 'react'
import './Category.css'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { Typography } from '@mui/material'
import Slider from '../../components/Slider/Slider'
import { fetchApiData } from '../../hooks/useFetch'
import dayjs from 'dayjs'

export default function Category() {

  const { endpoint } = useParams()

  const { data: data1 } = fetchApiData(endpoint)

  return (
    <div className='category'>

      <div className='category_heading'>
        <Typography variant='h4' padding={"5px 0"} borderBottom={"0"} textAlign={"center"} >{endpoint.toUpperCase()}</Typography>
      </div>



      <div className='category_largeImg'>
        <div><img src={data1?.articles[12].urlToImage} alt="" srcSet="" width={"100%"} /></div>
        <h2>{data1?.articles[12].title}</h2>
        <span>{data1?.articles[12].description}</span>
        <p>{dayjs(data1?.articles[12].publishedAt).format("MMM DD YYYY")}</p>
      </div>



      <div className='category_grid'>

        <div>
          <div className='category_grid_img'><img src={data1?.articles[2].urlToImage} alt="" srcSet="" /></div>
          <h3>{data1?.articles[2].title}</h3>
          <p>{dayjs(data1?.articles[2].publishedAt).format("MMM DD YYYY")}</p>
        </div>

        <div>
          <div className='category_grid_img'><img src={data1?.articles[8].urlToImage} alt="" srcSet="" /></div>
          <h3>{data1?.articles[8].title}</h3>
          <p>{dayjs(data1?.articles[8].publishedAt).format("MMM DD YYYY")}</p>
        </div>

      </div>


      <Card data={data1?.articles} />


    </div>
  )
}
