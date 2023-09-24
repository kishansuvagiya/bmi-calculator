import React, { useState } from 'react'
import './BMIcal.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function BMIcal() {
  const [height, setheight] = useState('')
  const [weight, setweight] = useState('')
  const [result, setresult] = useState(0)
  const [status, setStatus] = useState('')

  const clickhandler = () => {

    if (height == "" || weight == "") {
      alert("Please fill out the input fields!");
      return;
    }
    let height_m = Number(height) / 100;
    let calc = (Number(weight) / (height_m * height_m)).toFixed(2)
    setresult(calc)

    if(calc < 18.5) {
      setStatus('UnderWeight')
    }
    else if(calc >= 18.5 && calc < 25) {
      setStatus('Healthy')
    }
    else if(calc >= 25 && calc < 30) {
      setStatus('OverWeight')
    }
    else{
      setStatus('Obese')
    }

  }
  const clearHandler = () => {
    setheight('')
    setweight('')
    setresult(0)
  }
  
  return (
    <div>
      <div className="BMI_bg">
        <div className="BMI_container">
          <div className="BMI_box">
            <h1 className='py-4'>BMI Calculator</h1>
            <TextField id="outlined-basic" type='number' label="height in cm" variant="outlined" value={height} onChange={(e) => setheight(e.target.value)} className='mb-4' />
            <br />
            <TextField id="outlined-basic" type='number' label="weight in kg" variant="outlined" value={weight} onChange={(e) => setweight(e.target.value)} />
            <br />
            <Button className='mt-4' variant="contained" onClick={clickhandler}>calculate BMI</Button>
            <Button className='mt-4 ms-2' color='warning' variant="contained" onClick={clearHandler}>Clear</Button>
            <div className="result">
              <p>Your BMI is </p>
              <div className='BMI_result'>{result}</div>
              {result == 0 ? null :
                <p class="comment"> Comment: You are <span>{status}</span></p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BMIcal