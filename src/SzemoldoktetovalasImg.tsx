import React from 'react';
import styled from 'styled-components'

const Img = styled.img`
   width: 100%;
   height: 100%;
    border-radius: 80px 80px 80px 5px;
    object-fit: cover;
        object-position: center;
`
interface Props {
    img: string
}


const SzemoldoktetovalasImg:React.FC<Props> = (props:Props) => {
    return (
        <Img src={props.img}/>
        
    )
};

export default SzemoldoktetovalasImg;