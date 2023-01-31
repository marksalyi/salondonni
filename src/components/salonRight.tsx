import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction: column;
`
const Header = styled.div`
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 63px;
    color: #303030;
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

const List = styled.li`
     font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #303030;
     
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
border-radius: 20px 20px 20px 5px;
background-color: #a87951;
border-style: none;
color: #FFFFFF;
align-items: left;
width: 30%;
`

const SalonRight:React.FC = () => {
    return (
        <Container>
            <Header>Szalonunk</Header>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
            <Text>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</Text>
            <List>Prémium környezet</List>
            <List>Profi kiszolgálás</List>
            <List>Mínőségi munkavégzés</List>
            <List>Pontos időpontfoglalás</List>
            <Btn>Szolgáltatásaink</Btn>
        </Container>
    )
}

export default SalonRight;