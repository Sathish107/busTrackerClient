import SearchInstance from "./SearchInstance"

const Main=({recentlySearched,mostlySearched})=>{
    return(
        <main className="Home-main">
            <div className="search-container">
                <h2>Recently searched</h2>
                <div className="search-list">
                    {
                        (recentlySearched)&&
                        recentlySearched.map((search)=>{
                            return(
                                <SearchInstance 
                                    start={search.start}
                                    destination={search.destination}
                                />
                            )
                        })
                    }
                    {
                        (!recentlySearched.length)&&
                        <p>There is no search history</p>
                    }
                </div>
            </div>

            
            <div className="search-container">
                <h2>Mostly searched</h2>
                <div className="search-list">
                    {
                        (recentlySearched)&&
                        recentlySearched.map((search)=>{
                            return(
                                <SearchInstance 
                                    start={search.start}
                                    destination={search.destination}
                                />
                            )
                        })
                    }
                    {
                        (!recentlySearched.length)&&
                        <p>There is no search history</p>
                    }
                </div>
            </div>
        </main>
    )
}

export default Main