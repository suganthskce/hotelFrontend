import React, { Fragment } from 'react';
import iconBank from './../../app/iconBank';
import config from 'config';
import APP from 'app';
const { baseUrl = '' } = APP.Utils.getConfig();
const { serviceProtocol = '' } = config;

const HotelRating = (props) => {
    const {
        hotelRating = ''
    } = props;
    let star = [];
    for (let i = 0; i < Math.trunc(hotelRating); i++) {
        star.push(<span>
            <img src={`${serviceProtocol}:${baseUrl}/hotel/star.png`} width='15' className="fill-star" style={{
                width: '15px',
                marginRight: '2px'
            }} />
        </span>);
    }
    for (let i = 0; i < 5 - hotelRating; i++) {
        star.push(<span>
            <img src={`${serviceProtocol}:${baseUrl}/hotel/starline.png`} width='15' className="withoutfill-star" style={{
                width: '15px',
                marginRight: '2px'
            }} />
        </span>);
    }
    return (
        <Fragment>
            {/* <div className="hotelrating">
                <span className="hotelrating__value">{hotelRating == 0 ? `` : props.hotelRating}</span>
            </div> */}
            {star}
            {/* { <span className="hoteldetails__rightbox--rating--text">{ratingMap[props.hotelRating]}</span> } */}
            {/* <span className="review__value">{hotelReview} Reviews </span> */}
        </Fragment>
    );
}

export default HotelRating;
