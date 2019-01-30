import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from './routing';

export class Header extends React.Component {
    static Header = styled.div`
        font-family: 'Source Sans Pro';
        padding: 3rem 0;
    `;

    static Item = styled(Link)`
        padding-right: 2rem;
        text-decoration: none;
        color: #707070;
    `;

    render () {
        return (
            <Header.Header>
                {
                    routes.map((route, index: number) => {
                        if (route.heading) {
                            if (route.bold) {
                                return (
                                    <Header.Item to={route.path} key={index}>
                                        <b>
                                                {route.heading}
                                        </b>
                                    </Header.Item>
                                );
                            } else {
                                return (
                                    <Header.Item to={route.path} key={index}>
                                            {route.heading}
                                    </Header.Item>
                                );
                            }
                        }
                    })
                }
            </Header.Header>
        );
    }  
}