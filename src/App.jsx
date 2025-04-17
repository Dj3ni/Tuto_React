import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/NavComponent/Navbar.jsx'
import Demos from "./pages/Demos.jsx";
import Exe from './pages/Exe.jsx';
import HomePage from './pages/HomePage.jsx'


function App() {

  return (
    <>
      <Router>
         <Navbar/>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/demos' element={<Demos/>}/>
            <Route path='/exe' element={<Exe/>}/>
         </Routes>
      </Router>
    </>
  )
}

export default App
