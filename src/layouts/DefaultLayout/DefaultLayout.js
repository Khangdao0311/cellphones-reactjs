import { Fragment } from 'react';
import classNames from 'classnames/bind';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <main>
                <div className={cx('container') + ' container'}>{children}</div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default DefaultLayout;
