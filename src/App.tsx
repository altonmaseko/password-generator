
import { useState } from 'react'
import './index.css'
import { usePassword } from './store/usePassword'

const App = () => {

  let { toggleIncludeNumbers,
    generatePassword,
    toggleIncludePunctuation,
    toggleIncludeLetters,
    toggleIncludeUppers,
    toggleIncludeSpecials,
    password } = usePassword()

  let [len, setLen] = useState<number>(0)

  return (
    <div className='bg-[#313341] text-white rounded flex flex-col shadow-xl gap-4 p-8 min-w-[400px]'>
      <h1 className=''>Password Generator</h1>
      <label htmlFor=""> Password Length</label>
      <input className='text-black p-2' type="number" value={len} onChange={(e) => setLen(+e.currentTarget.value)} max={100} min={8} />
      <ul className='flex gap-4 flex-col list-inside'>
        <li> <input type="checkbox" onChange={toggleIncludeNumbers} /> Include Numbers</li>
        <li> <input type="checkbox" onChange={toggleIncludeLetters} /> Include Letters</li>
        <li> <input type="checkbox" onChange={toggleIncludeUppers} /> Include Uppercase Letters</li>
        <li> <input type="checkbox" onChange={toggleIncludeSpecials} /> Include Special Characters</li>
        <li> <input type="checkbox" onChange={toggleIncludePunctuation} /> Include Punctuation</li>
      </ul>

      <button onClick={() => generatePassword(len)}
        className='px-4 py-2 rounded bg-teal-400 hover:scale-105 active:scale-95 transition-all duration-200'>
        Generate
      </button>
      <p className='bg-white rounded p-4 text-black'>{password}</p>
    </div>


  )
}

export default App