import {Routes, Route, } from "react-router-dom";
import Home from "./page/Home"
import Blog from "./page/Blog"
import "./App.css"
function App() {
  return (
    <div className="container">
    <Routes>
    <Route path="/" element={ <Home />}/>
    <Route path="/blog/:id" element={<Blog />} />
  </Routes>
  </div>
  );
}



export default App;
