import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header id={cx('header')}>
            <div className={cx('benner')}>
                <Swiper
                    style={{
                        width: '90%',
                        maxWidth: '1200px',
                    }}
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
            <div className={cx('container')}>
                <div className={cx('logo-box')}>
                    <img src={images.logo} alt="logo" className={cx('logo')}/>
                </div>
            </div>
        </header>
    );
}

export default Header;
