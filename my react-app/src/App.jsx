import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name ="Demo";
  var x=30;
  var y=45;
  function fun(){
    return "Inside function";
  }
  function sum(a,b)
  {
    return a+b;
  }
     return (
    <div>
     <h1>jsx with curly braces</h1>
     <h2>use variable with jsx</h2>
     <h2>sum of two numbers: {x + y}</h2>
     <h2>Example of variable in demo</h2>
     <h2>use function with jsx</h2>
     <h3>{fun()}</h3>
     <h3>Example of parameterized function: {sum(10, 20)}</h3>

      
   
    </div>
  )
}

export default App
