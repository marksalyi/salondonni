import React from 'react';
import styled from 'styled-components'
import DonniButton from './DonniButton'

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-top: 6%;
    padding-bottom: 6%; 
    
    background: linear-gradient(267.94deg, #DECCCD -2.57%, #FFFFFF 72.66%, #F2E5E6 101.17%);
`
const Header = styled.div`
    
    
    
    
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 63px;
    text-align: center;
    color: #363233;
`

const Text = styled.div`
  
    
    

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;


    text-align: center;
    letter-spacing: 0.02em;

    color: #303030;
    margin-bottom: 2%;
`

const ButtonContainer = styled.div`
    width: 25%;
    display:flex;
    justify-content: space-around;
`


const SminkHeader:React.FC = () => {
    return (
        <Container>
            <Header>Sminktetoválás</Header>
            <Text>Lorem ipsum blablabla</Text>
        <ButtonContainer>
            <DonniButton name="Szemöldök"/>
            <DonniButton name="Szemhéj"/>
            <DonniButton name="Száj"/>
        </ButtonContainer>
        </Container>
    )
}

export default SminkHeader;