import React, {useState} from "react";
import "./Form.css"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email)
    }


    return (
        <div className="form">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="name" placeholder="name" value={name} id="Name" onChange={(e)=>  setName(e.target.value)}/>
                <input type="text" placeholder="email" value={email} id="email" onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} id="password" onChange={(e)=>  setPassword(e.target.value)}/>
                <button>Log in</button>
            </form>
            <a href="#login" onClick={() => props.onFormSwitch('login')}>Already have an account</a>


        </div>
    )
}

