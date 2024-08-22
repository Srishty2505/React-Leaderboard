
import Home from "./Home.jsx"
import About from "./About.jsx"
import Blog from "./Blog.jsx"
import Contact from "./Contact.jsx"
import Header from "./Header.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'



    function App()
    {
        return (
          <>
          <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element= {<Home/>}> </Route>
            <Route path="/about" element= {<About/>}> </Route>
            <Route path="/blog" element= {<Blog/>}> </Route>
            <Route path="/contact" element= {<Contact/>}> </Route>


           
          </Routes>
          </BrowserRouter>


        </>
        )
    }
    export default App