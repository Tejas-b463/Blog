import {
    AiFillStar,
    // AiOutlineHome,
    // AiOutlineFundProjectionScreen,
    // AiOutlineUser,
  } from "react-icons/ai";
  import { CgGitFork } from "react-icons/cg";

  import "./Header.css"

const Header = () =>{
    return(
        <nav className="fork-btn">
            <div>
            <h3 className="main-name">Tejas</h3>
            </div>
        <button
          href="https://github.com/Tejas-b463"
          target="_blank"
          className="fork-btn-inner"
        >
          <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
          <AiFillStar style={{ fontSize: "1.1em" }} />
        </button>
      </nav>
    )
}
export default Header