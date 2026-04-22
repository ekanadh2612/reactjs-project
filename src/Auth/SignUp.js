import { useState } from "react";

function SignUp(){

  var [name, setName] = useState("")
  var [email, setEmail] = useState("")
  var [password, setPassword] =useState("")

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handleCreateAccount() {
    console.log(name, email, password)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Create Account</h3>
          <div className="mb-3 mt-3">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter your Name" onChange={e => handleNameChange(e)} />
          </div>
          <div className="mb-3">
            <label>Email ID</label>
            <input type="email" className="form-control" placeholder="email" onChange={e => handleEmailChange(e)} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="password" onChange={e => handlePasswordChange(e)} />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="confirm password" onChange={e => handlePasswordChange(e)} />
          </div>
          <div className="mb-3">
            <button className="btn btn-warning" onClick={e => handleCreateAccount()}>Create Account</button>
          </div>

          <a href="/"> Home </a> <br />
          <a href="/login"> Login </a>
        </div>
      </div>
    </div>
  )
}

export default SignUp;