import { useState } from "react"
import './Login.css'
import { Link } from "react-router-dom"

const Login=({heading,setHeading,isUser,setIsUser})=>{
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const handleSignUp=()=>{
        setHeading('Sign up')
        setIsUser(false) 
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUserName('')
        setEmail('')
        setPassword('')
    }

    return(
        <main className="Login-main">
            <div className="login-container">
                <h2>{heading} to <span>cityhopper</span></h2>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    {
                        !isUser&&
                        <input 
                            placeholder="username"
                            required
                            type="text"
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                        />
                    }

                    <input 
                        placeholder="email"
                        required
                        type="text"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="password"
                        required
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type="submit">{heading}</button>
                </form>
                {
                    isUser &&
                    <p>Dont have an account? <Link className="link-text" onClick={()=>handleSignUp()}>sign up</Link></p>
                }    
            </div>
        </main>
    )
}

export default Login