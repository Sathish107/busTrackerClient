import { MdOutlineClose,MdLogin,MdSettings,MdStarBorder,MdShare,MdInfoOutline,MdSos  } from "react-icons/md";
import './MenuBar.css'
import { useNavigate } from "react-router-dom";

const MenuBar=({setIsMenuClicked})=>{
    const navigate=useNavigate()
    return(
        <div className="MenuBar-container" onClick={()=>setIsMenuClicked(false)}>
            <div className='MenuBar-list'>
                <MdOutlineClose onClick={()=>setIsMenuClicked(false)}/>
                <ul>
                    <li onClick={()=>navigate(`/login`)}><a><MdLogin /> <p>Login</p></a></li>
                    <li><a><MdSettings /> <p>Settings</p></a></li>
                    <li><a><MdStarBorder /> <p>Favourite</p></a></li>
                    <li><a><MdShare /> <p>Share App</p></a></li>
                    <li><a><MdInfoOutline /> <p>About</p></a></li>
                    <li><a><MdSos  /> <p>SOS</p></a></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBar