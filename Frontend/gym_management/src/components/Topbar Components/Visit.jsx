import React, { useState } from 'react'

const Visit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    console.log(event);
  }

  return (
    <>
      <div className='form_container'>
        <div className='form_info'>
          <button className='ctn'>Contact Us</button>
          <h2>Contact Form</h2>
          <p>Fill out the form and one of our friendly team members will get back to you shortly</p>
          <p>Follow us on socialmedia</p>
          <div className='socials'>
            <div>
              <a href='https://www.linkedin.com/feed/'>
                <img src='https://blog.waalaxy.com/wp-content/uploads/2021/01/3-1.png' />
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrujIssKdmcNa9IYjrpgSTmr95w1xY1gY1oQ&s' />
              </a>
            </div>
            <div>
              <a href='https://x.com/?lang=en'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_XDf5IV5rYHDSqgnZTCCCoQuFOrVWfFdcA&s' />
              </a>
            </div>
          </div>
          <div className='btn2'>
            <button>
              <p>You can email us here</p>
              <a href="mailto:anuj.k.work@gmail.com" target='_blank'>Anuj.K.Work@gmail.com </a>
            </button>
          </div>
          <div className='btn2'>
            <button>
              <p>Give us a call on</p>
              <h4>+91 9812340345</h4>
            </button>
          </div>
          <div className='btn2'>
            <button>
              <p>Office hours</p>
              <h4>5:00 am to 10:00 pm</h4>
            </button>
          </div>
        </div>
        <div className='form'>
          <form>
            <table>
              <tbody>
                <tr>
                  <td>First name</td>
                  <td>Last name</td>
                </tr>
                <tr>
                  <td>
                    <input type='text' value={firstName} onChange={e => { setFirstName(e.target.value) }} />
                  </td>
                  <td>
                    <input type='text' value={lastName} onChange={e => { setLastName(e.target.value) }} />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>Phone</td>
                </tr>
                <tr>
                  <td>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                  </td>
                  <td>
                    <input type='number' value={phone} onChange={e => { setPhone(e.target.value) }} />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>Subject</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <input type='text' value={subject} onChange={e => { setSubject(e.target.value) }} />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>Message</td>
                </tr>
                <tr>
                  <td>
                    <input type='text' value={message} onChange={e => { setMessage(e.target.value) }} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='btn'>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Visit;
