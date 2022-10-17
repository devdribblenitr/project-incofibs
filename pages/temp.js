import React from 'react'
import ImportantDate from '../components/ImportantDate'
import ConferenceTracks from '../components/ConferenceTracks'
import  Account  from '../components/Account'
import Footer from '../components/Footer'
export default function temp() {
  return (
    <>
    <div style={{position: "absolute", top: "50px", right: "0px"}} >
      <Account/>
      
    </div>
    <ImportantDate />
    <ConferenceTracks />
    <Footer />
    </>
  )
}
