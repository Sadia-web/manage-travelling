import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';

const Booking = () => {
    const id = Number(useParams().id);
    const data = fakeData.find(place => place.id === id);


    const history = useHistory()
    const handleSearch = (hotelList) => {
        history.push('/hotelList');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                </div>

                <div class="col-md-6">
                    <form>
                        <div class="form-group col-md-6">
                            <label>From</label>
                            <input type="text" class="form-control" placeholder="Your Current City" />
                        </div>
                        <div class="form-group col-md-6">
                            <label>To</label>
                            <input type="text" class="form-control" Placeholder="Your Destination" />
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label>From</label>
                                <input type="date" class="form-control" id="" />
                            </div>
                            <div class="form-group col-md-4">
                                <label>To</label>
                                <input type="date" class="form-control" id="" />
                            </div>

                        </div>
                        <button onClick={() => handleSearch()} type="submit" class="btn btn-warning">Start Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;