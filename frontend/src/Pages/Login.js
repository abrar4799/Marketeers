import {useState} from 'react'
import  { useNavigate } from 'react-router-dom'



const Login = ({addLog}) => {
    let navigate = useNavigate()
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

   
 

    const addLogHandler = e =>{
        e.preventDefault();
        if(email === ''){
         setErrorMessage("Email is required")
         return;
        } 
        else if (password === ''){
          setErrorMessage("Password is required")
          return;
        }
        else if (!email.includes('@')){
          setErrorMessage("Invaid Email")

        }
        else {
        setErrorMessage("")  
        addLog({
            email,
            password
        }) 
         
        navigate("/home")
      }
    }
   
    
  return (
    <div className='container'>
      <form >
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email address:
          </label> <p id='worningMail' style={{color : 'red'}}>{errorMessage}</p>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            onChange={e => setEmail(e.target.value)}

          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Password:
          </label>
          <p className='worning' style={{color : 'red'}}></p>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            onChange={e=> setPassword(e.target.value)}
          />
        </div>
        <div id="emailHelp" className="form-text">
            We'll never share your password with anyone else.
          </div>
       <div className='p-3'>
        <button type="submit" className="btn btn-primary " onClick={addLogHandler} >
          Log In
        </button>
        
</div>
      </form>
    </div>
  );
  };

export default Login;
