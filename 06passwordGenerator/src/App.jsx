import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState('')
  // useRef hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = '', char = '', str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) {
      str += '0123456789'
    }
    if (characters) {
      str += '!@#$%^&*_-+=]{}`}~'
    }
    for (let i = 1; i <= length; i++) {
      char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, characters, setPassword])
  useEffect(() => { passwordGenerator() }, [length, number, characters, passwordGenerator])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,30)
    window.navigator.clipboard.writeText(password) }, [password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white'>Password generator</h1>
        <div className=' flex shadow rounded-lg'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={() => { copyPasswordToClipBoard()}}>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={30} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label >Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={number} id='numberInput' className='cursor-pointer' onChange={() => { setNumber((prev) => !prev) }} />
            <label >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={characters} id='charInput' className='cursor-pointer' onChange={() => { setCharacters((prev) => !prev) }} />
            <label >Charactures</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
