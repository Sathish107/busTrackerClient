import { LuMenu } from "react-icons/lu"
import { RiBusFill } from "react-icons/ri"
import { LuBell } from "react-icons/lu"

import { IoSearchOutline } from "react-icons/io5";

const Header=()=>{
    return(
        <header className="Home-header">
            <div className="icon-container">
                <LuMenu />
                <RiBusFill />
                <LuBell />
            </div>
            <h1>GOOD MORNING!</h1>
            <form>
                <IoSearchOutline />
                <input
                    placeholder="search bus"
                />  
            </form>
        </header>
    )
}

export default Header