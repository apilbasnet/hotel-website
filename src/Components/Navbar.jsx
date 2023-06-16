import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';



function NavigationBar() {

    return (
        <Navbar bg="light" expand="lg" className='h-20'>
            <Container className='flex justify-around'>
                <Navbar.Brand href="#home" className='text-purple-500 font-bold '>Hotel Lunar</Navbar.Brand>




                <ul className="gap-20 flex font-semibold ">
                    <Link to='/' className='text-purple-500' >  Home </Link>
                    <Link to='/about' className='hover:text-purple-500'  >Rooms and Suites</Link>
                    <Link to='/facilities' className='hover:text-purple-500' >Facilities</Link>
                    <Link to='/contact' className='hover:text-purple-500' >Contacts</Link>
                    <Link to='/' className='hover:text-purple-500'>Offers</Link>
                    <Link to='/' className='hover:text-purple-500'>Events</Link>

                </ul>
                <Outlet />


            </Container>
        </Navbar>
    );
}

export default NavigationBar;