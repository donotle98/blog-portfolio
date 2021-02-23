import React from 'react';
import styled from 'styled-components';

const Previews = ({ post, setId }) => {
    let date = new Date(post.createdAt);

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return (
        <StyledWrapper>
            <button onClick={() => setId(post._id)}>
                <div className='post'>
                    <div className='info'>
                        <span>
                            {month + 1}/{day}/{year}
                        </span>
                        <span>{post.Language}</span>
                    </div>
                    <span className='title'>{post.title}</span>
                    <span className='snippet'>{post.snippet}</span>
                </div>
            </button>
        </StyledWrapper>
    );
};

export default Previews;

const StyledWrapper = styled.div`
    button {
        border: none;
        background: transparent;
        transition: 0.5s;
    }
    button:hover {
        background: rgb(255, 255, 255, 0.5);
        transition: 0.5s;
        padding: 1rem 0;
    }
    .post {
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: solid 2px #b6c2d9;
        text-align: center;
        color: black;
        width: 13rem;
        height: 8rem;
        margin-right: 1rem;
        margin-left: 1rem;
        padding: 0.5rem;

        span {
            word-wrap: break-word;
        }

        .title {
            width: 100%;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
        }

        .info {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem;
            padding-top: 0.25rem;
        }
    }
`;
