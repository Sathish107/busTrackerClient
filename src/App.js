import Login from "./Login/Login"
import Home from "./Home/Home"
import SearchPage from "./SearchPage/SearchPage"
import RoutePage from "./RoutePage/RoutePage"
import WatchLive from "./WatchLive/WatchLive"
import Notification from "./Notification/Notification"
import { useEffect,useState } from "react"
import { Route,Routes } from "react-router-dom"

const App=()=>{   
    const [routes,setRoutes]=useState([])

    useEffect(()=>{
        const fetchData=async ()=>{
            const routesResponse=await fetch('http://localhost:2000/routes')
            setRoutes(await routesResponse.json())
        }

        fetchData()
    },[])

    return(
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/search" element={<SearchPage routes={routes}/>}/>
                <Route path="/route/:id" element={<RoutePage routes={routes}/>}/>
                <Route path="/watchlive" element={<WatchLive />}/>
                <Route path="/notification" element={<Notification />}/>
            </Routes>           
        </div>

    )
}

export default App