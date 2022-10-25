import React from 'react'
import Community from '../components/Community'
import Team from '../components/CoreTeam/Team'
import Student from '../components/StudentBody/Student'


const community = () => {
  return (
    <div>
      <div>
        <Community/>
      </div>
      <div>
      <Team/>
      </div>
      <div>
      <Student/>
      </div>
    
    </div>
    )
}

export default community