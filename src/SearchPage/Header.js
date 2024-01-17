import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header=({search,setSearch})=>{
    const navigate =useNavigate()
    return(
        <header className="SearchPage-header">
            <form className="Home-form"> 
                <FaArrowLeft 
                    type="button"
                    onClick={()=>navigate(`/`)}
                />
                <input
                    placeholder="search bus no or destination"
                    autoFocus
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />  
            </form>
        </header>
    )
}

export default Header