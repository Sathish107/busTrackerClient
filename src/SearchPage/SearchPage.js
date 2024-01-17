import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import './SearchPage.css'

const SearchPage=()=>{
    const navigate=useNavigate()
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
                />  
            </form>
        </header>
    )
}

export default SearchPage