import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './assets/styles/App.css'

function App() {

  return (
      <div className="page">
        <Header/>
        
        <div className="custom-hr"></div>

        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>

        <Home/>
      </div>
  )
}

export default App
