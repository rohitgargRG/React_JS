import React from 'react'
import {Link , NavLink} from 'react-router-dom'
import { useParams } from 'react-router-dom';


function User(){
    const {userid} = useParams()
    return (
     <div className='bg-grey-600 text-white text-center text-3xl p-12'>User:{userid}</div>
    );
}

export default User;