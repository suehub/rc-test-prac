import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ProductList() {

  const [productData, setProductData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    const result = await axios({
      method: "GET",
      url: "/product"
    })
    console.log(result.data);
    setProductData(result.data.productDatas);
  };

  return (
    <Container>
      {productData.map((p) => {
        return (
            <div onClick={() => navigate(`/result/?id=${p.id}&url=${p.url}`, {state: p})} className='item'>
              <img src={p.url} />
            </div>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  .item{

  }
  img {
    width: 20vw;
    cursor: pointer;
  }
`;