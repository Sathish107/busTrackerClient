import Map from "./Map"
import { useParams } from "react-router-dom"
import './RoutePage.css'

const RoutePage=({routes})=>{
    const {id}=useParams()
    const route=routes.find((route)=>(route.id).toString()===id) 

    return( 
        <main className="RoutePage-main">
            <Map route={route}/>
        </main>
    )
}

export default RoutePage