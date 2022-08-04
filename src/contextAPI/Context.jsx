import React from 'react'
import { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import cookies from 'js-cookie'

const BlogContext = createContext()

export function BlogProvider({ children }) {

    const [user, setUser] = useState('')

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const cookieValue = () => {
        const user = cookies.get('user')
        if(user) {
            setIsAuthenticated(true)
        }
    }

    useEffect(() => {
        cookieValue()
    },[])

    const [blogPost, setBlogPost] = useState([])

    useEffect(() => {
        axios.get('https://mern-blog-project-by-me.herokuapp.com/api/getBlogs/')
        .then(res => {
            setBlogPost(res.data)
            
        }).catch(err => {
            console.log(err)
        })
    },[])

    console.log(blogPost);
    

    return (
        <BlogContext.Provider value={{setUser, user, setIsAuthenticated, isAuthenticated }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext