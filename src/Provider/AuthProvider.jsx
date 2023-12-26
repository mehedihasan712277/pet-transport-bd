import React, { createContext } from 'react'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const x = { name: "value" }
    return (
        <AuthContext.Provider value={x}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider