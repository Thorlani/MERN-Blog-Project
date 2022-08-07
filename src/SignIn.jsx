import React, { useState, useContext } from 'react'
import RightPics from './asset/signInImage.jpg'
import RightPics2 from './asset/RightPics2.jpg'
import RightPics3 from './asset/RightPics3.jpg'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as yup from 'yup'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom'
import "./SignIn.css"
import axios from 'axios'
import BlogContext from './contextAPI/Context'
import cookies from 'js-cookie'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {

    const { setUser, setIsAuthenticated, isAuthenticated } = useContext(BlogContext)
    const [isloading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const [formStage, setFormStage] = useState(1)
    const logIn = () => {
        setFormStage(2)
    }
    const signUp = () => {
        setFormStage(1)
    }
    const SIGNUP_VALUES = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    }
    const LOGIN_VALUES = {
        username2: '',
        password2: ''
    }

    const validationSchema = yup.object({
        firstName: yup.string().required('Please input your Firstname'),
        lastName: yup.string().required('Please input your Lastname'),
        email: yup.string().required('Email is required').email(),
        username: yup.string().required('Username is required'),
        password: yup.string().required('Please input your password').min(8, 'Password must be more than 8 characters').uppercase('Password must include Uppercase')
    })
    const validationSchema2 = yup.object({
        username2: yup.string().required('Username is required'),
        password2: yup.string().required('Please input your password').min(6, 'Password must be more than 6 characters').uppercase('Password must include Uppercase')
    })

    const registerSubmit = (values) => {
        setIsLoading(true)
        const body = {
            firstname: values.firstName,
            lastname: values.lastName,
            email: values.email,
            username: values.username,
            password: values.password
        }
        try {
            axios.post('https://mern-blog-project-by-me.herokuapp.com/api/user/register', body)
            .then(res => {
                setIsLoading(false)
                setUser(values.username)
                setIsAuthenticated(true)
                cookies.set('user', values.username)
                if(isAuthenticated){
                    navigate('/home')
                }
            })
        } catch (error) {
            window.alert("Ooops, looks like you are having network issues. The registration failed.")
            console.log(error)
            
        }
    }
    const loginSubmit = (values) => {
        setIsLoading(true)
        const body = {
            username: values.username2,
            password: values.password2
        }
        try {
            axios.post('https://mern-blog-project-by-me.herokuapp.com/api/user/login', body)
            .then(res => {
                setIsLoading(false)
                setUser(values.username2)
                setIsAuthenticated(true)
                cookies.set('user', values.username2)
                if(isAuthenticated){
                    navigate('/home')
                }
            })
        } catch (error) {
            window.alert("Ooops, looks like you are having network issues. Failed to log in.")
            console.log(error)
            
        }
    }
  return (
    <>
    {isloading && (
        <div className="bg-black-rgba w-full min-w-[100vw] py-[5rem] h-full min-h-[100vh] overflow-y-auto fixed top-0 left-0 flex z-[100]">
            <div className="m-auto">
                <svg className="animate-spin h-[100px] w-[100px]">
                <FontAwesomeIcon
                    style={{ color: "#7C88B1", width: "100%", height: "100%" }}
                    icon={faCircleNotch}
                ></FontAwesomeIcon>
                </svg>
            </div>
        </div>
    )}
    <div className='flex justify-center w-[100%] h-[100%]'>
        <div className='hidden md:flex absolute top-0 left-0 w-[100vw] md:relative md:w-[60%] h-[100vh]'>
            <Carousel showThumbs={false} infiniteLoop={true} showArrows={false} autoPlay={true} transitionTime={400} showStatus={false}>
                <div>
                    <img src={RightPics} className='w-full h-[100vh] object-cover' alt='Photo by Steve Johnson: https://www.pexels.com/photo/green-and-red-abstract-painting-1070534/'/>
                </div>
                <div>
                    <img src={RightPics2} className='w-full h-[100vh] object-cover' alt='Photo by Dids: https://www.pexels.com/photo/mixture-of-paint-on-black-material-2983226/'/>
                </div>
                <div>
                    <img src={RightPics3} className='w-full h-[100vh] object-cover' alt='Photo by : https://www.pexels.com'/>
                </div>
            </Carousel>
        </div>
        <div className='bg-white lg:w-[40%] px-8 py-6 relative z-20 flex justify-center'>
            {
                formStage === 2 && (
                    <div>
                        <div className='w-[50px] h-[50px] rounded-[50%] bg-[#60d3c9] flex justify-center items-center'>
                            <h1 className='font-bold text-2xl text-[white]'>BT</h1>
                            <h1 className='font-bold text-2xl text-[white] opacity-[0.4] ml-1 absolute z-10 top-[36px]'>BT</h1>
                        </div>
                        <div className='mt-[60px] '>
                            <h2 className='font-bold text-3xl text-[#60d3c9] relative z-20'>Welcome to our my blog project!</h2>
                            <h2 id='bgText' className='ml-1 absolute z-10 top-[134px] font-bold text-3xl text-[#60d3c9] opacity-[.6]'>Welcome to our my blog project!</h2>
                        </div>
                        <p className='mb-10 text-sm font-normal'>Are you new? sign up or else <button onClick={logIn} className='border-b-[1px] border-blue-600 text-blue-600'>login</button></p>
                        <Formik 
                            initialValues={SIGNUP_VALUES}
                            validationSchema={validationSchema}
                            onSubmit={registerSubmit}
                        >
                            <Form>
                                <div className='flex flex-col mb-3'>
                                    <label htmlFor="firstName" className='text-[grey] text-xs font-light'>First Name</label>
                                    <Field
                                        type='text'
                                        name='firstName'
                                        className='border-[1px] border-black w-full h-[37px] outline-none indent-2'
                                        placeholder= 'First name'
                                    />
                                    <div className='text-[red] font-normal text-xs'>
                                        <ErrorMessage name='firstName' />
                                    </div>
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label htmlFor="lastName" className='text-[grey] text-xs font-light'>Last Name</label>
                                    <Field
                                        type='text'
                                        name='lastName'
                                        className='border-[1px] border-black w-full h-[37px] outline-none indent-2'
                                        placeholder= 'Last name'
                                    />
                                    <div className='text-[red] font-normal text-xs'>
                                        <ErrorMessage name='lastName' />
                                    </div>
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label htmlFor="email" className='text-[grey] text-xs font-light'>Email</label>
                                    <Field
                                        type='email'
                                        name='email'
                                        className='border-[1px] border-black w-full h-[37px] outline-none indent-2'
                                        placeholder= 'Email'
                                    />
                                    <div className='text-[red] font-normal text-xs'>
                                        <ErrorMessage name='email' />
                                    </div>
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label htmlFor="username" className='text-[grey] text-xs font-light'>Username</label>
                                    <Field
                                        type='text'
                                        name='username'
                                        className='border-[1px] border-black w-full h-[37px] outline-none indent-2'
                                        placeholder= 'Username'
                                    />
                                    <div className='text-[red] font-normal text-xs'>
                                        <ErrorMessage name='username' />
                                    </div>
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label htmlFor="password" className='text-[grey] text-xs font-light'>Password</label>
                                    <Field
                                        type='password'
                                        name='password'
                                        className='border-[1px] border-black w-full h-[37px] outline-none indent-2'
                                        placeholder= 'Password'
                                    />
                                    <div className='text-[red] font-normal text-xs'>
                                        <ErrorMessage name='password' />
                                    </div>
                                </div>
                                <button type='submit' className='flex justify-center mx-auto w-[200px] h-fit py-2 bg-[#60d3c9] text-white rounded-md'>Submit</button>
                            </Form>
                        </Formik>
                        <p className='mt-12 md:mt-[128px] text-center'>coded by <span className='text-[#60d3c9] font-bold text-xl'>THoRLaNi</span></p>
                    </div>
                )
            }
            {
                formStage === 1 && (
                    <div>
                        <div className='w-[50px] h-[50px] rounded-[50%] bg-[#60d3c9] flex justify-center items-center'>
                            <h1 className='font-bold text-2xl text-[white]'>BT</h1>
                            <h1 className='font-bold text-2xl text-[white] opacity-[0.4] ml-1 absolute z-10 top-[36px]'>BT</h1>
                        </div>
                        <div className='mt-[60px] '>
                            <h2 className='font-bold text-3xl text-[#60d3c9] relative z-20'>Welcome to our my blog project!</h2>
                            <h2 id='bgText' className='ml-1 absolute z-10 top-[134px] font-bold text-3xl text-[#60d3c9] opacity-[.6]'>Welcome to our my blog project!</h2>
                        </div>
                        <p className='max-w-[300px] mb-10 text-sm font-normal'>Log in if you have an account or else create a new one by <button onClick={signUp} className='border-b-[1px] border-blue-600 text-blue-600'>Signing up</button></p>
                        <Formik 
                            initialValues={LOGIN_VALUES}
                            validationSchema={validationSchema2}
                            onSubmit={loginSubmit}
                        >
                            <Form>
                                <div className='flex flex-col mb-3'>
                                    <label htmlFor="username" className='text-[grey] text-xs font-light'>Username</label>
                                    <Field
                                        type='text'
                                        name='username2'
                                        className='border-[1px] border-black w-full h-[37px] outline-none indent-2'
                                        placeholder= 'Username'
                                    />
                                    <div className='text-[red] font-normal text-xs'>
                                        <ErrorMessage name='username2' />
                                    </div>
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label htmlFor="password" className='text-[grey] text-xs font-light'>Password</label>
                                    <Field
                                        type='password'
                                        name='password2'
                                        className='border-[1px] border-black w-full h-[37px] outline-none indent-2'
                                        placeholder= 'Password'
                                    />
                                    <div className='text-[red] font-normal text-xs'>
                                        <ErrorMessage name='password2' />
                                    </div>
                                </div>
                                <button type='submit' className='flex justify-center mx-auto w-[200px] h-fit py-2 bg-[#60d3c9] text-white rounded-md'>Submit</button>
                            </Form>
                        </Formik>
                        <p className='mt-[223px] md:mt-[308px] text-center'>coded by <span className='text-[#60d3c9] font-bold text-xl'>THoRLaNi</span></p>
                    </div>
                )
            }
        </div>
    </div>
    </>
  )
}

export default SignIn