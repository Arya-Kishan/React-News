import React, { useContext } from 'react'
import './Homepage.scss'
import Slider from '../../components/Slider/Slider';
import { fetchApiData } from '../../hooks/useFetch'
import Discover from './Discover/Discover';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const Grid = React.lazy(() => (import('./GridHomepage/Grid')))

export default function Homepage() {

  let { data, isLoading, isError, error } = fetchApiData("india");
  // data = null;
  console.log(data)
  console.log(isLoading)

  if (isError) {
    return <h1>{error}</h1>
  }
  if (isLoading) {
    return (
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
            <div className='extend_scroll'>
              <div></div>
              <div></div>
              <div></div>
            </div>
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

  return (
    <>
      <div className='homepage'>

        <h4><b>NEWS</b></h4>

        <LazyLoadComponent>
          <Grid data={data} />
        </LazyLoadComponent>

        <Slider data={data?.articles} />

        <Discover />

      </div>

    </>
  )
}
