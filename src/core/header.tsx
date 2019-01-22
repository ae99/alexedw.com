import React from 'react';
import styled from 'styled-components';

const headings = [
    'Hello World',
    'Test'
]

export class Header extends React.Component {
    Header = styled.div`
        font-family: 'Source Sans Pro';
        padding: 3rem;
        margin: auto;
        text-align: center;
    `;

    render () {
        return (
            <Header>
                {headings.map((heading: string, index: number) => {
                    return <span key={index}>{heading}</span>
                })}
            </Header>
        );
    }  
}