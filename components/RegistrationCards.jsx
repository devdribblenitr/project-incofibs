import { StylesContext } from "@material-ui/styles"
import { SelectUnstyledContext } from "@mui/base"
import React, { useEffect, useState } from "react"
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import styles from '../styles/RegistrationCards.module.css'

const early = [
  {
    title: 'Research Scholars / Graduate Students',
    price: 'Rs. 5,000',
  
}, 
  {
    title: 'Academics Delegates',
    price:'Rs. 10,000',
    
}, 
  {
    title: 'Industry & RnD Participants',
    price:   'Rs. 12,000',
  
}, 
  {
    title: 'Foreign Delegates',
    price:  '$300',
    
}, 
  {
    title: 'Foreign delegates (online)',
    price:'$100',
    
}
]

const regular = [
  {
    title: 'Research Scholars / Graduate Students',
    price: 'Rs. 5,500',
  
}, 
  {
    title: 'Academics Delegates',
    price:'Rs. 11,000',
    
}, 
  {
    title: 'Industry & RnD Participants',
    price:   'Rs. 13,000',
  
}, 
  {
    title: 'Foreign Delegates',
    price:  '$350',
    
}, 
  {
    title: 'Foreign delegates (online)',
    price:'$150',
    
}
]

const late = [
  
  {
    title: 'Research Scholars / Graduate Students',
    price: 'Rs. 6,000',
  
}, 
  {
    title: 'Academics Delegates',
    price:'Rs. 12,000',
    
}, 
  {
    title: 'Industry & RnD Participants',
    price:   'Rs. 15,000',
  
}, 
  {
    title: 'Foreign Delegates',
    price:  '$400',
    
}, 
  {
    title: 'Foreign delegates (online)',
    price:'$200',
    
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
  const [ providers, setproviders ] = useState();
  const { data: session, status } = useSession();
  console.log("session", session);
  console.log("status", status);
  useEffect(() => {
    const setTheProviders = async () => {
        const setupProviders = await getProviders();
        setproviders(setupProviders);
    };
    setTheProviders();
  }, []);

  return (

    <div className={styles.registration}>
      
        <div className={styles.title}>
          <div className="flex flex-col">
          <h2>
            REGISTRATION
          </h2>
          <p className="md:flex"> Click the botton bellow to Register for conference and Submit your abstract</p>
          </div>
          <span className={styles.icon}>
            <h1></h1>
            <h2></h2>
          </span>
        </div>
        
      <div className={styles.registrationCards}>
      
        <Card title='Early Bird' validity='Till Nov 30th, 2022' object={early}/>
        <Card title='Regular' validity='Dec 1st to Dec 20th, 2022' object={regular}/>
        <Card title='Late/on Spot' validity='Dec 21st, 2022 Onwards' object={late}/>
      </div>
        <button className="button_cards" style={{color: "#E84C3D", borderRadius: "40px", padding: "12px 35px", border: "2px solid #E84C3D", marginTop: "-50px", marginBottom: "75px"}} onClick={() => signIn(providers.google.id)}>Click Here to Register</button>
      </div>
  )
}

export default RegistrationCards