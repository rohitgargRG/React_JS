import React from 'react';
import UserContext from './UserContext';

// create a method userContextProvider
// children -> prop
// jo bhi aa rha h use as it is aage pass krdo

// m1 for writing userContextProvider
const UserContextProvider = ({children}) => {
        const [user , setUser] = React.useState(null)
        return (
            <UserContext.Provider value = {{user , setUser}}>
                {children}
            </UserContext.Provider>
        )
}


// export this method
export default UserContextProvider