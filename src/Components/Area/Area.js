import React from 'react';
import './Area.css';


const Area = (props) => {

    const data  = props.data;
    const handleClick = props.handleClick;
    return (
            <div className="p-2">
                <img onClick={() => handleClick(data)} src={data.img} alt=""/>
            </div>
    );
};

export default Area;