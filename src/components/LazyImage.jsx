import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import pic from '../assets/default.webp'

export default function LazyImage({ url }) {
    return (
        <div>
            <LazyLoadImage
                alt={"Loading"}
                effect="blur"
                src={url ? url : pic}
                threshold={200} />
        </div>
    )
}
