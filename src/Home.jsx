import React, {useContext} from 'react'
import postImage1 from './asset/post1.jpg'
import Header from './components/header'
import BlogContext from './contextAPI/Context'
import {Link} from 'react-router-dom'


const Home = () => {

  const { blogPost } = useContext(BlogContext)

  const truncateString = (str, num) => {
    if(str.length > num) {
        return str.slice(0, num) + '...';
    } else{
        return str
    }
  }

  const truncateString2 = (date, num) => {
    if(date.length > num) {
        return date.slice(0, num);
    } else{
        return date
    }
  }

  const articles = blogPost.map((item) => {
    return (
      <div className='w-[100%] h-[100%]' key={item._id}>
        <div className='w-[100%] md:h-[40%] lg:h-[50%] relative overflow-hidden  mb-[10px]'>
          <img src={postImage1} alt="Photo by Rodion Kutsaiev: https://www.pexels.com/photo/white-yellow-and-blue-ball-8566875/" className=' w-full h-full object-cover'/>
        </div>
        <Link to={`/home/read/${item._id}`}>
          <div>
            <span className='font-light text-[grey] text-sm'>{truncateString2(item.date, 10)}</span>
            <h1 className='font-bold text-[#5c5b5b] text-xl'>{item.title}</h1>
            <p className='font-normal text-[grey] text-sm'>{truncateString(item.content, 80)}</p>
          </div>
        </Link>
      </div>
    )
  })
  return (
    <>
      <div className='w-[100vw] h-full'>
        <Header />
        <div className='w-[100%] h-fit px-[8%] py-[3.5%]'>
          <h3 className='font-medium text-[grey] capitalize mb-10'>Latest Articles</h3>
          <div className='w-full h-fit grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-4'>
            {articles}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home