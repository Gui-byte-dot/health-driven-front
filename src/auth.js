import React, {createContext, useState} from "react";
const LoginContext = createContext();

function AuthProvider({children}){
    const [image, setImage] = useState({});
    const [name, setName] = useState({});
    const [id, setId] = useState({})
    return(
        <LoginContext.Provider value={{image, setImage, name, setName, id, setId}}>
            {children}
        </LoginContext.Provider>
    )
}
export {LoginContext, AuthProvider}