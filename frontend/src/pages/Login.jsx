import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from "../components/Spinner"
import {FaSignInAlt} from "react-icons/fa"

function Login() {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })
    //destructuring for form
    const { email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isloading, isError, isSuccess, message} = useSelector((state)=> state.auth)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        //set everything back to false
        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])
    //update state as user fills form
    const onChange = (e) => {
        setFormData((prevState) =>({
            //spread state
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    if(isloading){
        <Spinner/>
    }

    return <>
        <section className="heading">
            <h1>
                <FaSignInAlt/> Login
            </h1>
            <p>Login to set goals!</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                    className='form-control' 
                    type="email" 
                    id='email' 
                    name='email' 
                    value={email} 
                    placeholder='Enter your Email' 
                    onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                    className='form-control' 
                    type="password" 
                    id='password' 
                    name='password' 
                    value={password} 
                    placeholder='Enter your password' 
                    onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Login</button>
                </div>
            </form>
        </section>
    </>
}

export default Login