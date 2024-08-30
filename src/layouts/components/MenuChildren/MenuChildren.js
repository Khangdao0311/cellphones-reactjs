import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import classNames from 'classnames/bind';
import styles from './MenuChildren.module.scss';

const cx = classNames.bind(styles);

function MenuChildren({ data }) {
    console.log(data);

    return (
        <Swiper
            className={cx('menu-children')}
            modules={[Autoplay]}
            autoplay={{
                delay: 3000,
            }}
            spaceBetween={5}
            slidesPerView={5}
        >
            {data.map((e, i) => (
                <SwiperSlide key={i} className={cx('item')}>
                    <div className={cx('title')}>{e.title}</div>
                    {e.content.map((c, ic) => (
                        <Link to={c.to} key={ic} className={cx('content')}>
                            <span>{c.name}</span>
                        </Link>
                    ))}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MenuChildren;
