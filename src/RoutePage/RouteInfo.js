const RouteInfo=({route})=>{
    return(
        <div className="RouteInfo">
            <h1>{route.routeNo}</h1>
            <h2>{route.start} to {route.destination}</h2>
            <div className="stoplist">
                <div className="sidebar"></div>
                <div>
                    {
                        route.stops.map((stop)=>{
                            return(
                                <p key={stop.id}>
                                    {stop.stopName}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RouteInfo
