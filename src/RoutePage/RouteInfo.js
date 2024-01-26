import StopContainer from "./StopContainer"

const RouteInfo=({route})=>{
    const stopCount=route.stops.length

    return(
        <div className="RouteInfo">
            <div className="route-headings">
                <h1>{route.routeNo}</h1>
                <h2>{route.start} to {route.destination}</h2>
            </div>
            <div className="stoplist">
                <div>
                    {
                        route.stops.map((stop)=>{
                            return(
                                <StopContainer 
                                    stop={stop} 
                                    stopCount={stopCount}
                                />
                            )
                        })        
                    }                   
                </div>
            </div>
        </div>
    )
}

export default RouteInfo
