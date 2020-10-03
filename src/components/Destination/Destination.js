import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Destination.css';



const Destination = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {  name, img } = props.destinations;

    return (
        <div className="destination" >
            <Card  className=" text-white card-bg ">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Footer  fontSize="36px" >{name}</Card.Footer>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Destination;