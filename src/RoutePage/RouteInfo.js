import { RiBusFill } from "react-icons/ri"

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
                                <div className="stopname-container" key={stop.id}>
                                    <div className="sidebar">
                                        <p className="space-para"></p>
                                        <p className="space-para">{(stop.stopName==='SVCE college')&&<RiBusFill />}</p>
                                        <p className="space-para"></p>
                                    </div>
                                    <div>
                                        <p className="space-para"></p>
                                        <p>{stop.stopName}</p>
                                        <p className="space-para"></p>
                                    </div>
                                </div>
                            )
                        })        
                    }                   
                </div>
            </div>
        </div>
    )
}

export default RouteInfo
