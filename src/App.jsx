import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setbookmarks] = useState([]);
const [readingTime,setReadingTime] =useState(0);


const handleAddBookmark = blog=>{
  //console.log(blog)
  const newBookmarks= [...bookmarks, blog];
  setbookmarks(newBookmarks);
}

const handleMarkAsRead =(id,time) =>{
const newReadingTime = readingTime + time;
setReadingTime(newReadingTime);

//remove the read blog from bookmark
//console.log('remve item',id)

const remainingBookmark = bookmarks.filter(bookmark=>bookmark.id!==id);
setbookmarks(remainingBookmark);
}

  return (
    <>
      <Header></Header>   
      <div className='md: flex max-w-5xl mx-auto'>
      <Blogs
       handleAddBookmark={handleAddBookmark}
       handleMarkAsRead={handleMarkAsRead}
       ></Blogs> 
      <Bookmarks 
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>
    
    </>
  )
}

export default App
