import React from 'react';

import projects from './projects.json';
import styled from 'styled-components';

const Bordered = styled.div`
    border-bottom: 1px solid #DEDEDE;
    padding: 2em 0;
    break-after: region;
`;

const Wrapper = styled.div`
    border-top: 1px solid #DEDEDE;
    margin: 2em 0;
    column-count: 2;
`;

const When = styled.div`
    font-size: 0.75em;
    opacity: 0.8;
    margin-bottom: 0.5em;
    padding-left: 0em;
`;

const Heading = styled.h2`
    font-weight: 400;
    font-size: 1.75em;
    color: #707070;
    margin: 0 0 0.5em 0;
`;

const Paragraph = styled.p`
    font-family: 'Noto Serif', serif;
    font-size: 1.125em;
    padding: 0 1em;
    line-height: 1.6;
`;

export class Projects extends React.Component {
    render () {
        return (
            <Wrapper>
                {
                    projects.map(item => (
                     <Bordered>
                         <Heading>{item.name}</Heading>
                         <a href={item.link}>{item.link}</a>
                         <Paragraph>{item.description}</Paragraph>
                         <Paragraph>
                            <ul>
                                {
                                    item.technologies.map((technology, i) => (
                                        <li key={i}>{technology}</li>
                                    ))
                                }
                            </ul>
                         </Paragraph>


                     </Bordered>   
                    ))
                }
            </Wrapper>
        );
    }  
}