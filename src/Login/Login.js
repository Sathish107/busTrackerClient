import { useState } from "react"
import './Login.css'
import { Link } from "react-router-dom"

const Login=()=>{
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUserName('')
        setEmail('')
        setPassword('')
    }

    return(
        <main className="Login-main">
            <div className="login-container">
                <h2>Log in to <span>cityhopper</span></h2>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input 
                        placeholder="username"
                        required
                        type="text"
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                    />
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
                    <button type="submit">Login</button>
                </form>
                <p>Dont have an account? <Link className="link-text">sign up</Link></p>
            </div>
        </main>
    )
}

export default Login