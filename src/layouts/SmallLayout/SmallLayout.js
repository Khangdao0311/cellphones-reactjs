import { Fragment } from 'react';
import classNames from 'classnames/bind';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './SmallLayout.module.scss';

const cx = classNames.bind(styles);

function SmallLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <main>
                <div className={cx('container')}>{children}</div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default SmallLayout;
