import React, { useState } from 'react'
import styled from 'styled-components'

interface Item{
    review: string,
    img: string,
    name: string,
    
}

interface Property{
    IsSecond: boolean
}

const UL = styled.ul`
    display: flex;
    flex-direction: row;
    
    background: linear-gradient(267.94deg, #DECCCD -2.57%, #FFFFFF 72.66%, #F2E5E6 101.17%);
    list-style-type: none;
`

const LI = styled.li<Property>`
    margin: 20px;
    padding: 40px;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.1);
    border-radius: ${props => (props.IsSecond ? `80px 80px 5px 80px` : `80px 5px 80px 80px`)};
    background-color: white;
    font-size: 18px;
`
const TOP = styled.div`
    margin-bottom: 30px;
`

const BOTTOM = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    

`

const IMG = styled.div`
    margin-right: 5px;
`


const NAME = styled.div`
    margin-left: 5px;
`

const NewOutPut: React.FC = () => {

const [newItem, setNewItem] = useState<Item[]>(
    [{review: "Lorem ipsum dolor sit amet consectetur. Justo tortor auctor cursus eu. Nullam nam vitae etiam nam scelerisque molestie non. Consectetur. Justo tortor auctor cursus eu.",
      img: "elso.jpg",
      name: "Dóra"},
      {review: "Lorem ipsum dolor sit amet consectetur. Justo tortor auctor cursus eu. Nullam nam vitae etiam nam scelerisque molestie non. Consectetur. Justo tortor auctor cursus eu.",
      img: "ketto.jpg",
      name: "Fanni"},
      {review: "Lorem ipsum dolor sit amet consectetur. Justo tortor auctor cursus eu. Nullam nam vitae etiam nam scelerisque molestie non. Consectetur. Justo tortor auctor cursus eu.",
      img: "elso.jpg",
      name: "Szilvi"}]
);




    return (
        <div>
            <UL>{newItem.map((item, index) => {
                return <LI IsSecond={index % 2 === 0 }><TOP>{item.review}</TOP><BOTTOM><IMG>{item.img}</IMG><NAME>{item.name}</NAME></BOTTOM></LI>
            })}</UL>
        </div>
    );
}

export default NewOutPut;

// 3 componens : egész, lista, lista elemei