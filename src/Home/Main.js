import SearchInstance from "./SearchInstance"

const Main=({recentlySearched,mostlySearched})=>{
    return(
        <main className="Home-main">
            <div className="search-container">
                <h2>Recently searched</h2>
                {
                    (recentlySearched.length)?
                    <div className="search-list">
                        {
                            recentlySearched.map((search)=>{
                                return(
                                    <SearchInstance 
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

            
            <div className="search-container">
                <h2 className="second-heading">Mostly searched</h2>
                {(recentlySearched.length)?
                    <div className="search-list">
                        {
                            recentlySearched.map((search)=>{
                                return(
                                    <SearchInstance 
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