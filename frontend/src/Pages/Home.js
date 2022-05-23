import { useEffect, useState } from "react";
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'


const Home = () =>{
    const [result , setResult] = useState(0)
    const [ numbers , setNumbers] = useState([])
    let navigate = useNavigate()
    
    const getNumbers =  () =>{
    
          axios.get('http://127.0.0.1:8000/home/home/')
          .then( res =>setNumbers(res.data))
          .catch(err => console.log(err))
          
          // setNumbers(data)

    
    }
    useEffect ( () => {
        getNumbers()
    } , [])
   
    console.log(numbers , 'numbers')

   const getPercentage = () =>{
       let select = document.getElementById('select')
       let text= select.options[select.selectedIndex].text;
       console.log(text , 'text')
       let inputValue = document.getElementById('inputNumber').value;
       setResult((inputValue / text ) * 100 )
     
      
   } 
   console.log(result )
   

    return (
        <>
 <table className="table container">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Second</th>
      <th scope="col">Percentage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>  <input type="number" className="form-control" id="inputNumber"  aria-describedby="basic-addon1" onChange={getPercentage}/></td>
      <td >
       <select id="select"  onChange={getPercentage} className='dropdown'>
       <option value='0'>--select--</option> 
       {numbers.map(num =>{
          return ( <option value={num.id}>{num.numbers}</option> )
       
          }) 
         // console.log(numbers)
        }
       </select>
      </td>
      <td>{result}%</td>
    </tr>
  </tbody>
</table> 
         <div className="p-3">
        <button onClick={() => {navigate('/')}}  className="btn btn-primary " >Log out</button>
        </div>
        </>
    )
}
export default Home;