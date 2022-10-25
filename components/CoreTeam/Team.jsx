import React,{useState} from 'react'
import data from './data'
import Core from './Core'
const Team = () => {

    const [team, setTeam] = useState(data)

    return (
        <div className="w-full bg-[#102c3a] mt-12 py-12 px-12 mx-6 ml-0">
         <div>
           <h1 className="w-full max-w-[1440px] mx-auto text-center py-2 text-4xl text-white font-bold">Core Organising Team</h1>
         <div className="w-32 h-1 bg-white mx-auto my-3"></div>
         </div>
         <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-10 place-content-center'>
            {team.map((data) => { return (<Core key={data.id} name = {data.name} email={data.email} contact = {data.contact} />)
            })} 
         </div>
         
      </div>
      );
  
}

export default Team