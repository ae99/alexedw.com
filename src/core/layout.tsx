import React from 'react';
import styled from 'styled-components';
import { Header } from './header';

export class Layout extends React.Component {
    static Main = styled.div`
        margin: auto;
        max-width: 1050px;

        @media screen and (max-width: 1100px) {
            padding: 0 1em;
        }
    `;

    render () {
        return (
            <Layout.Main>
                <Header/>
                {this.props.children}
            </Layout.Main>
        );
    }  
}