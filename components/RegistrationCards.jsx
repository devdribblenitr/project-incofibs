import { StylesContext } from "@material-ui/styles"
import { SelectUnstyledContext } from "@mui/base"
import React from "react"

import styles from '../styles/RegistrationCards.module.css'

const early = [
  {
    title: 'Member Student' ,
    price: 'Rs. 300',
  
}, 
  {
    title: 'Member Faculty',
    price:'Rs. 4000',
    
}, 
  {
    title: 'Non Member Student',
    price:   'Rs. 3500',
  
}, 
  {
    title: 'Non Member Faculty',
    price:
      'Rs. 500',
    
}, 
  {
    title: 'Foriegn Delegates',
    price:'$100',
    
}
]

const regular = [
  {
    title: 'Member Student' ,
    price: 'Rs. 3500'
   
}, 
  {
    title: 'Member Faculty',
    price:
    'Rs. 500',
    
}, 
  {
    title: 'Non Member Student',
    price: 
    'Rs. 4000',
   
}, 
  {
    title: 'Non Member Faculty',
    price:
     'Rs. 6000',
}, 
  {
    title: 'Foriegn Delegates',
    price:
     '$150',
    
}
]

const late = [
  
    {
      title: 'Member Student' ,
      price: 'Rs. 4000' 
    }, 
    {
      title: 'Member Faculty',
      price:
      'Rs. 6000'
  }, 
    {
      title: 'Non Member Student',
      price:
      'Rs. 500'
  }, 
    {
      title: 'Non Member Faculty',
      price:
       'Rs. 7000'
    
  }, 
    {
      title: 'Foriegn Delegates',
      price:
       '$200'
  }
  
]


const Card = ({title, validity, object})=>{
  return(
    <div className={styles.card}>
      <div className={styles.heading} >
      <h1 >{title}</h1>
      <p>
        {validity}
      </p>
      </div>

      <div className={styles.content}>
        <ul>
        {object.map(item=>{
          return (
            <li key={Math.random()}>
              <h3>{item.title}</h3>
              <p> {item.price} </p>
              <hr/>
            </li>
          )
        })}
        </ul>
        
      </div>

      
    </div>
  )
 
}

const RegistrationCards = () => {
  return (

    <div className={styles.registration}>
      
        <div className={styles.title}>
          <div className="flex flex-col">
          <h2>
            Tickets Pricing
          </h2>
          <p className="md:flex"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, explicabo?</p>
          </div>
          <span className={styles.icon}>
            <h1></h1>
            <h2></h2>
          </span>
        </div>
        
      <div className={styles.registrationCards}>
      
        <Card title='Early Bird' validity='Till Oct 15th, 2022' object={early}/>
        <Card title='Regular' validity='Till Oct 31st, 2022' object={regular}/>
        <Card title='Late/on Spot' validity='Nov 01, 2022 Onwards' object={late}/>
      </div>
         
      </div>
  )
}

export default RegistrationCards