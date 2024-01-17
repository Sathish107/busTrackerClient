import { LuMenu } from "react-icons/lu"
import { RiBusFill } from "react-icons/ri"
import { LuBell } from "react-icons/lu"

import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate=useNavigate()
    return(
        <header className="Home-header">
            <div className="icon-container">
                <LuMenu />
                <RiBusFill />
                <LuBell 
                    onClick={()=>navigate(`/notification`)}
                />
            </div>
            <h1>GOOD MORNING!</h1>
            <form className="Home-form">
                <IoSearchOutline />
                <input
                    placeholder="search bus no or destination"
                    onFocus={()=>navigate(`/search`)}
                />  
            </form>
        </header>
    )
}

export default Header