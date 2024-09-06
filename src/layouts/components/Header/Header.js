import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CiViewList } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { RiMapPinLine } from 'react-icons/ri';
import { LiaPhoneSolid, LiaShippingFastSolid } from 'react-icons/lia';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { BsBag } from 'react-icons/bs';
import { FaXmark, FaChevronRight } from 'react-icons/fa6';

import styles from './Header.module.scss';
import images from '~/assets/images';
import config from '~/config';
import Search from './Search';
import Menu from '~/layouts/components/Menu';
import Local from '~/layouts/components/Local';
import { useStore, actions } from '~/store';

const cx = classNames.bind(styles);

function Header() {
    const [state, dispatch] = useStore();

    const handleMenu = () => {
        dispatch(actions.setShowMenu());
    };

    const handleLocal = () => {
        dispatch(actions.setShowLocal());
    };

    const hasUser = localStorage.getItem('user');

    const handleModal = () => {
        if (hasUser) {
            dispatch(actions.setShowNoti());
        } else {
            dispatch(actions.setShowModalLogin());
        }
    };

    return (
        <Fragment>
            <header id={cx('header')}>
                <div className={cx('benner')}>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#030c65D',
                        }}
                        className="container"
                        modules={[Autoplay, Navigation]}
                        autoplay={{
                            delay: 3000,
                        }}
                        slidesPerView={3}
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
                    <Link to={config.routes.home} className={cx('logo')}>
                        <img src={images.logo} alt="logo" />
                    </Link>
                    <button className={cx('button')} onClick={handleMenu}>
                        <CiViewList className={cx('icon')} />
                        <div className={cx('content')}>Danh mục</div>
                    </button>
                    <div className={cx('menu', state.check.menu ? 'active' : '')}>
                        <div className={cx('container')}>
                            <Menu />
                        </div>
                    </div>
                    <button className={cx('button')} onClick={handleLocal}>
                        <RiMapPinLine className={cx('icon')} />
                        <div className={cx('content')}>
                            Xem giá tại <IoIosArrowDown /> <br />
                            <span style={{ fontSize: 14 }}>{state.local.name}</span>
                        </div>
                    </button>
                    <Search />
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
                    <Link
                        to={hasUser ? config.routes.cart : ''}
                        onClick={!hasUser ? handleModal : ''}
                        className={cx('button', 'bg-none')}
                    >
                        <BsBag className={cx('icon')} />
                        <div className={cx('content')}>
                            Giỏ <br /> hàng
                            <span className={cx('itemsInCart')}>0</span>
                        </div>
                    </Link>
                    <button className={cx('button', 'buttonColumn')} onClick={handleModal}>
                        <HiOutlineUserCircle className={cx('icon')} />
                        <div className={cx('content')}>Đăng nhập</div>
                    </button>
                    {!!state.check.noti && (
                        <div className={cx('noti')}>
                            <div className={cx('head')}>
                                <div className={cx('box')}>
                                    <div className={cx('access')}>
                                        <img
                                            src="https://static.cellphones.com.vn/img/smember.ab0728d.svg"
                                            alt="smumber"
                                        />
                                        <span>Truy cập Smember</span>
                                    </div>
                                    <FaChevronRight />
                                </div>
                            </div>
                            <div className={cx('body')}>
                                <div className={cx('title')}>Thông báo</div>
                                <div className={cx('list')}>
                                    <div className={cx('empty')}>
                                        <img src="https://static.cellphones.com.vn/img/empty.e7af47f.svg" alt="empty" />
                                        <div className={cx('textBox')}>
                                            <strong>Ở đây hơi trống trải.</strong>
                                            <span>S-Ant sẽ gửi cho bạn những thông báo mới nhất tại đây nhé!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={cx('foot')} onClick={handleModal}>
                                Đóng
                            </button>
                        </div>
                    )}
                </div>
            </header>
            {!!state.check.menu && <div className="lable" onClick={handleMenu}></div>}
            {!!state.check.local && (
                <Fragment>
                    <Local />
                    <div className="lable" onClick={handleLocal}></div>
                </Fragment>
            )}
            {(!!state.check.search.result || !!state.check.search.suggest) && (
                <div
                    className="lable"
                    onClick={() => {
                        dispatch(actions.setSearchValue(''));
                        dispatch(actions.setSearchResult(false));
                    }}
                ></div>
            )}
            {!!state.check.modalLogin && (
                <Fragment>
                    <div className={cx('modal-login')}>
                        <div className={cx('title')}>
                            Smember
                            <img
                                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:80/q:90/plain/https://cellphones.com.vn/media/wysiwyg/chibi2.png"
                                alt="summer-icon"
                            />
                        </div>
                        <div className={cx('text')}>
                            Vui lòng đăng nhập tài khoản Smember để xem ưu đãi và thanh toán dễ dàng hơn.
                        </div>
                        <div className={cx('group-button')}>
                            <button className={cx('register')}>Đăng ký</button>
                            <button className={cx('login')}>Đăng nhập</button>
                        </div>
                        <button className={cx('close')} onClick={handleModal}>
                            <FaXmark />
                        </button>
                    </div>
                    <div className="lable" onClick={handleModal}></div>
                </Fragment>
            )}
            {!!state.check.noti && <div className="lable" onClick={handleModal}></div>}
        </Fragment>
    );
}

export default Header;
