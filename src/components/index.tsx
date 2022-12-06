import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 3em;
    font-weight: 400;

    @media screen and (max-width: 1000px) {
        font-size: 2em;
    }
`;

export class Index extends React.Component {
    render () {
        return (
            <Heading>
                I’m a Product Manger and Engineer
Previously Product@Canva, Engineering@Canva, Engineering@Atlassian
            
            </Heading>
        );
    }  
}
