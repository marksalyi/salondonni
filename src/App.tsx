import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import DonniButton from './DonniButton'
import SminkHeader from './Sminkheader'
import SzemoldokTetovalas from './Szemoldoktetovalas';


const Container = styled.div`
display: flex;
flex-direction: column;
  width: 100vw;
  height: 100vh;

`

const App:React.FC = () => {
  return (
    <Container className="App">
      <SminkHeader />

      <SzemoldokTetovalas/>
    </Container>
  );
}

export default App;
