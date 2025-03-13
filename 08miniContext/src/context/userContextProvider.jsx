import React from 'react';
import userContext from './userContext';

// create a method userContextProvider

const userContextProvider = ({children}) => {
        const [user , setUser] = React.useState(null)
        return (
            <userContext.Provider value = {{user , setUser}}>
                {children}
            </userContext.Provider>
        )
}


// export this method
export default userContextProvider