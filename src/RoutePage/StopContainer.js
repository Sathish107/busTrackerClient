import { useState } from "react"
import { RiBusFill } from "react-icons/ri"

const StopContainer=({stop})=>{
    const [height,setHeight]=useState(4)
    const [align,setAlign]=useState('centre')
    const [isClicked,setIsClicked]=useState(false)  
    const handleClick=()=>{
        if(isClicked){
            setIsClicked(false)
            setAlign('center')
            setHeight(4)
        }else{
            setIsClicked(true)
            setAlign('start')
            setHeight(5)
        }    
    }
    return(
        <div className="stopname-container" key={stop.id}>


            <div className="sidebar" style={{"height":`${height}rem`}}>
                <p className="space-para" style={{"alignContent":"start"}}></p>
                <p className="space-para" style={{"alignContent":`${align}`}}>
                {(stop.stopName==='Sriperumbudur')&&<RiBusFill />}</p>
                <p className="space-para" style={{"alignContent":"end"}}></p>
            </div>

            <div className="stopname" style={{"height":`${height}rem`}}>
                <p className="space-para"></p>
                <div onClick={()=>handleClick()}>
                    <p>{stop.stopName}</p>
                    {isClicked&&<p>stop details</p>}
                </div>
                <p className="space-para"></p>
            </div>


        </div>
    )
}

export default StopContainer