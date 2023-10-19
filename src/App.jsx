import {BrowserRouter,Routes, Route, } from "react-router-dom";
import Home from "./page/Home"
import Blog from "./page/Blog"
import "./App.css"
import Header from "./page/Header"
import Footer from './page/Footer';

function App() {
 
  return (
    <div className="container">
      <BrowserRouter>
            <Header/>
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
             <Footer/>
        </BrowserRouter>
  </div>
 
  );
}



export default App;
