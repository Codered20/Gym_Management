import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/context';
function LogIn() {
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    const { setUser, setType, setUsersAge, setMob } = useAppContext();
    const navigate = useNavigate();
    useEffect(() => {
        const element = document.getElementById("sbmt");
        console.log(contact.length + " " + password.length);
        if (contact.length === 0 || password.length === 0) {
            if (contact.length === 0) {
                setWarning("Enter contact details");
            } else {
                setWarning("Fill your password");
            }
            element.style.backgroundColor = "grey";
            element.disabled = true;
        } else {
            setWarning("");
            element.style.backgroundColor = "green";
            element.disabled = false;
        }
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `http://localhost:8080/authenticate/${contact}/${password}`;
        const response = await fetch(url, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Basic ' + btoa('anuj:TBBT2024'),
                'content-type': 'application/json'
            })
        })
        console.log(response)
        const jsonResponse = await response.json();
        console.log(jsonResponse)
        setUser(jsonResponse.name);
        setUsersAge(jsonResponse.age);
        setType(jsonResponse.type);
        setMob(jsonResponse.contact);
        navigate('/profile')
    }
    return (
        <div className='rgstr_container'>
            <div className="login_form">
                <form>
                    <table>
                        <tr>
                            <td className='label'><label>Contact: </label></td>
                            <td><input type="number" name="contact" value={contact} onChange={e => { setContact(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td className='label'><label>Password: </label></td>
                            <td><input type="password" name="password" value={password} onChange={e => { setPassword(e.target.value) }} /></td>
                        </tr>
                    </table>
                    <div>
                        <button id="sbmt" style={{ marginTop: '1rem' }} type="submit" onClick={handleSubmit}>Submit</button>
                        <div id="warning" style={{ color: 'red', fontSize: '70%', textAlign: 'center', marginTop: '1rem' }}>{warning}</div>
                    </div>
                    <div className="register">
                        <div>
                            <Link to="/newUser">New User? Register here..</Link>
                        </div>
                        <div>
                            <Link to="/adminLogin">Login as admin</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn
