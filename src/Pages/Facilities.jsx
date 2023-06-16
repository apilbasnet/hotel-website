import Overlay from '../Components/Overlay'
import Card from '../Components/Card'
import img from "../assets/facilities.jpg"
import images from "../assets"
// import { img1, img2, img3, img4 } from "../assets"



const Facilities = () => {
  return (
    <>
      <Overlay image={img}>
        <h1 className="text-6xl font-bold text-white">Facilities</h1>

      </Overlay>
      <div className="grid grid-cols-2 pl-64 gap-10 my-20">
        <Card image={images.img1} title="Parking" />
        <Card image={images.img2} title="Pool" />
        <Card image={images.img3} title="Gym" />
        <Card image={images.img4} title="Spa" />
        <Card image={images.img5} title="Conference Room" />
        <Card image={images.img6} title="Bar" />

      </div>
    </>
  )
}

export default Facilities