import axios from 'axios';
import { Route , Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login'


function App() {
  const addLog = async newLog =>{
    
    try{
      console.log(newLog , 'new Data')
      axios.post('http://127.0.0.1:8000/account/account/' , newLog)

    }catch(err) {
      console.log(err)
    }

  }
  return (
    <div className="App">
       <br/>

      <img src={require('./assets/logo.png')}/>
      
      <br></br>
      {/*<Login  addLog={addLog}/>*/}
       <br/>
      <Routes>
          <Route path='/' element={<Login  addLog={addLog} />}/>
          <Route path='home' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
