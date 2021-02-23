import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mobileImg from './images/fotogra.jpg';
import desktopImg from './images/glenn.jpg';
import { DB_URI } from '../config';
import Previews from './Previews/Previews';
import Body from './BodyPosts/BodyPosts';
import ChosenPost from './ChosenPost/ChosenPost';

const Blog = () => {
    const [navBar, setNavBar] = useState(false);
    const [pageValue, setPageValue] = useState(null);
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    const [id, setId] = useState(null);

    const fetchPosts = async () => {
        try {
            const res = await fetch(`${DB_URI}blogs/all-blogs`);

            const data = await res.json();

            console.log(data);

            if (!data) {
                setError('No Blogs available');
            }

            setPosts(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

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
    const handleChosenPost = () => {
        if (id) {
            return posts
                ? posts.map((post, index) => {
                      if (post._id === id) {
                          return (
                              <div className='user-picked-post' key={index}>
                                  <button
                                      className='all-posts-btn'
                                      onClick={() => setId(null)}
                                  >
                                      All posts
                                  </button>
                                  <ChosenPost post={post} />
                              </div>
                          );
                      }
                  })
                : null;
        } else {
            return (
                <div className='all-body-posts'>
                    {posts
                        ? posts.map((post, index) => {
                              return (
                                  <div className='each-body-post' key={index}>
                                      <Body post={post} setId={setId} />
                                  </div>
                              );
                          })
                        : null}
                </div>
            );
        }
    };

    return (
        <StyledWrapper>
            <div className='wrapper'>
                <header>
                    <div className='background'></div>
                    <h1>The Joy of Coding</h1>
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
                    {posts ? (
                        posts.map((post, index) => {
                            return (
                                <Previews
                                    post={post}
                                    key={index}
                                    setId={setId}
                                />
                            );
                        })
                    ) : (
                        <span>{error}</span>
                    )}
                </div>
                <div className='body-posts'>{handleChosenPost()}</div>
            </div>
        </StyledWrapper>
    );
};

export default Blog;

const StyledWrapper = styled.main`
    button:focus {
        outline: none;
    }
    .all-posts-btn {
        border: solid 2px black;
        padding: 0.4rem 0.6rem;
        background: transparent;
        margin-bottom: 1rem;
    }
    .wrapper {
        header {
            .background {
                position: absolute;
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
                height: 14rem;
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
                top: 11.1rem;
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
                top: 9.3rem;
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
            display: flex;
            position: absolute;
            left: 0;
            top: 14rem;
            overflow-x: auto;
            overflow-y: hidden;
            width: 100%;
            height: 10rem;
            background-color: #272932;
            align-items: center;
        }

        .body-posts {
            position: absolute;
            top: 26rem;
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            .user-picked-post {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
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
                height: 13rem;
            }
            .body-posts {
                position: absolute;
                top: 40rem;
                .all-body-posts {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 10px;
                    width: 100%;
                }

                .each-body-post {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }

    @media all and (min-width: 950px) {
        .wrapper {
            .body-posts {
                position: absolute;
                top: 40rem;
                .all-body-posts {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                }
            }
        }
    }
`;
