import React from 'react'
import { useState } from 'react'


const Signinng = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(true)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
   

    let setFormButton = () => {
        if (checked === true) {
            setChecked(false)
        } else {
            setChecked(true)
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        let emailValid = false;
        if (email.length === 0) {
            setEmailError('Email is required')
        // } else if (email.indexOf('') >= 0) {
        //     setEmailError('Email cannot contain spaces')
        } else {
            setEmailError('')
            emailValid = true
        }
        
        let passwordValid = false;
        if (password.length === 0) {
            setPasswordError('Enter a password with a minimum of 7 characters')
        } else if (password.length < 7) {
            setPasswordError('Enter a password with a minimum of 7 characters')
        } else {
            setPasswordError('')
            passwordValid = true
        }

        if (emailValid && passwordValid) {
            setEmail('')
            setPassword('')
            alert('Email: ' + email + '\nPassword: ' + password);
        }
    }
     



    return (
        <div id="signin">
            <form id="sign-in" onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <input type="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value.trim())} value={email} />
                {emailError.length > 0 && <p>{emailError}</p>}
                <input type="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)} value={password}  />
                {passwordError.length > 0 && <p>{passwordError}</p>}
                <label htmlFor="terms">
                    <input type="checkbox" name="terms" onChange={setFormButton} />
                    <span>Click to agree with our terms and condition</span>
                </label>
                <button disabled={checked} type='submit'>Sign In</button>
            </form>

        </div>
    )
}

export default Signinng
