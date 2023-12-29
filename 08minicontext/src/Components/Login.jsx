import React,{useState, useContext} from 'react'
import UserContext from '../Context/UsreContext'

function Login() {

    const [username, setUserName] = useState('')
    const [password, setPossword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit =  (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
      <h2>Login</h2>
      <label>Username: </label>
      <input type="text"
      value={username}
      onChange={(e) => setUserName(e.target.value)}
      placeholder='username:Yogesh' /><br/>
      <label>Password: </label>
      <input type="text"
       value={password}
       onChange={(e) => setPossword(e.target.value)}
      placeholder='password:8050135015' /><br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
