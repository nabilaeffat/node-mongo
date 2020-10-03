import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import fakeData from '../../FakeData/FakeData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Destination from '../Destination/Destination';
import Description from '../Description/Description';

import './Home.css';



const Home = () => {

    const destinations = fakeData;

    const [getDestination, setDestinations] = useState(fakeData);


    return (
        <div className="home">
            <div className="description">


                <Description></Description>


            </div>
            <div className="card" >
                <Row>

                    {
                        destinations.map(destinations =>
                            <Col sm={4} key={destinations}>
                                <Destination destinations={destinations} ></Destination>
                            </Col>)
                    }
                </Row>

            </div>
        </div>

    );
};

export default Home;