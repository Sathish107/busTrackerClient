import { useEffect} from "react"

const SeeMore=({recentlySearched})=>{
    useEffect(()=>{
        console.log(recentlySearched)
    },[])
    return(
        <>
            <header>
                <h1>Recently Searched</h1>
            </header>
            <main>
                {
                    recentlySearched.map((search)=>{
                        return(
                            <div key={search.id}>
                                <p>start:{search.start}</p>
                                <p>destination:{search.destination}</p>
                                
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}

export default SeeMore