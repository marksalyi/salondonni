import React from 'react';
import styled from 'styled-components'

const Container = styled.button`
    padding: 5px 20px;
    gap: 10px;

    background: #CDB5B8;
    border-radius: 5px;
    border: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.05em;

    color: #303030;
`
interface BtnName {
    name:String
}


const DonniButton:React.FC<BtnName> = ({name}) => {
    return (
    
        <Container>
            {name}
        </Container>
    )
}

export default DonniButton;