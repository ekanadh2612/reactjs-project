import { useState } from "react";

function SignUp(){

  var [name, setName] = useState("")
  var [email, setEmail] = useState("")
  var [mobile, setMobile] = useState("")
  var [password, setPassword] =useState("")
  var [qualification, setQualification] =useState("")
  var [gender, setGender] =useState("")
  var [cricket, setCricket] =useState(false)
  var [football, setFootball] =useState(false)
  var [volleyball, setVolleyball] =useState(false)
  var [kabaddi, setKabaddi] =useState(false)

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handleMobileChange(event) {
    setMobile(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handleCreateAccount() {
    console.log(name, email, mobile, password, qualification, gender, cricket, football, volleyball, kabaddi)
  }

  function handleQualification(event) {
    setQualification(event.target.value)
  }

  function handleGender(event) {
    setGender(event.target.value)
  }

  function handleCricket(event) {
    if(event.target.checked == true)
      setCricket(true)
    else
      setCricket(false)
  }

  function handleFootball(event) {
    if(event.target.checked == true)
      setFootball(true)
    else
      setFootball(false)
  }

  function handleVolleyball(event) {
    if(event.target.checked == true)
      setVolleyball(true)
    else
      setVolleyball(false)
  }

  function handleKabaddi(event) {
    if(event.target.checked == true)
      setKabaddi(true)
    else
      setKabaddi(false)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Create Account</h3>
          <div className="mb-3 mt-3">
            <label>Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your Name" onChange={e => handleNameChange(e)} />
          </div>
          <div className="mb-3">
            <label>Email ID</label>
            <input type="email" className="form-control" placeholder="email" onChange={e => handleEmailChange(e)} />
          </div>
          <div className="mb-3">
            <label>Mobile no</label>
            <input type="text" className="form-control" placeholder="Mobile" onChange={e => handleMobileChange(e)} />
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
            <label>Highest Educational Qualification</label>
            <select className="form-select" onChange={e => handleQualification(e)}>
              <option selected>Select..</option>
              <option>10th Class</option>
              <option>Intermediate</option>
              <option>Diploma</option>
              <option>Graduation</option>
              <option>Post-Graduation</option>
              <option>PHD</option>
            </select>
          </div>

          <div>
            <label>Gender</label>
          </div>
          <div className="form-check">
            <input type="radio" id="male" className="form-check-input" name="gender" value="Male" onChange={e => handleGender(e)} />
            <label for="male" className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input type="radio" id="female" className="form-check-input" name="gender" value="Female" onChange={e => handleGender(e)} />
            <label for="female" className="form-check-label">Female</label>
          </div>
          <div className="form-check">
            <input type="radio" id="others" className="form-check-input" name="gender" value="Others" onChange={e => handleGender(e)} />
            <label for="others" className="form-check-label">Others</label>
          </div>
          
          <div>
            <label>Favourite Sports</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="cricket" className="form-check-input" value="Cricket" onChange={e => handleCricket(e)} />
            <label for="cricket" className="form-check-label">Cricket</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="football" className="form-check-input" value="Football" onChange={e => handleFootball(e)} />
            <label for="football" className="form-check-label">Football</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="volleyball" className="form-check-input" value="Volleyball" onChange={e => handleVolleyball(e)} />
            <label for="volleyball" className="form-check-label">Volleyball</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="kabaddi" className="form-check-input" value="Kabaddi" disabled onChange={e => handleKabaddi(e)} />
            <label for="kabaddi" className="form-check-label">Kabaddi</label>
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