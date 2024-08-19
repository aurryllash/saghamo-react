import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Registration } from './components/pages/Registration';
import SignIn from './components/pages/SignIn';
function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/Products' element={<Products /> } />
          <Route path='/registration' element={<Registration /> } />
          <Route path='/signIn' element={<SignIn /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
