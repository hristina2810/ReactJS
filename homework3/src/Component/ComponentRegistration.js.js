import React , { useState } from "react";

export const ComponentRegistration = () => {
 
    const [firstName,setFirstName] = useState("");

    const [lastName,setLastName] = useState("");

    const [country,setCountry] = useState("");

    const [username,setUsername] = useState("");

    const [password,setPassword] = useState("");

    const[email,setEmail] = useState("");


const ChangeState = () => {
    setFirstName(document.getElementById('firstname').value);
    setLastName(document.getElementById('lastname').value);
    setCountry(document.getElementById('country').value);
    setUsername(document.getElementById('username').value);
    setPassword(document.getElementById('password').value);
    setEmail(document.getElementById('email').value);
};
    return(
        <div id="component-registration">
            <label>First Name</label>
            <input
            id='firstname'
            type='text'
            placeholder='write your firstname'
            />
            <label>Last Name</label>
            <input
            id='lastname'
            type='text'
            placeholder='write your lastname'
            />
            <label>Country</label>
            <input 
            id='country'
            type='text'
            placeholder='write your country'
            />
            <label>Username</label>
            <input
            id='username'
            type='text'
            placeholder='write your username'
            />
            <label>Password</label>
            <input
            id='password'
            type='text'
            placeholder='write your password'
            />
            <label>Email</label>
            <input
            id='email'
            type='text'
            placeholder='write your email'
            />

            <button onClick={ChangeState} type='button' className='btn btn-primary'>
                Change
                </button>
                <hr/>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Country:  {country}</p>
                <p>Username: {username}</p>
                <p>Password: {password}</p>
                <p>Email: {email}</p>

        </div>
        
    )

}




