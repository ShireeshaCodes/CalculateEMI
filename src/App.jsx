
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[princiapl,setPrincipal] = useState(0);
  const[interest,setIntrest] = useState(0);
  const[years,setYears] = useState(0);
  const[emi,setEmi] = useState();

  const handleChange = (e) =>{ 
    const id = e.target.id 
    if(id === "principal"){
      setPrincipal(e.target.value)
    }else if(id === 'interest' ) {
      setIntrest(e.target.value)
    }else{
      setYears(e.target.value)
    }
   
  };

  const calculateEMI = () => {
    let r =  interest ;
    if (princiapl && interest && years) {
      r = r/12/100 
      const calcpow = Math.pow(1+r,years *12)
      const amount = princiapl *((r * calcpow) /(calcpow - 1)) 
    setEmi(Math.round(amount))
        } 
    
  }

  useEffect(() => {
    calculateEMI();
  },[princiapl,interest,years])

  return (
    <>
    <div className='loan-calc' >
      <h1 > Mortage Calculator</h1 >
      <div className='inputes' >
      <p>Princiapl:</p>
      <input onChange={handleChange} id="principal" type='number'/>
      <p>Interest:</p>
      <input onChange={handleChange} id="interest" type='number'/>
      <p>Years:</p>
      <input onChange={handleChange} id="year" type='number'/>
      </div>
      <div className='output'>
        Your EMI is {emi}
      </div>

    </div>
      
    </>
  )
}

export default App
