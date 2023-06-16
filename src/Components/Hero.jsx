import img from "../assets/background.jpg"
import Button from 'react-bootstrap/Button';
import Overlay from './Overlay';

const Hero = () => {
   
    return (
        <>

            <Overlay image={img}>
                <h1 className="text-6xl font-bold text-white">A Memorable Experience.</h1>
                <Button className="outline-none bg-purple-500 text-white rounded-none" >Reserve Now</Button>
            </Overlay>

        </>
    )
}

export default Hero;
