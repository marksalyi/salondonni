import React from 'react'
import styled from 'styled-components'
import SalonLeft from './components/salonLeft'
import SalonRight from './components/salonRight'
import big from './big.jpg';
import right from './right.jpg';
import left from './left.jpg';
import ProgressSteps from './ProgressSteps';

const ContainerFull = styled.div`
display: flex;
justify-content: center;
` 


const Container = styled.div`
    display: flex;
    justify-content: center;
`

const ContainerLeft = styled.div`
    position: relative;
   
`


const Img = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 80px 80px 80px 5px;
    
`;

const ImgRightTop = styled(Img)`
    position: relative;
    top: 0px;
    right: 0px;
`
const ImgRightBottom = styled(Img)`
    position: relative;
    bottom: 0px;
    right: 0px;
`

const ContainerRightBottom = styled.div`
position: absolute;
  bottom: 00px;
  right: 0px;
`

const ContainerRightTop = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`

const Salon:React.FC = () => {
    return (
        <ContainerFull>
        <Container>
            <ContainerLeft>
            <Img src={big}/>
            <ContainerRightTop>
            <ImgRightTop src={right}/>
            </ContainerRightTop>
            <ContainerRightBottom>
            <ImgRightBottom src={left}/>
            </ContainerRightBottom>
            </ContainerLeft>
            <SalonRight/>
        </Container>
        <ProgressSteps/>
        </ContainerFull>
    )
}

export default Salon;

// how to put two divs each other