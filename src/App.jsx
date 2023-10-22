
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/About.jsx'
import './App.css'
import Home from './components/Home.jsx'

function App() {


  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
