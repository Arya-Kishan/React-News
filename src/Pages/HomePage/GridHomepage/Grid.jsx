import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Grid.scss'

export default function Grid({ data }) {
    return (
        <div className='homepage_grid'>
            {
                data?.articles?.slice(0, 5)?.map((e, i) => (
                    <div key={i}>
                        <div className='homepage_img'>
                            <LazyLoadImage
                                alt={"Loading"}
                                effect="blur"
                                src={e.urlToImage ? e.urlToImage : pic}
                                threshold={200} />
                        </div>
                    </div>
                ))
            }
        </div>

    )
}
