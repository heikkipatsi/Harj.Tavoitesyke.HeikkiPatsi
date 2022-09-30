
import './App.css';
import { useState } from 'react';

function App() {
  const [Upper, setUpper] = useState(0)
  const [Lower, setLower] = useState(0)
  const [Age, setAge] = useState('')
  

  function Laske(e){
    e.preventDefault()
    const Upper = (220 - Age) * 0.85
    setUpper(Upper)
    const Lower = (220 - Age) * 0.65
    setLower(Lower)
  }
    
  return (
    <div id="kontsa">
      <h3>Heart rate limits Calculator</h3>
       <form onSubmit={Laske}>
        <div>
          <label>Age</label>
          <div/>
          <input value={Age} onChange={e => setAge(e.target.value)}/>
          </div> 
          <div>
           <label>Heart rate limits</label>
           <div></div>
           <output>{Lower.toFixed(0)} - {Upper.toFixed(0)}</output>
           </div>
           <button>Calculate</button>
       </form>
    </div >
  );
}

export default App;
