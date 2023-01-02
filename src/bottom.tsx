import React from 'react';
import styled from 'styled-components'
import SzemoldoktetovalasImg from './SzemoldoktetovalasImg';


interface Property{
    IsSecond: boolean
}

const BottomSection = styled.div<Property>`
    display:flex;
    justify-content: center;
    background: ${props => (props.IsSecond ? `linear-gradient(267.94deg, #DECCCD -2.57%, #FFFFFF 72.66%, #F2E5E6 101.17%)` : `inherit`)};
`

const Img = styled.img`
    
    width: 65%;
    height: 90%;
    border-radius: 80px 80px 80px 5px;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    width: 50%;
    margin-left: 150px;
`

const Right = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    width: 50%;
    margin-right: 150px;
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

interface Props {
    header?: string;
    text: string;
    text1: string;
    text2: string;
    text3: string;
    text4?: string;
    img: string;
    IsSecond: boolean
}

const Bottom:React.FC<Props> = (props:Props) => {
    return(
        <BottomSection IsSecond={props.IsSecond}>
        <Left>
        <SzemoldoktetovalasImg img={props.img}/>
        </Left>
        <Right>
         <Text>{props.text}</Text>
        <Text>{props.text1}</Text>
        <Text>{props.text2}</Text>
        <Text>{props.text3}</Text>
        </Right>
        </BottomSection>
    )
}

export default Bottom;
