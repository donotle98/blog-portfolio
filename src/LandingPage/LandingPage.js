import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mobileImg from './images/altumcode.jpg';
import desktopImg from './images/IMG_0004.jpeg';
import './mysass.scss';
import Particles from './Particles';

const LandingPage = () => {
    return (
        <StyledWrapper>
            <div className='landing-page-m mobile'>
                <div className='lp-image'></div>
                <h1>The Joy of Coding</h1>
                <Link to='/blogs'>
                    <span className='enter-btn'>ENTER</span>
                </Link>
                <h2>BY DONOVAN LE</h2>
                <Particles />
            </div>
            <div className='landing-page-d desktop'>
                <div className='lp-img-desktop'>
                    <div className='logo'>
                        <span className='letter-logo'>DL</span>
                        <span>DonovanLe</span>
                    </div>
                    <div className='hero-saying'>
                        <span>The Joy of Coding</span>
                    </div>
                </div>
                <Particles />
                <div className='left-side'>
                    <Link to='/blogs'>
                        <span className='enter-btn'>Enter</span>
                    </Link>
                    <span>Blogs</span>
                    <span>Articles</span>
                    <span>Tutorials</span>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default LandingPage;

const StyledWrapper = styled.main`
    .desktop {
        display: none;
    }
    .landing-page-m {
        overflow: hidden;
        text-align: center;
        .lp-image {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-image: linear-gradient(
                    rgba(0, 0, 0, 0.3),
                    rgba(0, 0, 0, 0.3)
                ),
                url(${mobileImg});
            background-size: cover;
            background-position: center center;
            height: 100%;
            width: 100%;
            z-index: -100;
        }
        h1 {
            width: 13rem;
            margin: auto;
            margin-top: 10rem;
            margin-bottom: 6rem;
            font-size: 5rem;
            text-align: center;
            color: #b6c2d9;
        }

        a {
            text-decoration: none;
        }

        span {
            font-size: 3rem;
            text-align: center;
            color: white;
        }

        h2 {
            margin-top: 9rem;
            margin-bottom: 0;
            font-size: 2.5rem;
            color: #4d7ea8;
        }

        .particle-wrapper {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -100;
        }
    }

    @media all and (min-width: 850px) {
        .mobile {
            display: none;
        }
        .desktop {
            display: block;
        }
        .landing-page-d {
            .lp-img-desktop {
                position: fixed;
                left: 0;
                top: 0;
                background-image: url(${desktopImg});
                background-size: cover;
                background-position: center center;
                width: 50%;
                height: 100%;
                z-index: -100;
                color: #4d7ea8;

                .logo {
                    position: fixed;
                    left: 1rem;
                    color: #4d7ea8;
                    bottom: 0;

                    .letter-logo {
                        font-size: 2rem;
                        margin-right: 0.5rem;
                        opacity: 0.6;
                    }
                    span {
                        font-size: 1.2rem;
                    }
                }

                .hero-saying {
                    font-size: 5rem;
                    width: 12rem;
                    text-align: center;
                    position: fixed;
                    bottom: 10%;
                    left: 30%;
                }
            }
            .particle-wrapper {
                position: fixed;
                width: 50%;
                right: 0;
            }

            .left-side {
                position: fixed;
                right: 15%;
                bottom: 10%;
                display: flex;
                flex-direction: column;
                font-size: 5rem;

                a {
                    position: fixed;
                    bottom: 55%;
                    right: 20%;
                    text-decoration: none;
                    color: black;
                    font-size: 3.5rem;
                    text-align: center;
                }
            }
        }
    }
`;
