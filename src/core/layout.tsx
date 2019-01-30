import React from 'react';
import styled from 'styled-components';
import { Header } from './header';

export class Layout extends React.Component {
    static Main = styled.div`
        margin: auto;
        max-width: 800px;
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