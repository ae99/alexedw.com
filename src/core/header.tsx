import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from './routing';

export class Header extends React.Component {
    static Header = styled.div`
        font-family: 'Open Sans', sans-serif;
        padding: 3rem 0;

        @media screen and (max-width: 1000px) {
            text-align: center;
        }
    `;

    static Item = styled(NavLink)`
        text-decoration: none;
        color: #707070;
        display: inline;

        transition: color 100ms;
        &.active {
            color: #094C72;
        }
        padding-right: 2rem;

        @media screen and (max-width: 1000px) {
            padding: 0.5rem;
        }

    `;

    render () {
        return (
            <Header.Header>
                { 
                    routes.map((route, index: number) => {
                        if (route.heading) {
                            if (route.bold) {
                                return (
                                    <Header.Item to={route.path} key={index} activeClassName="active-disabled" exact>
                                        <b>
                                            {route.heading.replace(/ /g, "\u00a0") + ' '}
                                        </b>
                                    </Header.Item>
                                );
                            } else {
                                return (
                                    <Header.Item to={route.path} key={index} activeClassName="active" >
                                            {route.heading.replace(/ /g, "\u00a0") + ' '}
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