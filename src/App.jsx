import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FrontPage from './Pages/Frontpage';
import RoomsandRate from './Pages/RoomsandRate';
import Facilities from './Pages/Facilities';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import NavigationBar from './Components/Navbar';
import Login from './Pages/loginpage';
import Todo from './Pages/Todos/Todo';
import Register from './Pages/Register';
import TodoDetails from './Pages/Todos/TodoDetails';



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
          <Route path='/todos' element={<Todo />} />
          <Route path='/todos/:id' element={<TodoDetails />} />
          <Route path = '/register' element= {<Register />}> </Route>

        </Routes>
        <Footer />
      </Router>


    </>
  )
}

export default App