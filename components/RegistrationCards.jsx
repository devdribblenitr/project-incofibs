import { StylesContext } from "@material-ui/styles"
import { SelectUnstyledContext } from "@mui/base"
import React, { useEffect, useState } from "react"
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import styles from '../styles/RegistrationCards.module.css'
import PaymentDetails from "./PaymentDetails";
import AbstractDetails from "./AbstractDetails";
import { useRouter } from 'next/router';
import imgQR from '../public/registerImg.svg'

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
  const router = useRouter();
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
          <Card title='Late Bird'
            // validity='soon to be announced'
            validity='till 15th September'
            object={late} />
        </div>
        <p style={{ marginBottom: "50px", marginTop: "-35px", color: "#000000b3" }}><b>Partipation fee without presention is Rs. 4,000</b></p>
        <button style={{ color: "#E84C3D", borderRadius: "40px", padding: "12px 35px", border: "2px solid #E84C3D", marginBottom: "40px" }} className="button_cards mt-6 md:-mt-10"
          // onClick={() => signIn(providers.google.id, { callbackUrl: '/login' })}
          onClick={() => {
            // https://forms.gle/nVdV4L6KXWXRYvAa7
            // window.location.href = "https://forms.gle/nVdV4L6KXWXRYvAa7";
            router.push('https://forms.gle/nVdV4L6KXWXRYvAa7');
          }}
        >Click Here to Register & Submit Abstract</button>
        <hr />
        <img style={{ height: "300px", width: "300px" }} src={imgQR.src} alt="Register QR" />
        <p style={{ marginBottom: "30px", marginTop: "10px" }}><b>Scan QR to Register</b></p>
        <h2 style={{ marginTop: "35px", marginBottom: "10px" }}>Registeration fee includes</h2>
        <p style={{ color: "#000000b3" }}>Lunch, Dinner coupon</p>
        <p style={{ color: "#000000b3", marginBottom: "30px" }}>Registration kits</p>

      </div>
      <PaymentDetails />
      <AbstractDetails />
    </>
  )
}

export default RegistrationCards
