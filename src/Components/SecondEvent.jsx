import img from "../assets/tables.jpg"
import Overlay from "./Overlay"


const SecondEvent = () => {
    return (
        <>
            

            <Overlay image={img}>
                <h1 className="text-6xl font-bold text-white">Events & Weddings.</h1>
                <p className="w-[75%] font-semibold text-white">
                    Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change.
                </p>
            </Overlay>

        </>
    )
}

export default SecondEvent