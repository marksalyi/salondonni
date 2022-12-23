import React from 'react';
import styled from 'styled-components'

const Container = styled.ol`
    display:flex;
    flex-direction: column;
    height: 65%;
`
const Top = styled.div`
    display:flex;
    justify-content: center;
`
const Left = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 50%;
    
`
const Btn = styled.button`
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 27px;
text-align: center;
letter-spacing: 0.06em;
text-transform: uppercase;
border-radius: 75px;
background-color: #a87951;
border-style: none;
color: #FFFFFF;
align-items: left;
width: 50%;
`
const Btn2 = styled.button`
       font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 27px;
text-align: center;
letter-spacing: 0.06em;
text-transform: uppercase;
border-radius: 75px;
background-color: #a87951;
border-style: none;
color: #FFFFFF;
align-items: left;
width: 35%;
margin-top: 30px;



`
const Right = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    width: 50%;
    height: 100%;
    `

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    width: 50%;
    height:100%;
    background: #E4DADB;
border-radius: 80px 80px 80px 5px;
`


    const Text = styled.div`
    width: 65%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #303030;
`
const Header = styled.div`
    
font-family: 'DM Serif Display';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 63px;
color: #303030;
`
const Header2 = styled.div`
    
font-family: 'DM Serif Display';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 63px;
color: #303030;
margin-top: 30px;
`

const List = styled.li`
     font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #303030;
  

    `
const Input = styled.input`
background: #FFFFFF;
border-radius: 5px;
width: 300px;
border-style: none;
margin: 5px;
height: 25px;
`
const InputMessage = styled.input`
    background: #FFFFFF;
border-radius: 5px;
width: 300px;
border-style: none;
margin: 5px;
height: 100px;

`
const Cont = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 60%;
    list-style:  circle;
    
`
const Link = styled.a`
    font-weight: bold;
    color: #a87951;
`
const Cont2 = styled.div`
    display: flex;
    width:100%;
  justify-content: end;
  margin-right: 35%;
`
const OnlineFoglalas:React.FC = () => {
    return (
        <Container>
             <Top>
            <Left>
            <Header>Vedd fel a kapcsolatot</Header> 
           <Text>Igyekszünk a lehető leghamarabb válaszolni minden kérdésedre. Használd a gyors üzenetküldés funkciót, vagy amennyiben online szeretnél időpontot foglalni, regisztrálj oldalunkra és használd az <Link href="#">Időpont Foglalás</Link> funkciót!</Text>
            <Cont>
            <List>Prémium környezet</List>
            <List>Profi kiszolgálás</List>
            <List>Mínőségi munkavégzés</List>
            <List>Pontos időpontfoglalás</List>
            <Btn>Online Foglalás</Btn>
            </Cont>
            </Left>
            <Right>
            <Box>
            <Header2>Gyors üzenetküldés</Header2>
            <Input type="text" placeholder='Teljes név'/>
            <Input type="text" placeholder='Telefonszám'/>
            <Input type="text" placeholder='Email cím'/>
            <InputMessage type="text" placeholder='Üzenet'/>
            <Cont2>
            <Btn2>Küldés</Btn2>
            </Cont2>
            </Box>
           </Right>
            </Top>
        </Container>
    )}

export default OnlineFoglalas;