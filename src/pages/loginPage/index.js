import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../context/ThemeContext'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(null)
    const { isAuthenticated, user, login, } = useAuth()
    const userData = {
        email: email,
        password: password
    }

    const UserLogin = () => {
        axios.post('http://localhost:4000/login_user', userData)
            .then(function (res) {
                console.log("Get Response", res)
                login(res?.data?.userData)
                setStatus(res?.data?.msg)
            })
            .catch(function (err) {
                console.log(err)
            })
    }


    return (
        <div>
            <div className="page_width">
                <h2>Login</h2>
                <h2>{status ? status : ''}</h2>
                <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={UserLogin} > Login </button>
            </div>
        </div>
    )
}

export default LoginPage