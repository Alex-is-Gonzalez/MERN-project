import React from 'react'
import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:'',
    })
    //destructuring for form
    const {name, email, password, password2} = formData
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