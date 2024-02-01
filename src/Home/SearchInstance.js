import { useNavigate } from "react-router-dom"

const SearchInstance=({id,start,destination})=>{

    const navigate=useNavigate()
    return(
        <>
            {
                (id)?
                <div onClick={()=>{
                    navigate(`/route/${id}`)
                }}>
                    <p>{(start.length > 11)?start.slice(0,11)+"...":start}</p>
                    <p>to</p>
                    <p>{(destination.length > 11)?destination.slice(0,11)+"...":destination}</p>
                </div>:
                <p>Loading...</p>
            }
        </>
    ) 
}

export default SearchInstance 