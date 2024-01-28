import MenuBar from '../MenuBar/MenuBar'
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import './Home.css'
import { useState } from "react"

const Home=({recentlySearched,mostlySearched})=>{
    const [isMenuClicked,setIsMenuClicked]=useState(false)

    return(
        <>
            {isMenuClicked&&<MenuBar setIsMenuClicked={setIsMenuClicked}/>}
            <Header setIsMenuClicked={setIsMenuClicked} />
            <Main 
                recentlySearched={recentlySearched}
                mostlySearched={mostlySearched}
            />
            <Footer />
        </>
    )
}

export default Home