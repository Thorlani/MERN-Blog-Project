import React, {useState} from 'react'
import Navbar from './components/navBar'
import Avatar from './asset/avatar.jpg'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as yup from 'yup'

const Account = () => {

  const [post, setPost] = useState({
    image: '',
    title: '',
    content: '',
  })


  const [show, setShow] = useState(false)

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setPost(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
    console.log(post)
  }

  return (
    <>
      <div className='w-full h-[40vh] bg-[#60d3c9] flex justify-center items-end py-[3%] rounded-b-[2%]'>
        <Navbar active="account" />
        <div className='flex flex-col justify-center items-center'>
          <img 
            src={Avatar} 
            alt="Photo by Somben Chea: https://www.pexels.com/photo/blue-lollipop-1289363/"
            className='w-[100px] h-[100px] object-cover rounded-[50%] border-2 border-[#fff] mb-2'
          />
          <p className='text-white'>Hello</p>
          <h1 className='text-white font-bold text-3xl'>Thorlani</h1>
        </div>
      </div>
      <div className='h-[60vh] flex justify-center items-center'>
        {
          !show 
          ? (
          <div className='text-center text-[grey]'>
            <h2>Would you like to Create a post😊</h2>
            <p>If yes, click <button className='px-2 py-2 bg-[#60d3c9] text-white rounded-md uppercase' onClick={() => setShow(!show)}>create</button></p>
          </div>
          ) : (
            <div className='h-[60vh] w-[100vw] px-[3%] py-[3%]'>
              <form>
                <div className='flex flex-col'>
                  <label htmlFor="title">Title</label>
                  <input 
                    type="text"
                    name="title"
                    className='border-[1px] border-black h-[37px] outline-none rounded-md indent-2'
                    value={post.title}
                    onChange={handleChange}
                  />
                  <div className='text-[red] font-normal text-xs'>
                    
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="content">Body</label>
                  <input 
                    type="textarea"
                    name="content"
                    className='border-[1px] border-black h-[250px] outline-none rounded-md indent-2'
                    value={post.content}
                    onChange={handleChange}
                  />
                  <div className='text-[red] font-normal text-xs'>
                    
                  </div>
                </div>
                <div>
                  <input 
                    type="file" 
                    name="image"
                    className='border-[1px] border-black rounded-md w-full'
                    value={post.image}
                    onChange={handleChange}
                  />
                  <button className='px-2 py-2 bg-[#60d3c9] text-white rounded-md uppercase'>post</button>
                </div>
              </form>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Account