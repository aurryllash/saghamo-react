import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/Products' element={<Products /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
