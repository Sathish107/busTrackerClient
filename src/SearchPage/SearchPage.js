import Header from "./Header";
import Main from "./Main";
import './SearchPage.css'

import { useEffect,useState } from "react";

const SearchPage=({routes})=>{
    const [search,setSearch]=useState('')
    const [searchResults,setSearchResults]=useState([])

    useEffect(()=>{
        console.log(routes)
    },[routes])

    useEffect(()=>{
        setSearchResults(routes.filter((route)=>(route.routeNo).includes(search)))
        if(!search){
            setSearchResults([])
        }
    },[search])

    return(
        <>
            {
                (!routes.length)?
                (<p style={{"textAlign":"center"}}>Loading...</p>):
                (
                    <>
                    <Header 
                        search={search}
                        setSearch={setSearch} 
                    />

                    <Main 
                        searchResults={searchResults}
                    />
                    </>
                )
            }
        </>
    )
}

export default SearchPage