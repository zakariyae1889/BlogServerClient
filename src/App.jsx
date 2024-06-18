import { BrowserRouter, Routes,Route } from "react-router-dom";
import NavBar from './components/Nav/NavBar';
import Footer from "./components/Footers/Footer";
import Homepage from "./pages/pageHome";
import  Blog from "./pages/pageBlog";
import Contact from "./pages/pageContact";
import About from "./pages/pageAbout";
import Category from "./pages/pageCategory";
import Details from "./pages/pageDetails";
import Notfound from "./pages/pageNofound";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index element={<Homepage/>}/>
            <Route path="blog/" element={<Blog/>}/>
            <Route path="about/" element={<About/>}/>
            <Route path="contact/" element={<Contact/>}/>
            <Route path="category/:name" element={<Category/>}/>
            <Route path="blog/:slug" element={<Details/>}/>
        
            <Route path="*" element={<Notfound/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
     
    </>
  )
}

export default App
