import { useCallback, useRef, useState } from 'react';
import './index.css';
import { useEffect } from 'react';

function App() {
  const[length, setLength]=useState(8);
const[numberAllowed,setnumAllowed]=useState(0);
const [charAllowed,setcharAllowed]=useState(0);
const[password, setPassword] = useState("");

const passref=useRef(null) //to make sure that the reference

 const copypas=useCallback(()=>{
  window.navigator.clipboard.writeText(password)
 },[password])
const passwordgenator= useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+= "!@#$%^&*()_+"
  for (let i = 1; i < length; i++) {
    let char =Math.floor(Math.random()*str.length+1);
    pass +=str.charAt(char);
  }
  setPassword(pass)
},
[length, charAllowed, numberAllowed, setPassword]) 
useEffect( () => {passwordgenator} , [length,charAllowed,numberAllowed,passwordgenator]);

  return (
    <><div className='music'>
     <h1 className="hello">password generator</h1>
     <input type="text"value={password}
     placeholder='password'
     readOnly
     ref={passref}/>     
    
     <button onClick={copypas}
     className='sex'>copy</button>
     <div>
      <input type='range'
      min={6}
      max={100}
      value={length}
      onClick={(e)=>{setLength(e.target.value)}}/>
      
        
      
      <label>length{length}</label>
     </div>
     <div>
      <input type='checkbox' id='num' onChange={()=>{setnumAllowed((prev)=>!prev)}} />
      <label>number</label>
     </div>
     <div>
      <input type="text"
      value={charAllowed}
      readOnly
      onClick={(e)=>{setcharAllowed(e.target.value)}}/>
       <label>character{}</label>
       <div>
      <input type='checkbox'
      defaultChecked={charAllowed} id='num' onChange={()=>{setcharAllowed((prev)=>!prev)}} />
     </div>
     </div>
     </div>

    </>
  )
}

export default App
