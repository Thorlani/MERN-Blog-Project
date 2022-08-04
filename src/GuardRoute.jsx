import React,{useContext} from 'react'
import { Outlet, Navigate } from "react-router-dom"
import BlogContext from './contextAPI/Context'
import cookies from 'js-cookie'

const useAuth = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(BlogContext)

    const user = cookies.get('user')
    return user 
}

const GuardRoute = () => {
    const isAuthenticated = useAuth()
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default GuardRoute