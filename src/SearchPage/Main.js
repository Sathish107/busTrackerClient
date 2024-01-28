import { useNavigate } from "react-router-dom"

const Main=({searchedRouteNo,searchedStop,setRecentlySearched,setMostlySearched})=>{
    const navigate=useNavigate()
    const handleClick=(route)=>{
        setRecentlySearched((previousSearched)=>[...previousSearched,{
            id:route.id,
            start:route.start,
            destination:route.destination
        }])

        setMostlySearched((previousSearched)=>{
            console.log(previousSearched)
            if(previousSearched){
                console.log("entered")
                const existingEntry = previousSearched.find((search) =>
                    search.start === route.start && search.destination === route.destination
                )
              
                if (existingEntry) {
                    console.log("exist")
                    return previousSearched.map((search) =>
                        search === existingEntry
                        ? { ...search, count: search.count + 1 }
                        : search
                )}else{
                    console.log("new")
                    return ([...previousSearched,{
                        id:route.id,
                        start:route.start,
                        destination:route.destination,
                        count:1
                    }])
                }
        }else{
            console.log("new")
            return ([...previousSearched,{
                id:route.id,
                start:route.start,
                destination:route.destination,
                count:0
            }])
        }
    })

        navigate(`/route/${route.id}`)
    }

    return(
        <main className="SearchPage-main">
            {(searchedRouteNo.length || searchedStop.length)?
                <ul>
                    {((searchedRouteNo).map((searchedRoute)=>{
                        return(  
                            <li 
                                key={searchedRoute.id}
                                onClick={()=>handleClick(searchedRoute)}
                            >
                                <p>{searchedRoute.start} to {searchedRoute.destination}</p>
                                <p>
                                    <span className="span-key">route no:</span>
                                    <span className="span-value">{searchedRoute.routeNo}</span>
                                </p>
                            </li>
                            )
                        }
                    ))}

                    {(searchedStop.length)?
                        searchedStop.map((searchedRoute)=>{
                            return(
                                <li 
                                    key={searchedRoute.route.id}
                                    onClick={()=>handleClick({
                                        id:searchedRoute.route.id,
                                        start:searchedRoute.route.start,
                                        destination:searchedRoute.stop.stopName,
                                    })}
                                >
                                    <p>{searchedRoute.route.start} to {searchedRoute.route.destination}</p>
                                    <p>
                                        <span className="span-key">includes:</span>
                                        <span className="span-value">{searchedRoute.stop.stopName}</span>
                                    </p>
                                    <p>
                                        <span className="span-key">route no:</span>
                                        <span className="span-value">{searchedRoute.route.routeNo}</span>
                                    </p>
                                </li>
                            )
                        }):<></>
                    }
                </ul>:
                (<p style={{'textAlign':"center"}}>no results found</p>)
            }
        </main>
    )
}

export default Main