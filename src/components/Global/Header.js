import React, { Fragment } from 'react';
import Image from './Image';

const Header = (props) => {
    return (
        <div className="header__container">
            <Image {...{
                id: 'heaserImage',
                url: 'https://fastui.cltpstatic.com/image/upload/hotels/places/hotels/3908/3908484/images/3da71792257411ea8bd90242ac110005_tn.jpg',
                imageName: '',
                className: 'hotel__img',
                alt: '',
                height: 60,
                width: 100,
            }} />
            <div className="userdata">
                <p>Hi User</p>
            </div>
        </div>
    );
}

export default Header;