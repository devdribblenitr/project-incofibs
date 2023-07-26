import { StylesContext } from "@material-ui/styles"
import { SelectUnstyledContext } from "@mui/base"
import React, { useEffect, useState } from "react"
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import styles from '../styles/RegistrationCards.module.css'
import PaymentDetails from "./PaymentDetails";
import AbstractDetails from "./AbstractDetails";

const early = [

  {
    title: 'Research Scholars / Students',
    price: 'Rs. 5,000',

  },
  {
    title: 'Academics Delegates',
    price: 'Rs. 7,000',

  },
  {
    title: 'Industry Delegates',
    price: 'Rs. 10,000',

  },
  {
    title: 'Foreign Delegates',
    price: '$250',

  },
  {
    title: 'Foreign delegates (online)',
    price: '$100',

  }
]

const regular = [
  {
    title: 'Research Scholars / Graduate Students',
    price: 'Rs. 6,000',

  },
  {
    title: 'Academics Delegates',
    price: 'Rs. 12,000',

  },
  {
    title: 'Industry & RnD Participants',
    price: 'Rs. 15,000',

  },
  {
    title: 'Foreign Delegates',
    price: '$350',

  },
  {
    title: 'Foreign delegates (online)',
    price: '$150',

  }
]

const late = [

  {
    title: 'Research Scholars / Students',
    price: 'Rs. 6,000',

  },
  {
    title: 'Academics Delegates',
    price: 'Rs. 8,000',

  },
  {
    title: 'Industry Delegates',
    price: 'Rs. 11,000',

  },
  {
    title: 'Foreign Delegates',
    price: '$300',

  },
  {
    title: 'Foreign delegates (online)',
    price: '$150',

  }
]


const Card = ({ title, validity, object }) => {
  return (
    <div className={styles.card}>
      <div className={styles.heading} >
        <h1 >{title}</h1>
        <p>
          {validity}
        </p>
      </div>

      <div className={styles.content}>
        <ul>
          {object.map(item => {
            return (
              <li key={Math.random()}>
                <h3>{item.title}</h3>
                <p> {item.price} </p>
                <hr />
              </li>
            )
          })}
        </ul>

      </div>


    </div>
  )

}

const RegistrationCards = () => {
  const [providers, setproviders] = useState();
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

    <>
      <div id="register" className={styles.registration}>

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

          {/* <Card title='Early Bird' validity='Till Dec 31st, 2022' object={early} /> */}
          <Card title='Early Bird' validity='By 31st August' object={early} />
          {/* <Card title='Late' validity='Nov 2nd to Dec 15th, 2022' object={regular}/> */}
          <Card title='After Aug 31st'
            // validity='soon to be announced'
            validity=' '
            object={late} />
        </div>
        <p style={{ marginBottom: "92px", marginTop: "-35px", color: "#000000b3" }}><b>Partipation fee without presention is Rs. 4,000</b></p>
        <button style={{ color: "#E84C3D", borderRadius: "40px", padding: "12px 35px", border: "2px solid #E84C3D", marginBottom: "75px" }} className="button_cards mt-6 md:-mt-10" onClick={() => signIn(providers.google.id, { callbackUrl: '/login' })}>Click Here to Register</button>
      </div>
      <PaymentDetails />
      <AbstractDetails />
    </>
  )
}

export default RegistrationCards
