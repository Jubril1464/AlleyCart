import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/userAuthContext' 
const ProtectedRoute = ({ children }) => {
    const { user } = useUserAuth()
    console.log('Check User in Private :', user);
    if (!user) {
       return <Navigate to='/signin'/>
    } return children
}
export default ProtectedRoute