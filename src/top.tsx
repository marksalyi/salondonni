import React from 'react';
import styled from 'styled-components'
import SzemoldokTetovalas from './Szemoldoktetovalas';
import SzemoldoktetovalasImg from './SzemoldoktetovalasImg';

interface Property{
    IsSecond: boolean
}

const TopSection = styled.div<Property>`
    display:flex;
    justify-content: center;
    background: ${props => (props.IsSecond ? `linear-gradient(267.94deg, #DECCCD -2.57%, #FFFFFF 72.66%, #F2E5E6 101.17%)` : `inherit`)};
    
`

const Header = styled.div`
    
font-family: 'DM Serif Display';
font-style: normal;
font-weight: 700;
font-size: 48px;
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


const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    width: 50%;
    margin-left:150px;
`
const Right = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    width: 50%;
    margin-right:150px;
    padding: 20px 20px 20px 20px;
    `
interface Props {
    header: string;
    text: string;
    text1: string;
    text2: string;
    text3?: string;
    img: string;
    IsSecond: boolean
}
    

const Top:React.FC<Props> = (props:Props) => {
    return (
    <TopSection IsSecond={props.IsSecond}>
            <Left>
           <Header>{props.header}</Header> 
           <Text>{props.text}</Text>
           <Text>{props.text1}</Text>
           <Text>{props.text2}</Text>
           <Text>{props.text3}</Text>
           </Left>
           <Right>
            <SzemoldoktetovalasImg img={props.img}/> 
           </Right>
           </TopSection>
    )
}

export default Top;