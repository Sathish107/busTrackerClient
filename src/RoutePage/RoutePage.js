import Map from "./Map"
import RouteInfo from "./RouteInfo"
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom"
import './RoutePage.css'

const RoutePage=({routes})=>{
    const navigate=useNavigate()
    const {id}=useParams()
    const route=routes.find((route)=>(route.id).toString()===id) 

    return( 
        <main className="RoutePage-main">        
            <FaArrowLeft className="back-button" onClick={()=>navigate(`/search`)}/>
            <Map route={route}/>
            <RouteInfo route={route}/>
        </main>
    )
}

export default RoutePage