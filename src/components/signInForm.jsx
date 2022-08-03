import React from 'react'

const Signinform = ({
    Field,
    ErrorMessage,
    values,
}) => {
  return (
    <>
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
    </>
  )
}

export default Signinform