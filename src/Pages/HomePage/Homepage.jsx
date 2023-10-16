import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Card from '../../components/Card/Card';
import axios from 'axios'
import { Typography } from '@mui/material';

export default function Homepage() {

  const [data1, setData1] = useState(null)

  const fetchData = async () => {
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=3ffe2f55fdd246f0947ca7b8efa8a108`)
    setData1(data.articles);

  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div>
      <Typography variant='h4' padding={"5px 5px 20px 5px"} textAlign={"center"} ><b>HOMEPAGE</b></Typography>
      <Card data={data1}/>
    </div>
  )
}
