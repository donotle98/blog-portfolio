import React, { useState } from 'react';
import styled from 'styled-components';
import mobileImg from './images/fotogra.jpg';
import desktopImg from './images/glenn.jpg';

const Blog = () => {
    const [navBar, setNavBar] = useState(false);
    const [pageValue, setPageValue] = useState(null);

    const deskNavBar = () => {
        return (
            <div className='nav-bar'>
                <button onClick={() => setPageValue('react')}>
                    <span>React.js</span>
                </button>
                <button onClick={() => setPageValue('node')}>
                    <span>Node.js</span>
                </button>
                <button onClick={() => setPageValue('js')}>
                    <span>Javascript</span>
                </button>
                <button onClick={() => setPageValue('sql')}>
                    <span>SQL</span>
                </button>
                <button onClick={() => setPageValue('postgres')}>
                    <span>PostgreSQL</span>
                </button>
            </div>
        );
    };

    const showNavBar = () => {
        if (navBar) {
            return (
                <div className='nav-bar mobile-nav'>
                    <button onClick={() => setPageValue('react')}>
                        <span>React.js</span>
                    </button>
                    <button onClick={() => setPageValue('node')}>
                        <span>Node.js</span>
                    </button>
                    <button onClick={() => setPageValue('js')}>
                        <span>Javascript</span>
                    </button>
                    <button onClick={() => setPageValue('sql')}>
                        <span>SQL</span>
                    </button>
                    <button onClick={() => setPageValue('postgres')}>
                        <span>PostgreSQL</span>
                    </button>
                </div>
            );
        }
    };
    return (
        <StyledWrapper>
            <div className='wrapper'>
                <header>
                    <div className='background'></div>
                    <h1>Donovan's Blog</h1>
                    <h2>The Joy of Coding</h2>
                    <div className='nav-btn'>
                        <button
                            onClick={() => {
                                setNavBar((c) => !c);
                                console.log('menu clicked');
                            }}
                        >
                            Menu
                        </button>
                    </div>
                    {showNavBar()}
                    <div className='desktop-nav'>{deskNavBar()}</div>
                </header>
                <div className='post-previews'>
                    <h1>Still in progress....</h1>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default Blog;

const StyledWrapper = styled.main`
    .wrapper {
        header {
            .background {
                position: fixed;
                left: 0;
                top: 0;
                background-image: linear-gradient(
                        rgba(0, 0, 0, 0.3),
                        rgba(0, 0, 0, 0.3)
                    ),
                    url(${mobileImg});
                background-size: cover;
                background-position: center center;
                width: 100%;
                height: 18rem;
                z-index: -100;
            }

            h1 {
                font-size: 3rem;
                text-align: center;
                margin-top: 5rem;
                color: white;
            }
            h2 {
                font-size: 2rem;
                text-align: center;
                margin-top: 1rem;
                color: white;
            }

            .nav-bar {
                position: absolute;
                top: 15.1rem;
                left: 0;
                width: 100%;
                padding: 0.5rem;
                padding-left: 0;
                padding-right: 0;
                background-color: #b6c2d9;
                text-align: center;

                button {
                    cursor: pointer;
                    padding: 0.5rem;
                    border: none;
                    background: transparent;
                    transition: 0.5s;
                }

                button:hover {
                    box-shadow: 6px 6px 4px black;
                    transition: 0.5s;
                }
            }

            .nav-btn {
                position: absolute;
                top: 13.3rem;
                right: 0;

                button {
                    border: none;
                    padding: 0.5rem 0.75rem 0.5rem 0.75rem;
                    background-color: #b6c2d9;
                    border: solid 2px #9e90a2;
                }

                button:focus {
                    outline: none;
                }
            }

            .desktop-nav {
                display: none;
            }
        }
        .post-previews {
            position: absolute;
            left: 0;
            top: 18rem;
            overflow-x: auto;
            overflow-y: hidden;
            white-space: nowrap;
            width: 100%;
            height: 10rem;
            background-color: #272932;

            h1 {
                text-align: center;
                color: red;
                text-shadow: 4px 4px 7px black;
                margin-top: 3rem;
            }
        }
    }

    @media all and (min-width: 750px) {
        .wrapper {
            header {
                .background {
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.3)
                        ),
                        url(${desktopImg});
                    background-size: cover;
                    background-position: center center;
                    height: 25rem;
                }

                h1 {
                    font-size: 6rem;
                }
                h2 {
                    font-size: 3.5rem;
                }

                .nav-bar {
                    top: 22rem;
                    button {
                        font-size: 1.3rem;
                        margin-right: 5rem;
                    }
                }
                .nav-btn {
                    display: none;
                }
                .desktop-nav {
                    display: block;
                }
                .mobile-nav {
                    display: none;
                }
            }
            .post-previews {
                top: 25.5rem;
                height: 18rem;
            }
        }
    } ;
`;
