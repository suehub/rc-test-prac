import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductDetail() {

    const location = useLocation();
    const state = location.state;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(state);
    }, [state]);

    return (
        <div>
            <img src={product.url} />
            <div>{product.name}</div>
        </div>
    )
}
