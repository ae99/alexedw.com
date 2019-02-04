import React from 'react';

import experience from './experience.json';
import styled from 'styled-components';

const Bordered = styled.div`
    border-bottom: 1px solid #DEDEDE;
    padding: 2em 0;
`;

const Wrapper = styled.div`
    border-top: 1px solid #DEDEDE;
    margin: 2em 0;
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
    font-family: 'Noto Serif JP';
    font-size: 1.125em;
    padding: 0 1em;
    line-height: 1.6;
`;

export class Experience extends React.Component {
    render () {
        return (
            <Wrapper>
                {
                    experience.map(item => (
                     <Bordered>
                         <Heading>{item.company} - {item.role}</Heading>
                         <When>
                            {
                                 item.when.map((when, i) => (
                                     `${when.start} - ${when.end}`
                                 )).join(' & ')
                             }
                         </When>
                         <Paragraph>{item.description}</Paragraph>
                         <Paragraph>
                            <ul>
                                {
                                    item.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
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