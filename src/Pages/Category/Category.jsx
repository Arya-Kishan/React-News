import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { Typography } from '@mui/material'

export default function Category() {

  const [data1, setData1] = useState(null)

  const { endpoint } = useParams()

  const fetchData = async () => {
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${endpoint}&apiKey=3ffe2f55fdd246f0947ca7b8efa8a108`)
    setData1(data.articles);

  }

  useEffect(() => {
    fetchData();
  }, [endpoint])
  return (
    <div>
      <Typography variant='h4' padding={"5px 5px 20px 5px"} textAlign={"center"} >{endpoint.toUpperCase()}</Typography>
      <Card data={data1}/>
    </div>
  )
}
