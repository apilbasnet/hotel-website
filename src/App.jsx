import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FrontPage from './Pages/Frontpage';
import RoomsandRate from './Pages/RoomsandRate';
import Facilities from './Pages/Facilities';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import NavigationBar from './Components/Navbar';
import Login from './Pages/loginpage';



const App = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/about' element={<RoomsandRate />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />
      </Router>


    </>
  )
}

export default App