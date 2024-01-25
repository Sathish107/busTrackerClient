import StopContainer from "./StopContainer"

const RouteInfo=({route})=>{

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
                                <StopContainer stop={stop} />
                            )
                        })        
                    }                   
                </div>
            </div>
        </div>
    )
}

export default RouteInfo
