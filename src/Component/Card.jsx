import React from 'react'
import CardStyles from '../Styles/Card.module.css'

const Card = ({nombre, banda}) => {



  return (
    <div className={CardStyles.cardContainer}>
      <h3>Hola {nombre}, tu banda preferida es : {banda}</h3>
    </div>
  )
}

export default Card