import React from 'react';
import styled from 'styled-components';

const ChosenPost = ({ post }) => {
    let date = new Date(post.createdAt);

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return (
        <StyledWrapper>
            <div className='info'>
                <span>
                    {month + 1}/{day}/{year}
                </span>
                <span>{post.Language}</span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </StyledWrapper>
    );
};

export default ChosenPost;

const StyledWrapper = styled.div`
    width: 100%;

    .info {
        display: flex;
        justify-content: space-between;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 1.4rem;
    }

    h1 {
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 3rem;
        text-decoration: underline;
    }

    p {
        text-align: left;
        line-height: 2.5rem;
        margin: 2rem 0.5rem 4rem 0.5rem;
        font-size: 1.2rem;
    }
`;
