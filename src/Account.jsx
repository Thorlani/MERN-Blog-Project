import React, {useState, useContext} from 'react'
import Navbar from './components/navBar'
import Avatar from './asset/avatar.jpg'
import axios from 'axios'
import BlogContext from './contextAPI/Context'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  const [isloading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(BlogContext)

  const [post, setPost] = useState({
    title: '',
    content: ''
  })
  const [filename, setFilename] = useState('')
  

  const [show, setShow] = useState(false)

  const onChangeFile = (e) => {
    setFilename(e.target.files[0])
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setPost(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  const handleSubmit = async (event) => {
    setIsLoading(true)
    const formData = new FormData()

    formData.append('postImage', filename)
    formData.append('title', post.title)
    formData.append('content', post.content)
    try {
      event.preventDefault()
      axios.post('https://mern-blog-project-by-me.herokuapp.com/api/blog', formData)
      .then(res => {
        setIsLoading(false)
        window.location.reload(true)
      })
    } catch (error) {
      setIsLoading(false)
      window.alert(error)
      console.log(error)
    }
  }

  let userName = Cookies.get('user')

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
      <div className='w-full h-[40vh] bg-[#60d3c9] flex justify-center items-end py-[3%] rounded-b-[2%]'>
        <Navbar active="account" />
        <div className='flex flex-col justify-center items-center'>
          <img 
            src={Avatar} 
            alt="Photo by Somben Chea: https://www.pexels.com/photo/blue-lollipop-1289363/"
            className='w-[100px] h-[100px] object-cover rounded-[50%] border-2 border-[#fff] mb-2'
          />
          <p className='text-white'>Hello</p>
          <h1 className='text-white font-bold text-3xl'>{userName}</h1>
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
            <div className='h-[60vh] w-[100vw] px-[3%] pb-[3%] pt-1'>
              <div onClick={() => setShow(!show)} className='w-[100%] mb-1 text-end'>
                <button>
                  <div className={`w-[21px] h-[2px] bg-[#60d3c9] ease-in duration-300 -rotate-45 transition-transform translate-y-[1px] translate-x-[1px]`}></div>
                  <div className={`w-[21px] h-[2px] bg-[#60d3c9] ease-in duration-300 rotate-45 transition-transform -translate-y-[0.5px] translate-x-[1px]`}></div>
                </button>
              </div>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className='flex flex-col'>
                  <label htmlFor="title">Title</label>
                  <input 
                    type="text"
                    name="title"
                    className='border-[1px] border-black h-[37px] outline-none rounded-md indent-2'
                    value={post.title}
                    onChange={handleChange}
                  />
                  <div className='text-[red] font-normal text-xs mb-2'>
                    
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="content">Body</label>
                  <textarea 
                    name="content"
                    className='border-[1px] border-black w-full h-[250px] outline-none rounded-md indent-2 pt-2'
                    value={post.content}
                    onChange={handleChange}
                  />
                  <div className='text-[red] font-normal text-xs mb-2'>
                    
                  </div>
                </div>
                <div>
                  <input 
                    type="file" 
                    filename="postImage"
                    className='form-control-file '
                    value={post.image}
                    onChange={onChangeFile}
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