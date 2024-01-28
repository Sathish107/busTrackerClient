import Header from "./Header";
import Main from "./Main";
import './SearchPage.css'

import { useEffect,useState } from "react";

const SearchPage=({routes,setRecentlySearched,setMostlySearched})=>{
    const [search,setSearch]=useState('')
    const [searchedRouteNo,setSearchedRouteNo]=useState([])
    const [searchedStop,setSearchedStop]=useState([])

    useEffect(()=>{
        setSearchedRouteNo(routes.filter((route)=>
            (route.routeNo.toLowerCase()).includes(search.toLowerCase())
        ))

        setSearchedStop([])
        routes.filter((route)=>{
            var stopsArray=route.stops.filter((stop)=>(stop.stopName.toLowerCase()).includes(search.toLowerCase()))
            if(stopsArray.length){
                setSearchedStop((previousSearchedStop)=>[...previousSearchedStop,{route:route,stop:stopsArray[0]}])
            }
            return null
        })

        if(!search){
            setSearchedRouteNo([])
            setSearchedStop([])
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
                            searchedRouteNo={searchedRouteNo}
                            searchedStop={searchedStop}
                            setRecentlySearched={setRecentlySearched}
                            setMostlySearched={setMostlySearched}
                        />
                    </>
                )
            }
        </>
    )
}

export default SearchPage