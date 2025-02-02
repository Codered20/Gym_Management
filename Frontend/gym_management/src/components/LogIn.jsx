import React from 'react'

function LogIn() {
  return (
    <div className="login_form">
        <form>
            <div>
                <label>Username: </label>
                <input type="text" name="username" />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            <div className="register">
                <div>
                    <a href="#">New User? Register here..</a>
                </div>
                <div>
                    <a href="#">Login as admin</a>
                </div>
            </div>
        </form>
    </div>

  )
}

export default LogIn
