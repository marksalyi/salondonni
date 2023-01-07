import React, { useState } from 'react'
import styled from 'styled-components'

interface Item{
    review: string,
    img: string,
    name: string
}

const UL = styled.ul`
    display: flex;
    flex-direction: row;
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
            <h1></h1>
            <div></div>
            <UL>{newItem.map(item => {
                return <li>{item.review}<br></br>{item.img}<br></br>{item.name}</li>
            })}</UL>
        </div>
    );
}

export default NewOutPut;

// 3 componens : egész, lista, lista elemei