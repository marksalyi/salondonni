import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 80px 80px 80px 5px;
    object-fit: cover;
    object-position: center;
`

const Container = styled.div`

`

interface Props {
    img: string
}



const SalonLeft:React.FC<Props> = (props:Props) => {
    return (
        <Container>
        <Img src={props.img}/>
        </Container>

    )
}

export default SalonLeft;