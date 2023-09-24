import {useState,useRef,useEffect} from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import Button from '@mui/material/Button';
import './App.css';

function App() {

  const today = new Date();
  const defaultTime = new Date(today.getFullYear(),today.getMonth(),today.getDate(),0,0,0);
  const [value,setValue] = useState(new Date(today.getFullYear(),today.getMonth(),today.getDate(),0,0,0));
  const [msLeft,setMsLeft] = useState(new Date(today.getFullYear(),today.getMonth(),today.getDate(),0,0,0).valueOf());
  const [pause,setPause] = useState(false);

  const hoursRef = useRef();
  const minutesRef = useRef();
  const secondsRef = useRef();
  let countdown = useRef();

  useEffect(() => {
    
    if(msLeft <= defaultTime.valueOf())
    {
      clearInterval(countdown.current);
    }else if(pause){
      countdown.current = setInterval(decreaseTime,1000);
    }
    return () => clearInterval(countdown.current);
  },[pause,msLeft]);

  function decreaseTime()
  {
    const remainingTime = new Date(msLeft - 1000);
    displayTimeLeft(remainingTime.getHours(),remainingTime.getMinutes(),remainingTime.getSeconds());
    if(msLeft < defaultTime.valueOf())
    {
      clearInterval(countdown.current);
    }else{
      setMsLeft(prev => prev - 1000);
    }
  }

  function handleChange(newValue)
  {
    const newDate = new Date(today.getFullYear(),today.getMonth(),today.getDate(),newValue.$H,newValue.$m,newValue.$s);
    setValue(newDate);
    setMsLeft(newDate.valueOf());
    displayTimeLeft(newValue.$H,newValue.$m,newValue.$s);
  }

  function clear()
  {
    setValue(defaultTime);
    clearInterval(countdown.current);
    setPause(false);
    displayTimeLeft(defaultTime.getHours(),defaultTime.getMinutes(),defaultTime.getSeconds());
  }

  function formatTime (time){
    return time < 10 ? `0${time}` : `${time}`;
  }

  function displayTimeLeft(hours,minutes,seconds)
  {
    hoursRef.current.textContent = formatTime(hours);
    minutesRef.current.textContent = formatTime(minutes);
    secondsRef.current.textContent = formatTime(seconds);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
          <h1>Count Down Timer</h1>
          <div className='countdownContainer'>
              <TimeField format="HH:mm:ss" onChange={(newValue) => handleChange(newValue)} value={dayjs(value)}/>
          </div>
          <div className='buttonContainer'>
            <Button variant="contained" onClick={() => setPause((prev) => !prev)} color={!pause ? 'success': 'error'}>{ !pause ? 'Start': 'Stop'}</Button>
            <Button variant="contained" onClick={clear} color='primary'>Clear</Button>
          </div>
          <div className='timer'>
            <p id='hours' ref={hoursRef}>00 </p>
            <p> : </p>
            <p id='minutes' ref={minutesRef}>00 </p>
            <p> : </p>
            <p id='seconds' ref={secondsRef}>00</p>
          </div>
      </div>
    </LocalizationProvider>  
  );
}

export default App;
