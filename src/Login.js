import React, {useState} from "react";
import "./Form.css"

export const Login = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email)
    }


    return (
        <div className="form">
        <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" value={email} id="email" onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} id="password" onChange={(e)=>  setPassword(e.target.value)}/>
            <button>Log in</button>
            </form>
            <ul>
            <a href="#register" onClick={() => props.onFormSwitch('register')}>If you don't have an account register here</a>
            </ul>

        </div>
    )
}

