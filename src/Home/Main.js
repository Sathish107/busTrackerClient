import { useEffect, useState } from "react";
import SearchInstance from "./SearchInstance"
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Main=({recentlySearched,mostlySearched})=>{
    const navigate=useNavigate()

    const [recentlyLength,setRecentlyLength]=useState(0)
    const [mostlyLength,setMostlyLength]=useState(0)
    useEffect(() => {
        setRecentlyLength(Math.min(recentlySearched.length, 3));
        setMostlyLength(1)
    }, [recentlySearched]);
    

    return(
        <main className="Home-main">
            <div className="search-container">
            <h2>Recently searched</h2>           
                {
                    (recentlySearched.length)?
                    <div className="search-list">
                        {
                            recentlySearched.slice(0,recentlyLength).map((search)=>{
                                return(
                                    <SearchInstance 
                                        key={search.id}
                                        id={search.id}
                                        start={search.start}
                                        destination={search.destination}
                                    />

                                )
                            })
                        }
                        {
                            (recentlySearched.length>recentlyLength) && <p className="see-more"><MdKeyboardArrowRight onClick={()=>navigate('/recentlysearched')}/></p>
                        }
                    </div>:
                    <p style={{"textAlign":"center"}}>There is no search history</p>
                }
            </div>

            
            <div className="search-container">
            <h2>Mostly searched</h2>
                {(recentlySearched.length)?
                    <div className="search-list">
                        {
                            recentlySearched.map((search)=>{
                                return(
                                    <SearchInstance 
                                        key={search.id}
                                        id={search.id}
                                        start={search.start}
                                        destination={search.destination}
                                    />
                                )
                            })
                            
                        }
                    </div>:
                    <p style={{"textAlign":"center"}}>There is no search history</p>
                }

            </div>
        </main>
    )
}

export default Main