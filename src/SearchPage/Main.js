import { useNavigate } from "react-router-dom"

const Main=({searchResults})=>{
    const navigate=useNavigate()

    return(
        <main className="SearchPage-main">
            {(searchResults.length)?
                <ul>
                    {((searchResults).map((searchResult)=>{
                        return(  
                            <li 
                                key={searchResult.id}
                                onClick={()=>navigate(`/route/${searchResult.id}`)}
                            >
                                <p>{searchResult.start} to {searchResult.destination}</p>
                                <p>
                                    <span className="span-key">includes:</span>
                                    <span className="span-value">{searchResult.destination}</span>
                                </p>
                                <p>
                                    <span className="span-key">route no:</span>
                                    <span className="span-value">{searchResult.routeNo}</span>
                                </p>
                            </li>
                            )
                        }
                    ))}
                </ul>:
                (<p style={{'textAlign':"center"}}>no results found</p>)
            }
        </main>
    )
}

export default Main