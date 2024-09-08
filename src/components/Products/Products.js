import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import { Autoplay, Grid, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { FaRegHeart, FaHeart, FaStar, FaRegStar } from 'react-icons/fa6';

import styles from './Products.module.scss';
import Navi from '~/components/Navigation';

const cx = classNames.bind(styles);

function Products({ grid, data }) {
    return (
        <Swiper
            className={cx('product-list')}
            modules={[Autoplay, Grid, Navigation]}
            slidesPerView={5}
            spaceBetween={10}
            grid={
                !!grid && {
                    rows: grid,
                    fill: 'row',
                }
            }
            autoplay={{
                delay: 3000,
            }}
            navigation={{
                prevEl: '.prve-sliding',
                nextEl: '.next-sliding',
            }}
        >
            {data.map((product, index) => (
                <SwiperSlide key={index} className={cx('product')}>
                    <Link to="detail" className={cx('product-info')}>
                        <div className={cx('product-image')}>
                            <img
                                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_4.png"
                                alt="phone"
                            />
                        </div>
                        <div className={cx('product-name')}>iPhone 15 Pro 128GB | Chính hãng VN/A</div>
                        <div className={cx('product-price')}>
                            <div className={cx('price-show')}>29.290.000đ</div>
                            <div className={cx('price-through')}>34.990.000đ</div>
                            <div className={cx('price-percent')}>
                                <div className={cx('price-percent-detail')}>Giảm 10%</div>
                            </div>
                        </div>
                        <div className={cx('product-smem-price')}>
                            Smember giảm thêm đến <span>293.000đ</span>
                        </div>
                        <div className={cx('product-promotions')}>
                            <div className={cx('promotions')}>
                                Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                            </div>
                        </div>
                    </Link>
                    <div className={cx('product-bottom')}>
                        <div className={cx('product-rating')}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                        </div>
                        <div className={cx('product-wish')}>
                            <span className={cx('wish-text')}>Yêu thích</span>
                            {true && <FaRegHeart className={cx('wish-icon')} />}
                            {false && <FaHeart className={cx('wish-icon')} />}
                        </div>
                    </div>
                    <div className={cx('install-0-tag')}>Trả góp 0%</div>
                </SwiperSlide>
            ))}
            <Navi />
        </Swiper>
    );
}

export default Products;
