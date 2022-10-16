import React from 'react'
import ImportantDate from '../components/ImportantDate'
import ConferenceTracks from '../components/ConferenceTracks'
import  Account  from '../components/Account'
export default function temp() {
  return (
    <>
    <div style={{position: "absolute", top: "50px", right: "0px"}} >
      <Account></Account>
      
    </div>
    <ImportantDate />
    <ConferenceTracks />
    </>
  )
}
