import React from 'react'

const Post = ({
    Field,
    ErrorMessage,
    values,
    setValue,
}) => {
  return (
    <>
            <div className='flex flex-col'>
            <label htmlFor="title">Title</label>
            <Field 
                type="text"
                name="title"
                className='border-[1px] border-black h-[37px] outline-none rounded-md indent-2'
            />
            <div className='text-[red] font-normal text-xs'>
                <ErrorMessage name="title" />
            </div>
            </div>
            <div className='flex flex-col'>
            <label htmlFor="content">Title</label>
            <Field 
                as="textarea"
                name="content"
                className='border-[1px] border-black w- h-[250px] outline-none rounded-md indent-2'
            />
            <div className='text-[red] font-normal text-xs'>
                <ErrorMessage name="content" />
            </div>
            </div>
            <div>
            <button className='px-2 py-2 bg-[#60d3c9] text-white rounded-md uppercase'>post</button>
            </div>
    </>
  )
}

export default Post