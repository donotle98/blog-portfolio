import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mobileImg from './images/fotogra.jpg';
import desktopImg from './images/glenn.jpg';
import { DB_URI } from '../config';
import Previews from './Previews/Previews';
import Body from './BodyPosts/BodyPosts';
import ChosenPost from './ChosenPost/ChosenPost';

const Blog = () => {
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

    const handleChosenPost = () => {
        if (id) {
            return posts
                ? posts.map((post, index) => {
                      return post._id === id ? (
                          <div className='user-picked-post' key={index}>
                              <button
                                  className='all-posts-btn'
                                  onClick={() => setId(null)}
                              >
                                  All posts
                              </button>
                              <ChosenPost post={post} />
                          </div>
                      ) : null;
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

    if (!posts) {
        return (
            <StyledLoading>
                <div className='loading-posts'>
                    <h1>Loading....</h1>
                </div>
            </StyledLoading>
        );
    }

    return (
        <StyledWrapper>
            <div className='wrapper'>
                <header>
                    <div className='background'></div>
                    <div className='box'>
                        <h1>The Joy of Coding</h1>
                        <h2>By Donovan Le</h2>
                    </div>
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
                        <span>Loading...</span>
                    )}
                </div>
                {error}
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
            .box {
                border: 4px double rgba(250, 250, 250, 0.2);
                width: 20rem;
                margin: auto;
                margin-top: 2rem;
                background-color: rgb(0, 0, 0, 0.3);

                h1 {
                    font-size: 3rem;
                    text-align: center;
                    color: white;
                }
                h2 {
                    font-size: 2rem;
                    text-align: center;
                    margin-top: 1rem;
                    color: white;
                }
            }

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
        }
        .post-previews {
            display: flex;
            position: absolute;
            left: 0;
            top: 12rem;
            overflow-x: auto;
            overflow-y: hidden;
            width: 100%;
            height: 10rem;
            background-color: #272932;
            align-items: center;
            box-shadow: 0px 7px 10px black, 0px -7px 10px white;
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

                .box {
                    width: 40rem;
                    margin-top: 4rem;
                    h1 {
                        font-size: 6rem;
                    }
                    h2 {
                        font-size: 3.5rem;
                    }
                }
            }
            .post-previews {
                top: 23.5rem;
                height: 13rem;
            }
            .body-posts {
                position: absolute;
                top: 38rem;
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

const StyledLoading = styled.div`
    .loading-posts {
        background: #d52e3f;
        min-height: 100vh;
        h1 {
            font-size: 4rem;
            text-align: center;
            height: 90vh;
            line-height: 90vh;
            color: #fcedd8;
            font-family: 'Niconne', cursive;
            font-weight: 700;
            text-shadow: 5px 5px 0px #eb452b, 10px 10px 0px #efa032,
                15px 15px 0px #46b59b, 20px 20px 0px #017e7f,
                25px 25px 0px #052939, 30px 30px 0px #c11a2b,
                35px 35px 0px #c11a2b, 40px 40px 0px #c11a2b,
                45px 45px 0px #c11a2b;
        }
    }

    @media all and (min-width: 750px) {
        .loading-posts {
            h1 {
                font-size: 10rem;
            }
        }
    }
`;
