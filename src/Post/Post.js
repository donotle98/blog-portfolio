import React, { useState } from 'react';
import { DB_URI } from '../config';
import styled from 'styled-components';

const Post = () => {
    const [language, setLanguage] = useState('');
    const [title, setTitle] = useState('');
    const [snippet, setSnippet] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            language?.length > 0 &&
            title?.length > 0 &&
            snippet?.length > 0 &&
            body?.length > 0
        ) {
            try {
                const res = await fetch(`${DB_URI}blogs/add-blog`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        language,
                        title,
                        snippet,
                        body,
                    }),
                });

                const data = await res.json();
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        }
        setLanguage('');
        setTitle('');
        setSnippet('');
        setBody('');
    };

    return (
        <StyledWrapper>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='language'>Language</label>
                <select
                    name='language'
                    onChange={(e) => setLanguage(e.target.value)}
                    value={language}
                >
                    <option value='' disabled defaultValue>
                        Select a language
                    </option>
                    <option value='react'>React.js</option>
                    <option value='node'>Node.js</option>
                    <option value='vue'>Vue.js</option>
                    <option value='javascript'>JavaScript</option>
                    <option value='postgresql'>PostgreSQL</option>
                    <option value='mongodb'>MongoDB</option>
                    <option value='career'>Career</option>
                </select>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor='snippet'>Snippet</label>
                <input
                    type='text'
                    placeholder='Small snippet'
                    name='snippet'
                    onChange={(e) => setSnippet(e.target.value)}
                    value={snippet}
                />
                <label htmlFor='body'>Body</label>
                <textarea
                    name='body'
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                ></textarea>
                <button type='submit'>Create Post</button>
            </form>
        </StyledWrapper>
    );
};

export default Post;

const StyledWrapper = styled.div`
    background-color: gray;
    min-height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
    form {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
        select {
            font-size: 1.5rem;
            border: solid 2px black;
            background-color: rgb(117, 117, 117, 0.7);
            padding: 0.5rem;
            color: black;
            margin-bottom: 1rem;
        }

        select:focus {
            outline: none;
        }

        label {
            font-size: 1.4rem;
            color: black;
            margin-bottom: 1rem;
        }

        input {
            font-size: 1.5rem;
            border: solid 2px black;
            background-color: transparent;
            background-color: rgb(117, 117, 117, 0.7);
            padding-left: 0.5rem;
            padding-bottom: 0.5rem;
            color: white;
            margin-bottom: 1rem;
        }

        input:focus {
            outline: none;
            background-color: #4d4d4d;
        }

        textarea {
            font-size: 1.5rem;
            border: solid 2px black;
            height: 15rem;
            background-color: rgb(117, 117, 117, 0.7);
            color: black;
            padding: 0.5rem;
        }

        textarea:focus {
            outline: none;
        }

        button {
            margin: auto;
            margin-top: 4rem;
            width: 9rem;
            padding: 0.5rem 0.75rem 0.5rem 0.75rem;
            border: solid 2px white;
            background-color: rgb(117, 117, 117, 0.9);
            font-size: 1.3rem;
            color: black;
        }
    }

    @media all and (min-width: 700px) {
        form {
            width: 30rem;
            margin: auto;

            label {
                margin-top: 1rem;
                margin-bottom: 0.5rem;
            }
        }
    }
`;
