import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import DonniButton from './DonniButton'
import SminkHeader from './Sminkheader'
import SzemoldokTetovalas from './Szemoldoktetovalas';
import Footer from './footer';


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
      
      <Footer/>

    </Container>
  );
}

export default App;
