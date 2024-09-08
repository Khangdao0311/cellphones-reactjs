import { Fragment } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import './Navigation.scss';

function Navi() {
    return (
        <Fragment>
            <button className="prve-sliding">
                <FaAngleLeft />
            </button>
            <button className="next-sliding">
                <FaAngleRight />
            </button>
        </Fragment>
    );
}

export default Navi;
