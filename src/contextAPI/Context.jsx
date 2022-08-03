import React from 'react'
import { createContext } from 'react'

const BlogContext = createContext()

export function BlogProvider({ children }) {

    return (
        <BlogContext.Provider value={{}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext