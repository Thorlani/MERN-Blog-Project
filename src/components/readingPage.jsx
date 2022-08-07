import React,{useState, useEffect} from 'react'
import Navbar from './navBar'
import RightPics from '../asset/signInImage.jpg'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ReadingPage = ({}) => {

    const { id } = useParams()

    const [blog, setBlog] = useState([])

    useEffect(() => {
        axios.get(`https://mern-blog-project-by-me.herokuapp.com/api/getBlogs/${id}`)
        .then(res => {
            setBlog(res.data)
            
        }).catch(err => {
            console.log(err)
        })
    },[])


  return (
    <div className='w-[100vw] h-[100%] overflow-y-hidden'>
        <div className='px-[8%] bg-[#60d3c9] pb-3 rounded-b-[2%] h-[]'>
            <Navbar active={'home'} />
            <div className='px-[8%] w-full h-[500px]'>
                <img src={`/uploads/${blog.imagePath}`} alt="..." className='w-full h-full object-cover' />
            </div>
        </div>
        <div className='text-center'>
            <span>{blog.date}</span>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    </div>
  )
}

export default ReadingPage