
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/background.jpg'
import img2 from '../assets/bed.jpg'
import img3 from '../assets/tables.jpg'
import img4 from '../assets/thulobed.jpg'
import img5 from '../assets/superior.jpg'

 function DemoCarousel() {
    
        return (
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }

    export default DemoCarousel;



