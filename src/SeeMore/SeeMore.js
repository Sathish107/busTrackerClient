import { FaArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import './SeeMore.css'

const SeeMore=({seeMoreHeading,recentlySearched,mostlySearched})=>{
    const navigate=useNavigate()
    return(
        <>
            <header className="WatchLive-header">
                <FaArrowLeft 
                    onClick={()=>navigate(`/`)}
                />
                <h1>{seeMoreHeading}</h1>
            </header>
            <main className="SeeMore-main">
                {
                    (recentlySearched)?
                    recentlySearched.map((search)=>{
                        return(
                            <div key={search.id} onClick={()=>navigate(`/route/${search.routeId}`)}>
                                <p>start:{search.start}</p>
                                <p>destination:{search.destination}</p>
                            </div>
                        )
                    }):
                    mostlySearched.map((search)=>{
                        return(
                            <div key={search.id} onClick={()=>navigate(`/route/${search.routeId}`)}>
                                <p>start:{search.start}</p>
                                <p>destination:{search.destination}</p>
                                <p>searched for:{search.searchedFor}</p>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}

export default SeeMore