import { FaArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import './SeeMore.css'

const SeeMore=({recentlySearched})=>{
    const navigate=useNavigate()
    return(
        <>
            <header className="WatchLive-header">
                <FaArrowLeft 
                    onClick={()=>navigate(`/`)}
                />
                <h1>Recently Searched</h1>
            </header>
            <main className="SeeMore-main">
                {
                    recentlySearched.map((search)=>{
                        return(
                            <div key={search.id} onClick={()=>navigate(`/route/${search.routeId}`)}>
                                <p>start:{search.start}</p>
                                <p>destination:{search.destination}</p>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}

export default SeeMore