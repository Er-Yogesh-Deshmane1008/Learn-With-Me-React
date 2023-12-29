import React,{useContext} from 'react'
import UserContext from '../Context/UsreContext'

function Profile() {
  const {user} = useContext(UserContext)
  
  if (!user) return <div>Plase Login</div>

  return <div>Welocme {user.username}</div>
}

export default Profile
