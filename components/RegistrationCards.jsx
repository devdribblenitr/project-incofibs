import { StylesContext } from "@material-ui/styles"
import { SelectUnstyledContext } from "@mui/base"
import React, { useEffect, useState } from "react"
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import styles from '../styles/RegistrationCards.module.css'
import PaymentDetails from "./PaymentDetails";
import AbstractDetails from "./AbstractDetails";

const early = [
  {
    title: 'Coming for a visit',
    price: 'Rs. 3,000',

  },
  {
    title: 'Research Scholars / Graduate Students',
    price: 'Rs. 4,000',

  },
  {
    title: 'Academics Delegates',
    price: 'Rs. 6,000',

  },
  {
    title: 'Industry & RnD Participants',
    price: 'Rs. 7,000',

  },
  {
    title: 'Foreign Delegates',
    price: '$300',

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
    title: 'Research Scholars / Graduate Students',
    price: 'Rs. 7,000',

  },
  {
    title: 'Academics Delegates',
    price: 'Rs. 15,000',

  },
  {
    title: 'Industry & RnD Participants',
    price: 'Rs. 17,000',

  },
  {
    title: 'Foreign Delegates',
    price: '$400',

  },
  {
    title: 'Foreign delegates (online)',
    price: '$200',

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
          <Card title='Early Bird' validity='Deadline soon to be announced' object={early} />
          {/* <Card title='Late' validity='Nov 2nd to Dec 15th, 2022' object={regular}/> */}
          {/* <Card title='After Dec 15th' validity='Dec 16th, 2022 Onwards' object={late}/> */}
        </div>
        <button style={{ color: "#E84C3D", borderRadius: "40px", padding: "12px 35px", border: "2px solid #E84C3D", marginBottom: "75px" }} className="button_cards mt-6 md:-mt-10" onClick={() => signIn(providers.google.id, { callbackUrl: '/login' })}>Click Here to Register</button>
      </div>
      <PaymentDetails />
      <AbstractDetails />
    </>
  )
}

export default RegistrationCards
