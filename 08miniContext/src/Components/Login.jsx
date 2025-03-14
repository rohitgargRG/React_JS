import React , {useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Login(){
    const [UserName , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        // sending the data
        setUser({UserName,password})
    }


    return (
        <div>
            <h2>Login</h2>

            <input type = 'text'
            value = {UserName}
            onClick={(e) => {setUsername(e.target.value)}}
            placeholder='username'/>
            
            <div></div>

            <input type = 'text'
            value = {password}
            onClick={(e) => {setPassword(e.target.value)}}
            placeholder='password'/>
            
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login