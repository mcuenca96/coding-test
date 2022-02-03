import React from 'react'
import fetch from 'isomorphic-fetch'
import MembersGrid from './components/MembersGrid'
import Header from './components/Header'

async function onClick() {
  const data = await fetch('http://localhost:5000/api/hello')
  alert((await data.json()).message)
}

function App() {
  return (
    <div className="App">
      <Header>
        <MembersGrid />
        <button onClick={onClick}>Click me</button>
      </Header>
    </div>
  )
}

export default App
