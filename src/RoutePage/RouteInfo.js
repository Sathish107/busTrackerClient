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
                {
                    route.stops.map((stop)=>{
                        return(
                            <StopContainer
                                key={stop.id} 
                                stop={stop} 
                                stopCount={stopCount}
                            />
                        )
                    })        
                }     
            </div>
        </div>
    )
}

export default RouteInfo
