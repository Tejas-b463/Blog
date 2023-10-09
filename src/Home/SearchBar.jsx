import "./SearchBar.css"

const SearchBar = () =>{
    return(
        <div className="searchBar-wrap">
            <form>
                <input type="text" placeholder="Search Blog" />
                <button>Search</button>
            </form>
        </div>
    )
}
export default SearchBar