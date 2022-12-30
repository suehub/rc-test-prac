import QueryString from 'qs';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function ProductDetail() {

    const location = useLocation();

    const queryData = QueryString.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    console.log(queryData);

    // const {id} = useParams();

    // const location = useLocation();
    // const state = location.state;
    // const [product, setProduct] = useState({});

    // useEffect(() => {
    //     setProduct(state);
    // }, [state]);

    return (
        <div>
            <img src={queryData.url} />
            <div>{queryData.id}</div>
        </div>
    )
}
