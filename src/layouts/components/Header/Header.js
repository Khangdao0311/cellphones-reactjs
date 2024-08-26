import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import classNames from 'classnames/bind';
import { CiViewList } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { RiMapPinLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import { LiaPhoneSolid, LiaShippingFastSolid, LiaShoppingBagSolid } from 'react-icons/lia';
import { HiOutlineUserCircle, HiXMark } from 'react-icons/hi2';


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
                    <img src={images.logo} alt="logo" className={cx('logo')} />
                </div>
                <button className={cx('button')}>
                    <CiViewList className={cx('icon')} />
                    <div className={cx('content')}>Danh mục</div>
                </button>
                <button className={cx('button')}>
                    <RiMapPinLine className={cx('icon')} />
                    <div className={cx('content')}>
                        <span>
                            Xem giá tại <IoIosArrowDown  />
                        </span>
                        <span>Hồ Chí Minh</span>
                    </div>
                </button>

                <div className={cx('search')}>
                    <button className={cx('button')}>
                        <FaSearch className={cx('icon')} />
                    </button>
                    <input className={cx('input')} type='text' placeholder='Bạn cần tìm gì ?' />
                    <button className={cx('clear')}>
                        <HiXMark className={cx('icon')} />
                    </button>
                </div>

                <button className={cx('button','bg-none')}>
                    <LiaPhoneSolid className={cx('icon')} />
                    <div className={cx('content')}>
                        Gọi mua hàng <br /> 1800.2097
                    </div>
                </button>
                <button className={cx('button','bg-none')}>
                    <RiMapPinLine className={cx('icon')} />
                    <div className={cx('content')}>
                        Cửa hàng <br /> gần bạn
                    </div>
                </button>
                <button className={cx('button','bg-none')}>
                    <LiaShippingFastSolid className={cx('icon')} />
                    <div className={cx('content')}>
                        Tra cứu <br /> đơn hàng
                    </div>
                </button>
                <button className={cx('button','bg-none')}>
                    <LiaShoppingBagSolid className={cx('icon')} />
                    <div className={cx('content')}>
                        Giỏ <br /> hàng
                    </div>
                </button>
                <button className={cx('button', 'buttonColumn')}>
                    <HiOutlineUserCircle className={cx('icon')} />
                    <div className={cx('content')}>Đăng nhập</div>
                </button>
            </div>
        </header>
    );
}

export default Header;
