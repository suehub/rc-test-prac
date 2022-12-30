import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {

    const navigate = useNavigate();

    return (
        <Container>
            <Sign>
                <div>
                    <div className='sign-up'>
                        <span onClick={() => navigate('/signup')}>회원가입</span>
                    </div>
                    <div className='sign-in'>
                        <span onClick={() => navigate('/signin')}>로그인</span>
                    </div>
                </div> 
            </Sign>
            <NavStyle>
                <div className='nav-home' onClick={() => navigate('/')}>Home</div>
                <div className='nav-info' onClick={() => navigate('/info')}>Info</div>
                <div className='nav-product' onClick={() => navigate('/product:id')}>Product</div>
                <div className='nav-review' onClick={() => navigate('/review')}>Review</div>
            </NavStyle>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: #eee;
`;

const Sign = styled.div`
    width: 100%;
    > div{
        display: flex;
        float: right;
    }
    > div > div{
        margin: 10px;
    }
    .sign-up:hover, .sign-in:hover{
        color: purple;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const NavStyle = styled.div`
    width: 100%;
    text-align: center;
    align-items: center;
    display: flex;
    > div{
        width: 100%;
        flex: 1 1 0;
        margin: 5px 0px;
    }
    > div:hover{
        color: black;
        text-decoration: underline;
        cursor: pointer;
        }
    .nav-info{
        color: blue;

    }
    .nav-product{
        color: green;

    }
    .nav-review{
        color: red;

    }
`;