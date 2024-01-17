import { useNavigate } from "react-router-dom"

const Footer=()=>{
    const navigate=useNavigate()

    return(
        <footer className="Home-footer">
            <p>Watch buses around you!</p>
            <button
                onClick={()=>navigate(`/watchlive`)}
            >WATCH</button>
        </footer>
    )
}

export default Footer