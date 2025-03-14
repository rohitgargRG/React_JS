import React , {useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile(){
   
    // recieving the data
    const {user} = useContext(UserContext)

    if(!user) return <div>please login</div>

    return <div>Welcome {user.userName}</div>
    
}

export default Profile