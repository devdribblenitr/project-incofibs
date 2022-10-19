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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, explicabo?</p>
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

  //   <div className="registrationCards">
  //   <div className="grid">
  //     <div className="grid-item">
  //       <div className="card">
  //         <div className="card-content">
  //           <div className="Bird-container">  <h1 className="card-header" style={{textAlign:"center",marginTop: "15px"}} >Early Bird</h1></div>

  //           <div className="card-text">
  //           <h2 style={{textAlign:"left",letterSpacing:".07rem",marginLeft: "15px"}}>  Till Oct 15,2022</h2>
  //           </div>
  //           <hr/>
  //           <h3 style={{textAlign:"center"}}>Member Student <span style={{padding: 0,marginLeft: "25px"}}>₹300</span> </h3>
  //         <hr/>
  //         <h3 style={{textAlign:"center"}}>Member Faculty<span style={{padding: 0,marginLeft: "25px"}}>₹4000</span> </h3>
  //       <hr/>
  //       <h3 style={{textAlign:"center",paddingLeft:"16px"}}>Non Member Student <span style={{padding: 0,marginLeft: "25px"}}>₹3500</span> </h3>
  //     <hr/>
  //     <h3 style={{textAlign:"center",paddingLeft:"16px"}}>Non Member Faculty <span style={{padding: 0,marginLeft: "25px"}}>₹300</span> </h3>
  //   <hr/>
  // <h3 style={{textAlign:"center",paddingLeft:"4px"}}>Foreign Delegates<span style={{padding: 0,marginLeft: "25px"}}>$100</span> </h3>
  //           <button className="card-btn" style={{marginBottom: "20px"}}>Buy Now!</button>
  //         </div>
  //       </div>
  //     </div>


  //     {/* <div className="grid-item">
  //       <div className="card">
  //         <div className="card-content">
  //           <div className="Bird-container">  <h1 className="card-header" style={{textAlign:"center",marginTop: "15px"}} >Regular</h1></div>

  //           <div className="card-text">
  //         <h2 style={{textAlign:"left",letterSpacing:".07rem",marginLeft: "15px"}}>Till Oct 31,2022</h2>
  //           </div>
  //           <hr/>
  //           <h3 style={{textAlign:"center"}}>Member Student <span style={{padding: 0,marginLeft: "25px"}}>₹3500</span> </h3>
  //         <hr/>
  //         <h3 style={{textAlign:"center"}}>Member Faculty <span style={{padding: 0,marginLeft: "25px"}}>₹500</span> </h3>
  //       <hr/>
  //       <h3 style={{textAlign:"center",paddingLeft:"16px"}}>Non Member Student <span style={{padding: 0,marginLeft: "25px"}}>₹4000</span> </h3>
  //     <hr/>
  //     <h3 style={{textAlign:"center",paddingLeft:"16px"}}>Non Member Faculty <span style={{padding: 0,marginLeft: "25px"}}>₹6000</span> </h3>
  //   <hr/>
  //   <h3 style={{textAlign:"center",paddingLeft:"4px"}}>Foreign Delegates <span style={{padding: 0,marginLeft: "25px"}}>$150</span> </h3>
  //           <button className="card-btn" style={{marginBottom: "20px"}}>Buy Now!</button>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="grid-item">
  //       <div className="card">
  //         <div className="card-content">
  //           <div className="Bird-container">  <h1 className="card-header" style={{textAlign:"center",marginTop: "15px"}} >Late/on spot</h1></div>

  //           <div className="card-text">
  //         <h2 style={{textAlign:"left",letterSpacing:".07rem",marginLeft: "15px"}}>Nov 01,2022 Onwards</h2>
  //           </div>
  //           <hr/>
  //           <h3 style={{textAlign:"center"}}>Member Student <span style={{padding: 0,marginLeft: "25px"}}>₹4000</span> </h3>
  //         <hr/>
  //         <h3 style={{textAlign:"center"}}>Member Faculty <span style={{padding: 0,marginLeft: "25px"}}>₹6000</span> </h3>
  //       <hr/>
  //       <h3 style={{textAlign:"center",paddingLeft:"16px"}}>Non Member Student <span style={{padding: 0,marginLeft: "25px"}}>₹500</span> </h3>
  //     <hr/>
  //     <h3 style={{textAlign:"center",paddingLeft:"16px"}}>Non Member Faculty <span style={{padding: 0,marginLeft: "25px"}}>₹7000</span> </h3>
  //   <hr/>
  //   <h3 style={{textAlign:"center",paddingLeft:"4px"}}>Foreign Delegates <span style={{padding: 0,marginLeft: "25px"}}>$200</span> </h3>
  //           <button className="card-btn" style={{marginBottom: "20px"}}>Buy Now!</button>
  //         </div>
  //       </div>
  //     </div> */}
  //   </div>
  //   </div>
  )
}

export default RegistrationCards