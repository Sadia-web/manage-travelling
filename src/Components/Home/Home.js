import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Area from '../Area/Area';
import {fakeData} from '../fakeData/fakeData';
import './Home.css';

const Home = () => {
    const history = useHistory();

    const [place, setPlace] = useState(fakeData[0]);
    const handleClick = (data) => {
        setPlace(data);
    }

    const handleBooking = () => {
        history.push( `/booking/${place.id}`);
    }

    return (
        <header className="img-sizing">
            <div className="d-flex align-items-center places">
            <div className="p-2 heading">
                <h1>{place.name}</h1>
                <p>{place.description}</p>
                <button onClick={handleBooking} className="custom-btn">Booking</button>
            </div>

            {
                fakeData.map(place => <Area className="img-style" handleClick={handleClick} data={place}></Area>)
            }
            </div>
        </header>
    );
};

export default Home;