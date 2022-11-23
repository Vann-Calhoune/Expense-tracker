import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import HomeComponent from './modules/home';
import OverviewComponent from './modules/home/OverviewComponent';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;
`;

const Header = styled.span`
color: black;
font-size: 25px;
font-weight: bold;
`

function App() {
  return (
    <Container >
      <Header>Net Cash</Header>
      <HomeComponent />
      
      
    </Container>
  );
}

export default App;
