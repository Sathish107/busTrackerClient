import { useNavigate } from "react-router-dom"

const SearchInstance=({id,start,destination})=>{
    const navigate=useNavigate()
    return(
        <>
            {
                (id)?
                <div key={id} onClick={()=>{
                    navigate(`/route/${id}`)
                }}>
                    <p>{start}</p>
                    <p>to</p>
                    <p>{destination}</p>
                </div>:
                <p>Loading...</p>
            }
        </>
    ) 
}

export default SearchInstance 