import MenuBar from '../MenuBar/MenuBar'
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import './Home.css'
import { useState } from "react"

const Home=()=>{
    const [isMenuClicked,setIsMenuClicked]=useState(false)
    const [recentlySearched,setRecentlySearched]=useState([
        {
            start:'kanchipuram',
            destination:'sriperumbudur'
        },
        {
            start:'Anna Nagar',
            destination:'Tambaram'            
        },
        {
            start:'kanchipuram',
            destination:'sriperumbudur'
        },
        {
            start:'Anna Nagar',
            destination:'Tambaram'            
        },
        {
            start:'kanchipuram',
            destination:'sriperumbudur'
        },
        {
            start:'Anna Nagar',
            destination:'Tambaram'            
        }
    ])
    const [mostlySearched,setMostlySearched]=useState([
        {
            start:'kanchipuram',
            destination:'sriperumbudur'
        },
        {
            start:'Anna Nagar',
            destination:'Tambaram'            
        }        
    ])

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