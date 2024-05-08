import React, { useState } from 'react';
import "./Form.css";
function Form() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [problems, setProblems] = useState("")
    console.log(name)

    function handleSubmit(e){
        e.preventDefault()
        console.log(name,password,email,problems);
    }
  return (
    <div className='container_body'>
    <form onSubmit={handleSubmit}>
        <div className='container'>
            <div>
              <label>
                Name
              <input type="text" className='box' value={name} onChange={(e)=>setName(e.target.value)}/>
              </label>
            </div>
            <div>
              <label>
                Password
              <input type="password" className='box' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </label>
            </div>
            <div>
              <label>
                Email
              <input type="email" className='box' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </label>
            </div>
            <div>
              <label>
                Tell us your problems!
              <textarea className="text_area" value={problems} onChange={(e)=>setProblems(e.target.value)}>Tell us your problems</textarea>
              </label>
            </div>
        </div>
        <input type="submit" />
    </form>
    </div>
  )
}

export default Form
