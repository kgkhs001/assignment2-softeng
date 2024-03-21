import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Intro() {
  const [count, setCount] = useState("");
    const changeName = (): void =>{
        const enteredName: string | null = prompt("Enter name", "");
        setFullName(enteredName);
    }
  return (
    <>
        <p></p>
    </>
  )
}

export default Intro
