import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const helloWorld = () => "Hello, World! 🌎";

  return (
    <div className="hello-world">
      {helloWorld()}
    </div>
  );
}

export default App
