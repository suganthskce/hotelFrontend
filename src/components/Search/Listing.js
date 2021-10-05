import React, { useState, useEffect, Fragment } from 'react';
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from 'react-window';
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Image from './../Global/Image';

const listing = (props) => {

    const { hotelList = [], fetching = false, } = props;
    const [open, setOpen] = useState(false),
        [hotelData, setHotelData] = useState({}),
        isMobile = 768 > document.documentElement.clientWidth,
        handeleOnClick = (e, hotel) => {
            setHotelData(hotel);
            setOpen(true);
        },
        closeModal = () => {
            setOpen(false);
        },
        Row = ({ data, index, style }) => {
            const { name = '', rt = '', img = [], ad = {}, id = '', pops = [], } = hotelList[index],
                { adr = '', city = {}, country = {}, state = {}, postalCode = '' } = ad,
                { name: cityName = '' } = city,
                { name: countryName = '' } = country,
                { name: stateName = '' } = state,
                [{ url = '', tns = '' } = {}] = img,
                [firstOption = {}] = pops,
                { tpc = 0 } = firstOption;
            const _style = { ...style, height: style.height - 20 }
            return (
                <div className="hotel__container" data-id={id} key={`${id}__item-${index}`} style={_style} >
                    <div className="searchlist__container--image">
                        <Image {...{
                            id: id,
                            url: tns ? tns : url,
                            imageName: '',
                            className: 'hotel__img',
                            alt: '',
                            height: 130,
                            width: 200,
                        }} />
                    </div>
                    <div className="searchlist__container--detail">
                        <div className="hoteldetails">
                            <p data-id={id} className="hotelname" style={{ color: '#333', float: 'left', margin: '0', fontWeight: "bold" }}>{name}</p>
                            <p className="hoteladd" style={{ color: '#999', clear: 'both', marginBottom: '0' }}>{adr.substring(0, 30)}
                                {cityName ? `, ${cityName}` : ''}
                                {(stateName && stateName != cityName) ? `, ${stateName}` : ''}
                                {countryName ? `, ${countryName}` : ''}
                                {postalCode && !adr.includes(postalCode) ? `, ${postalCode}` : ''}
                            </p>
                            <p style={{ color: '#999', clear: 'both', marginBottom: '0' }}>
                                {`${rt} Ratings`}
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </p>
                            <p>&#8377;. {`${Math.ceil(tpc)}`}</p>
                        </div>
                        <div className="book">
                            <button
                                data-id={id}
                                type={'submit'}
                                onClick={(e) => { handeleOnClick(e, hotelList[index]) }}
                                className={'bookbtn'}
                            >
                                {'Book'}
                            </button>
                        </div>
                    </div>
                </div >
            )
        };
    const { name = '' } = hotelData;
    return (
        <div className="listing__container">
            <React.Suspense fallback={<Fragment> Loading </Fragment>}>
                {fetching && hotelList.length === 0 ? <Fragment> Loading </Fragment> :
                    !fetching && hotelList.length === 0 ? <Fragment> No Data Found </Fragment> :
                        <Fragment>
                            <AutoSizer>
                                {
                                    ({ height, width }) => (
                                        <List
                                            useIsScrolling
                                            className="List"
                                            overscanCount={7}
                                            height={height}
                                            itemCount={hotelList.length}
                                            itemSize={isMobile == true ? 200 : 165}
                                            width={width}>
                                            {Row}
                                        </List>
                                    )
                                }
                            </AutoSizer>
                        </Fragment>
                }
            </React.Suspense>
            <Modal
                open={open}
                onClose={closeModal}
                center
                classNames={{
                    modal: 'promtbox__wrapper'
                }}>
                <div>
                    <p>Hotel Selected : {name}</p>
                </div>
            </Modal>
        </div>
    );
};

export default listing;