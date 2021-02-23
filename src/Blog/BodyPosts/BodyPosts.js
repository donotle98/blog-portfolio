import React from 'react';
import styled from 'styled-components';

const BodyPosts = ({ post, setId }) => {
    let date = new Date(post.createdAt);

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return (
        <StyledWrapper>
            <button onClick={() => setId(post._id)}>
                <div className='info'>
                    <span>
                        {month + 1}/{day}/{year}
                    </span>
                    <span>{post.Language}</span>
                </div>
                <h1>{post.title}</h1>
                <span className='snippet'>{post.snippet}</span>
                <p>{post.body}</p>
            </button>
        </StyledWrapper>
    );
};

export default BodyPosts;

const StyledWrapper = styled.div`
    border: solid 2px black;
    border-radius: 3rem;
    padding: 1.5rem;
    width: 20rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 3rem;
    overflow: hidden;
    white-space: no-wrap;
    text-overflow: ellipsis;
    button {
        border: none;
        background: transparent;
    }

    .info {
        display: flex;
        justify-content: space-between;
    }

    .snippet {
        font-size: 1.2rem;
    }
    h1 {
        padding-bottom: 1.5rem;
        padding-top: 1rem;
    }

    p {
        line-height: 1.6rem;
        padding-top: 2rem;
    }

    @media all and (min-width: 750px) {
        flex-direction: column;
        text-align: center;
    }
`;
