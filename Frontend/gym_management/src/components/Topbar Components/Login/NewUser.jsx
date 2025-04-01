import React, { useEffect, useState } from 'react'

const NewUser = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [membership, setMembership] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("")
  const [nameWarning, setNmWarning] = useState("");
  const [ageWarning, setAgeWarning] = useState("");
  const [membershipWarning, setMembershipWarning] = useState("");
  const [contactWarning, setContactWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("")
  // const [vars, setVars] = useState(4);

  useEffect(() => {
    let incorrect = 0;
    if (name === "") {
      setNmWarning("**Name can't be blank")
      incorrect++;
    } else {
      setNmWarning("");

    }
    if (age > 80 || age < 12) {
      setAgeWarning("*Enter a valid age");
      incorrect++;
    } else {
      setAgeWarning("");

    }
    if (membership === "") {
      setMembershipWarning("**Please select a membership to proceed");
      incorrect++;
    } else {
      setMembershipWarning("");

    }
    if (contact.length != 10) {
      setContactWarning("**Enter a valid number");
      incorrect++;
    } else {
      setContactWarning("");

    }
    if (password === "") {
      setPasswordWarning("**Password can't be blank");
      incorrect++;
    } else {
      setPasswordWarning("");

    }
    console.log(incorrect);
    const btns = document.getElementById("sbmt");
    if (incorrect === 0) {
      btns.disabled = false;
      btns.style.backgroundColor = "green";
      console.log("Correct");
    } else {
      btns.disabled = true;
      btns.style.backgroundColor = "grey";
    }
  }, [age, name, membership, contact, password])

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted");
    const json = {
      "name": name,
      "age": age,
      "type": membership,
      "contact": contact,
      "password": password
    }

    const response = await fetch('http://localhost:8081/saveMember', {
      method: 'post',
      headers: new Headers({
        'Authorization': 'Basic ' + btoa('anuj:TBBT2024'),
        'content-type': 'application/json'
      }),
      body: JSON.stringify(json)
    });
    console.log(response);
  }

  return (
    <>
      <div className='rgstr_container'>
        <div className="login_form_new">
          <form className='register_new'>
            <div>
              <label>Name</label>
              <input type='text' name='name' value={name} onChange={e => setName(e.target.value)}></input>
              <div className='name_warning' style={{ color: 'red', fontSize: '50%', textAlign: 'right' }}>{nameWarning}</div>
            </div>
            <div>
              <label>Age</label>
              <input type='number' name='age' value={age} onChange={e => setAge(e.target.value)}></input>
              <div className='age_warning' style={{ color: 'red', fontSize: '50%', textAlign: 'right' }}>{ageWarning}</div>
            </div>
            <div>
              <label>Membership type</label>
              <select name="membershipType" value={membership} onChange={e => setMembership(e.target.value)}>
                <option value={""}>Select Membership</option>
                <option value={"General"}>General</option>
                <option value={"Personal"}>Personal</option>
                <option value={"Zumba"}>Zumba</option>
                <option value={"Crossfit"}>Crossfit</option>
              </select>
              {/* <input type='text' name='membershipType' value={membership} onChange={e => setMembership(e.target.value)}></input> */}
              <div className='type_warning' style={{ color: 'red', fontSize: '50%', textAlign: 'right' }}>{membershipWarning}</div>
            </div>
            <div>
              <label>Contact Details</label>
              <input type='number' name='contact' value={contact} onChange={e => setContact(e.target.value)}></input>
              <div className='contact_warning' style={{ color: 'red', fontSize: '50%', textAlign: 'right' }}>{contactWarning}</div>
            </div>
            <div>
              <label>Password</label>
              <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)}></input>
              <div className='pwd_warning' style={{ color: 'red', fontSize: '30%', textAlign: 'right' }}>{passwordWarning}</div>
            </div>
          </form>
          <div>
            <button id="sbmt" className='btn' type='submit' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewUser
