import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import DonniButton from './DonniButton'
import SminkHeader from './Sminkheader'
import SzemoldokTetovalas from './Szemoldoktetovalas';
import Footer from './footer';
import NewOutPut from './newoutput';


const Container = styled.div`
display: flex;
flex-direction: column;
  width: 100vw;
  height: 100vh;

`

const App:React.FC = () => {
  return (
    <Container>
      <SminkHeader />

      <SzemoldokTetovalas/>
      
      <Footer/>
      <NewOutPut/>
    </Container>
  );
}

export default App;
