import {useState} from 'react'
import  { useNavigate } from 'react-router-dom'


const Login = ({addLog}) => {
    let navigate = useNavigate()
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
   
 

    const addLogHandler = e =>{
        e.preventDefault();
         
        addLog({
            email,
            password
        })    
        navigate("/home")
    }
   
    
  return (
    <>
      <form >
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            onChange={e => setEmail(e.target.value)}

          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            onChange={e=> setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={addLogHandler} >
          Log In
        </button>
      </form>
    </>
  );
  };

export default Login;
