import React, { Fragment, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
// import Tippy from '@tippyjs/react';
// import HeadlessTippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CiViewList } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { RiMapPinLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { LiaPhoneSolid, LiaShippingFastSolid } from 'react-icons/lia';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { BsBag } from 'react-icons/bs';

import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import config from '~/config';
import Menu from '~/layouts/components/Menu';

const cx = classNames.bind(styles);

function Header() {
    const [check, setCheck] = useState('');

    const handleMenu = useCallback(() => {
        !check ? setCheck('active') : setCheck('');
    }, [check]);

    return (
        <Fragment>
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
                <div className={cx('nav-container')}>
                    <Link to={config.routes.home} className={cx('logo-box')}>
                        <img src={images.logo} alt="logo" className={cx('logo')} />
                    </Link>
                    <button className={cx('button')} onClick={handleMenu}>
                        <CiViewList className={cx('icon')} />
                        <div className={cx('content')}>Danh mục</div>
                    </button>

                    <div className={cx('menu', check)}>
                        <div className={cx('container')}>
                            <Menu />
                        </div>
                    </div>

                    <button className={cx('button')}>
                        <RiMapPinLine className={cx('icon')} />
                        <div className={cx('content')}>
                            Xem giá tại <IoIosArrowDown /> <br />
                            <span style={{ fontSize: 14 }}>Hồ Chí Minh</span>
                        </div>
                    </button>
                    <div className={cx('search')}>
                        <button className={cx('button')}>
                            <FaSearch className={cx('icon')} />
                        </button>
                        <input className={cx('input')} type="text" placeholder="Bạn cần tìm gì ?" />
                        <button className={cx('clear')}>
                            <FaXmark className={cx('icon')} />
                        </button>
                    </div>
                    <button className={cx('button', 'bg-none')}>
                        <LiaPhoneSolid className={cx('icon')} />
                        <div className={cx('content')}>
                            Gọi mua hàng <br /> 1800.2097
                        </div>
                    </button>
                    <button className={cx('button', 'bg-none')}>
                        <RiMapPinLine className={cx('icon')} />
                        <div className={cx('content')}>
                            Cửa hàng <br /> gần bạn
                        </div>
                    </button>
                    <button className={cx('button', 'bg-none')}>
                        <LiaShippingFastSolid className={cx('icon')} />
                        <div className={cx('content')}>
                            Tra cứu <br /> đơn hàng
                        </div>
                    </button>
                    <Link to={config.routes.cart} className={cx('button', 'bg-none')}>
                        <BsBag className={cx('icon')} />
                        <div className={cx('content')}>
                            Giỏ <br /> hàng
                            <span className={cx('itemsInCart')}>0</span>
                        </div>
                    </Link>
                    <button className={cx('button', 'buttonColumn')}>
                        <HiOutlineUserCircle className={cx('icon')} />
                        <div className={cx('content')}>Đăng nhập</div>
                    </button>
                </div>
            </header>
            {!!check && <div className={cx('lable')} onClick={handleMenu}></div>}
        </Fragment>
    );
}

export default Header;
