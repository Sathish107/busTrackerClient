import Login from "./Login/Login" 
import Home from "./Home/Home"
import SeeMore from "./SeeMore/SeeMore"
import SearchPage from "./SearchPage/SearchPage"
import RoutePage from "./RoutePage/RoutePage"
import WatchLive from "./WatchLive/WatchLive"
import Notification from "./Notification/Notification"
import { useEffect,useState } from "react"
import { Route,Routes } from "react-router-dom"

const App=()=>{   
    const [routes,setRoutes]=useState([])
    const [heading,setHeading]=useState('Log in')
    const [isUser,setIsUser]=useState(true)
    const [recentlySearched,setRecentlySearched]=useState([])
    const [mostlySearched,setMostlySearched]=useState([])

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
                <Route path="/login" element={<Login 
                    heading={heading} 
                    setHeading={setHeading} 
                    isUser={isUser}
                    setIsUser={setIsUser}
                />}/>
                <Route path="/recentlysearched" element={<SeeMore 
                    recentlySearched={recentlySearched}
                />} />
                <Route path="/" element={<Home 
                    routes={routes}
                    recentlySearched={recentlySearched}
                    mostlySearched={mostlySearched}
                />}/>
                <Route path="/search" element={<SearchPage 
                    routes={routes}
                    setRecentlySearched={setRecentlySearched}
                    setMostlySearched={setMostlySearched}
                />}/>
                <Route path="/route/:id" element={<RoutePage routes={routes}/>}/>
                <Route path="/watchlive" element={<WatchLive />}/>
                <Route path="/notification" element={<Notification />}/>
            </Routes>           
        </div>

    )
}

export default App