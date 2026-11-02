import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from "./components1/login";
import Adventure from './components1/adventure'
import Forgot from './components1/forgot'
import Withoutlogin from './components1/withoutLogin'
import Withlogin from './components1/withLogin'
import AddBlog from "./components1/Addblog";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditBlog from './components1/editblog'
import Myprofile from './components1/myprofile'
import MyBlogs from './components1/MyBlogs'
 import AllBlogs from './components1/Allblogs';



function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />

      <Route path="/register" element={<Adventure/>} />
      <Route path="/forgot" element={<Forgot/>} />

          <Route path="/addblog" element={<AddBlog />} />
    <Route path="/editblog" element={<EditBlog />} />
    <Route path="/myprofile" element={<Myprofile />} />

    <Route path="/withlogin" element={<Withlogin />} />
    <Route path="/withoutlogin" element={<Withoutlogin />} />
    <Route path="/MyBlogs" element={<MyBlogs />} />
    <Route path="/AllBlogs" element={<AllBlogs />} />
 
      
    </Routes>
    </BrowserRouter>
     

  
    {/* <AddBlog/> */}
  {/* {<Withlogin/>} */}
  {/* <Withoutlogin/> */}
  
   {/* <Login />  */}
   {/* <Adventure/>  */}
   {/* <Forgot/>  */}
  {/* <AddBlog/> */}
  {/* <EditBlog/> */}
  {/* <Myprofile/> */}
  {/* <MyBlogs/> */}
   
  
  </>


  ) 
}

export default App;
