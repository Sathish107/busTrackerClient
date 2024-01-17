import Home from "./Home/Home"
import SearchPage from "./SearchPage/SearchPage"
import WatchLive from "./WatchLive/WatchLive"
import Notification from "./Notification/Notification"
import { useEffect } from "react"
import { Route,Routes } from "react-router-dom"

const App=()=>{   
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/search" element={<SearchPage />}/>
                <Route path="/watchlive" element={<WatchLive />}/>
                <Route path="/notification" element={<Notification />}/>
            </Routes>           
        </div>

    )
}

export default App