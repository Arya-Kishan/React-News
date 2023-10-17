import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { Typography } from '@mui/material'
import Slider from '../../components/Slider/Slider'

export default function Category() {

  const [data1, setData1] = useState(null)

  const { endpoint } = useParams()

  const fetchData = async () => {
    const { data } = await axios.get(`https://arya-kishan.github.io/JSON/${endpoint}.json`)
    setData1(data.articles);

  }

  useEffect(() => {
    fetchData();
  }, [endpoint])
  return (
    <div>
      <Typography variant='h4' padding={"5px 0"} borderBottom={"0"} textAlign={"center"} >{endpoint.toUpperCase()}</Typography>

      <Slider data={data1}/>

      <Card data={data1} />
    </div>
  )
}
