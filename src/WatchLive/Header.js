import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate=useNavigate()
    
    return(
        <header className="WatchLive-header">
            <FaArrowLeft 
                onClick={()=>navigate(`/`)}
            />
            <h1>Buses around you</h1>
        </header>        
    )
}

export default Header