import React,{useState, useEffect} from 'react'
import Navbar from './navBar'
import RightPics from '../asset/signInImage.jpg'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from './footer'

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
    <>
        <div className='w-[100vw] h-[100%] overflow-y-hidden mb-[100px]'>
            <div className='px-[8%] bg-[#60d3c9] pb-3 rounded-b-[2%] overflow-hidden'>
                <Navbar active={'home'} />
                <div className='px-[8%] w-full h-[100%]'>
                    <img src={`${blog.imagePath}`} alt="..." className='w-full h-full object-contain' />
                </div>
            </div>
            <div className='text-center px-[5%]'>
                <span className='mb-2 font-light text-xs'>{blog.date}</span>
                <h1 className='mb-5 font-extrabold text-3xl'>{blog.title}</h1>
                <p className=''>{blog.content}</p>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ReadingPage