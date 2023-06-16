import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import img2 from '../assets/background.jpg'
// import img3 from '../assets/bed.jpg'
// import img1 from '../assets/thulobed.jpg'

function Cards(props) {
    return (
        <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title className='text-center'>{props.title}</Card.Title>
                <Card.Text>
                    <ul>
                        <li>

                            {props.list}
                        </li>
                        <li>

                            {props.list1}
                        </li>
                        <li>

                            {props.list2}
                        </li>

                    </ul>
                </Card.Text >
                <div className='flex justify-between items-center'>

                    <h1 className='font-bold text-purple-500'>
                        {props.amount}
                    </h1>
                    <Button className='outline-none bg-purple-500 text-white rounded-none mt-2'>BOOK NOW</Button>
                </div>
            </Card.Body>

        </Card>
    );
}

export default Cards;