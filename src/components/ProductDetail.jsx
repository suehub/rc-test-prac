import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function ProductDetail() {

    const {id} = useParams();

    // const location = useLocation();
    // const state = location.state;
    // const [product, setProduct] = useState({});

    // useEffect(() => {
    //     setProduct(state);
    // }, [state]);

    return (
        <div>
            {/* <img src={product.url} /> */}
            <div>{id}</div>
        </div>
    )
}
