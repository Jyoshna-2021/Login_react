import React from 'react';
import './App.css';
import axios from 'axios';
function App() {
  return (
    <div className="App">
      <form onSubmit={(e)=>login(e)}>
  <div class="container">
  <h2>login page</h2>
    <div class="email">
    <label for="exampleemail"><b>Email</b></label>
    <input type="email" 
    placeholder="Enter Email" 
    id="emailid" required/>
    </div>
    <div class="password">
    <label for="examplepassword"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" id="passwordid" required/>
    </div>

      <button type="submit">Submit</button>
  </div>
</form> 
    </div>);

}
function login(e){
  e.preventDefault();
  let request ={
    email: document.getElementById("emailid").value,
    password: document.getElementById("passwordid").value
  }

axios.post('http://localhost:8000/login',request)
.then(resp=>{
  alert(resp.data.message);
})
.catch(err=>{
  console.log(err);
})
}
export default App;
