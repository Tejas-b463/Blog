
import { Link } from "react-router-dom"
import "./Header.css"


const Header = () =>{
    return(
       <div className="header-container">
        <div className="left">
          
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 14h6v2h-6zM6.293 9.707 8.586 12l-2.293 2.293 1.414 1.414L11.414 12 7.707 8.293z"></path><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path></svg>
        <span>Latest</span>
        
        
        </div>
        <div className="right">
          <Link to="https://github.com/Tejas-b463">
        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 4H21V10H15V4Z" fill="currentColor"></path><path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12H3Z" fill="currentColor"></path><path d="M6 10C7.65685 10 9 8.65685 9 7C9 5.34315 7.65685 4 6 4C4.34315 4 3 5.34315 3 7C3 8.65685 4.34315 10 6 10Z" fill="currentColor"></path></svg>
        </Link>
        </div>
       </div>
    )
}
export default Header