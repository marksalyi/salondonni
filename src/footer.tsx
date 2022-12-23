import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content: space-around;
    height: 100%;
    background: #E4DADB;

   
`
const Left = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
   
`
const Mid = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
   
`
const Right = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    justify-content: center;
    align-items: flex-start;
   
`
const Header = styled.div`
    font-weight: bold;
    
    
`
const List = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #303030;
    
`
const Img = styled.img`
    
    width: 25%;
    height: 50%;
    border-radius: 50%;
`
const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #303030;
    width: 100%;
    align-items: end;
    margin-right: 400px;
`
const Footer:React.FC = () => {
    return (
        <Container>
            <Left>
            <Header>Információk</Header>
            <List>Adatvédelmi tájékoztatató</List>
            <List>Általános Szerződési Feltételek</List>
            <List>Elérhetőségeink</List>
            </Left>
            <Mid>
            <Header>Oldaltérkép</Header>
            <List>Kezdőlap</List>
            <List>Szolgáltatások</List>
            <ListItem>Szemhéjtetoválás</ListItem>
            <ListItem>Kozmetika</ListItem>
            <List>Rólunk</List>
            <List>Munkáink</List>
            <List>Kapcsolat</List>
            </Mid>
            <Right>
            <Img src={require("./last.jpg")} alt="" /> 
            </Right>
        </Container>
    )}

    export default Footer;