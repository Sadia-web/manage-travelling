import React, {useState} from 'react';
import './HotelList.css';
import rating from '../../images/star-rating.png';
import fakeHotelData from '../fakeHotelData/fakeHotelData';

const HotelList = () => {
    const hotelDetail = fakeHotelData.slice(0,4);
    const [hotels, setHotels] = useState(hotelDetail);
    return (
        <div>
             <h1 className="text-center">Details of Available Hotels</h1>
            {
                hotels.map(
                    hotel =>

                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={hotel.img} class="card-img" alt="" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{hotel.name}</h5>
                                        <p class="card-text">Price Per Day: ${hotel.price}</p>
                                        <p class="card-text">User Review: {hotel.review}<img src={rating} alt="" width="17px"/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
            
        </div>
    );
};

export default HotelList;