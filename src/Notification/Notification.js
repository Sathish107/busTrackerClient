import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Notification=()=>{
    const navigate=useNavigate()
    return(
        <header className="WatchLive-header">
            <FaArrowLeft 
                onClick={()=>navigate(`/`)}
            />
            <h1>Notification</h1>
        </header>
    )
}

export default Notification