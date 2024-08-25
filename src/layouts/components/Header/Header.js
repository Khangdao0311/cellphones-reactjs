import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header id={cx('header')}>
            <div className={cx('benner')}>
                <Swiper
                    className={cx('container')}
                    modules={[Autoplay, Navigation]}
                    autoplay={{
                        delay: 3000,
                    }}
                    slidesPerView={3}
                    // loop={true}
                    navigation
                >
                    <SwiperSlide>
                        <img
                            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Thu cu.svg"
                            alt="benner"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Giao hang.svg"
                            alt="benner"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Smember.svg"
                            alt="benner"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top banner_Chinh hang.svg"
                            alt="benner"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={cx('header')}>
                <div className={cx('container')}>
                    <h2>Header</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;
