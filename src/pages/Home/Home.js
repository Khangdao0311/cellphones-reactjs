import { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import Menu from '~/layouts/components/Menu';
import './Home.scss';

const SLIDE = [
    {
        name: 'GALAXY Z FOLD6 Ưu đãi tốt chốt ngay',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/fold-6-km-moi-home-30-8.png',
    },
    {
        name: 'IPHONE 15 PROMAX Nâng cấp ngay',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/Iphone-15-Durability-sliding.jpg',
    },
    {
        name: 'REDMI 14C  Giá tốt chốt ngay',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/dien-thoai-xiaomi-redmi-14c-home-30-8.jpg',
    },
    {
        name: 'LAPTOP AI Ưu đãi cực khủng',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/laptop-ai-banner-chung-slide.png',
    },
    {
        name: 'KIESLECT ACTOR Giá chỉ 1.69 triệu',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/home-actor-05-09-new.jpg',
    },
    {
        name: 'PLAYSTATION 5 SLIM Giá chỉ 13.3 triệu',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/ps5-home.jpg',
    },
    {
        name: 'LENOVO V14 Giá chỉ 11.99 triệu',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/sliding-v14-lenovo-nghiem-thu-05-09-neww.png',
    },
    {
        name: 'LOA SONY ULT10 Ưu đã tốt chốt ngay',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/loa-song-ult-10-home-5-9-2024.jpg',
    },
];

function Home() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Fragment>
            <section className="slider-container">
                <div className="slider">
                    <Menu />
                    <div className="slide">
                        <Swiper
                            className="sliding"
                            slidesPerView={1}
                            modules={[Autoplay, Thumbs, Navigation]}
                            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                            autoplay={{ delay: 3000 }}
                            // navigation={true}
                            navigation={{
                                prevEl: '.prve-sliding',
                                nextEl: '.next-sliding',
                            }}
                        >
                            {SLIDE.map((e, i) => (
                                <SwiperSlide key={i}>
                                    <img src={e.image} alt="slide" />
                                </SwiperSlide>
                            ))}
                            <button className="prve-sliding">
                                <FaAngleLeft />
                            </button>
                            <button className="next-sliding">
                                <FaAngleRight />
                            </button>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            slidesPerView={5}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[Thumbs]}
                            className="pagination"
                        >
                            {SLIDE.map((e, i) => (
                                <SwiperSlide key={i} className="pagination-item">
                                    {e.name}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="right-benner">
                        <div className="benner-item">
                            <img
                                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/m55-gia-moi-right-banner-30-8-2024.png"
                                alt="benner"
                            />
                        </div>
                        <div className="benner-item">
                            <img
                                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/right-banner-macbook-cto-09-08-new-new.jpg"
                                alt="benner"
                            />
                        </div>
                        <div className="benner-item">
                            <img
                                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-right-banner-laptop.jpg"
                                alt="benner"
                            />
                        </div>
                    </div>
                </div>
                <div className="horizontal-banner">
                    <img
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06 (1).gif"
                        alt="horizontal-banner"
                    />
                </div>
            </section>
        </Fragment>
    );
}

export default Home;
