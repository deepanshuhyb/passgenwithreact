import { useState, useCallback, useEffect } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  
  const passgen = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPZRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) {
      str += '0123456789'
    }
    if(charAllowed){
      str += '%$#&@'
    }
    for(let i = 0; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  } , [length, numberAllowed, charAllowed])

  useEffect(() => {
    passgen();
  }, [length, numberAllowed, charAllowed]);
  return (
    <>
    <div className='w-full max-w-md mx-auto text-white px-4 my-8 bg-gray-800 py-4'>
      password generator
      <div className='flex overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 text-black'
        placeholder='password'
        readOnly />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{
            setLength(e.target.value);
          }}/>
          <label htmlFor="">Length : {length}</label>

          <input type="checkbox" defaultChecked= {numberAllowed} id = "numberInput" onChange={(e)=>{
            setNumberAllowed((prev) => !prev);
          }} />
          <label htmlFor="">Numbers</label>

          <input type="checkbox" defaultChecked= {charAllowed} id = "numberInput" onChange={(e)=>{
            setCharAllowed((prev) => !prev);
          }} />
          <label htmlFor="">Char</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
