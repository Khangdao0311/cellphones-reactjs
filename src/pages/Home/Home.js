import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Menu from '~/components/Menu';
import './Home.scss';
import Products from '~/components/Products';
import Navi from '~/components/Navigation';

const SLIDE = [
    {
        name: 'GALAXY Z FOLD6',
        description: 'Ưu đãi tốt chốt ngay',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/fold-6-km-moi-home-30-8.png',
    },
    {
        name: 'IPHONE 15 PROMAX',
        description: 'Nâng cấp ngay',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/Iphone-15-Durability-sliding.jpg',
    },
    {
        name: 'REDMI 14C',
        description: 'Giá tốt chốt ngay',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/dien-thoai-xiaomi-redmi-14c-home-30-8.jpg',
    },
    {
        name: 'LAPTOP AI',
        description: 'Ưu đãi cực khủng',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/laptop-ai-banner-chung-slide.png',
    },
    {
        name: 'KIESLECT ACTOR',
        description: 'Giá chỉ 1.69 triệu',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/home-actor-05-09-new.jpg',
    },
    {
        name: 'PLAYSTATION 5 SLIM',
        description: 'Giá chỉ 13.3 triệu',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/ps5-home.jpg',
    },
    {
        name: 'LENOVO V14',
        description: 'Giá chỉ 11.99 triệu',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/sliding-v14-lenovo-nghiem-thu-05-09-neww.png',
    },
    {
        name: 'LOA SONY ULT10',
        description: 'Ưu đã tốt chốt ngay',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/loa-song-ult-10-home-5-9-2024.jpg',
    },
];

const CATEGORIES = [
    {
        title: 'PHỤ KIỆN',
        content: [
            {
                name: 'Phụ kiện Apple',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_1_.png")',
                },
            },
            {
                name: 'Cáp, sạc',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_4_.png")',
                },
            },
            {
                name: 'Pin sạc dự phòng',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/i/c/icon-cate-pk_5_.png")',
                },
            },
            {
                name: 'Ốp lưng - Bao da',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_3_.png")',
                },
            },
            {
                name: 'Dán màn hình',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_2_.png")',
                },
            },
            {
                name: 'Thẻ nhớ, USB',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_8_.png")',
                },
            },
            {
                name: 'Gaming Gear, Playstation',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_13_.png")',
                },
            },
            {
                name: 'Sim 4G',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_10_.png")',
                },
            },
            {
                name: 'Thiết bị mạng',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_7_.png")',
                },
            },
            {
                name: 'Camera',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/c/a/cameraa.png")',
                },
            },
            {
                name: 'Gimbal',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_12_.png")',
                },
            },
            {
                name: 'Flycam',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_15_.png")',
                },
            },
            {
                name: 'Máy ảnh',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_19_.png")',
                },
            },
            {
                name: 'Chuột, bàn phím',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_9_.png")',
                },
            },
            {
                name: 'Balo, túi xách',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/i/c/icon-cate-pk_17_.png")',
                },
            },
            {
                name: 'Hub chuyển đổi',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/i/c/icon-cate-pk_11_.png")',
                },
            },
            {
                name: 'Phụ kiện điện thoại',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/suc-khoe-l_m-dep-iconcate_2_.png")',
                },
            },
            {
                name: 'Phụ kiện Laptop',
                style: {
                    'background-color': 'rgb(242, 131, 118)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/c/icon-cate-pk_16_.png")',
                },
            },
        ],
    },
    {
        title: 'LINH KIỆN MÁY TÍNH',
        content: [
            {
                name: 'PC ráp sẵn CellphoneS',
                style: {
                    'background-color': 'rgb(252, 165, 165)',
                    'background-image': 'url(https://cellphones.com.vn/media/icons/category/cate-868.svg)',
                },
            },
            {
                name: 'CPU',
                style: {
                    'background-color': 'rgb(253, 164, 175)',
                    'background-image':
                        'url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/p/cpu_1.png)',
                },
            },
            {
                name: 'Mainboard',
                style: {
                    'background-color': 'rgb(249, 168, 212)',
                    'background-image':
                        'url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/m/a/mainboard_1.png)',
                },
            },
            {
                name: 'RAM',
                style: {
                    'background-color': 'rgb(196, 181, 253)',
                    'background-image':
                        'url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/r/a/ram_2.png)',
                },
            },
            {
                name: 'Ổ cứng',
                style: {
                    'background-color': 'rgb(165, 180, 252)',
                    'background-image':
                        'url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/s/s/ssd_2.png)',
                },
            },
            {
                name: 'Card màn hình',
                style: {
                    'background-color': 'rgb(147, 197, 253)',
                    'background-image':
                        'url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/v/g/vga.png)',
                },
            },
            {
                name: 'Nguồn máy tính',
                style: {
                    'background-color': 'rgb(110, 231, 183)',
                    'background-image':
                        'url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/p/s/psu.png)',
                },
            },
            {
                name: 'Tản nhiệt',
                style: {
                    'background-color': 'rgb(252, 211, 75)',
                    'background-image':
                        'url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/t/_/t_n_nhi_t_2.png)',
                },
            },
            {
                name: 'Case máy tính',
                style: {
                    'background-color': 'rgb(253, 186, 116)',
                    'background-image':
                        'url(https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/case_1.png)',
                },
            },
        ],
    },
    {
        title: 'HÀNG CŨ',
        content: [
            {
                name: 'Điện thoại cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/p/ip-14-hp-cu.png")',
                },
            },
            {
                name: 'Máy tính bảng cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-cate-cu.png")',
                },
            },
            {
                name: 'Mac cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-392.svg")',
                },
            },
            {
                name: 'Laptop cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-878.svg")',
                },
            },
            {
                name: 'Tai nghe cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-tai-nghe_1.png")',
                },
            },
            {
                name: 'Loa cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-loa_1.png")',
                },
            },
            {
                name: 'Đồng hồ thông minh cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-451.svg")',
                },
            },
            {
                name: 'Đồ gia dụng cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-846.svg")',
                },
            },
            {
                name: 'Phụ kiện cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-phu-kien.png")',
                },
            },
            {
                name: 'Màn hình cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/catalog/product/c/a/cate-man-hinh.png")',
                },
            },
            {
                name: 'Tivi cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/tmp/catalog/product/t/i/tivi-cu-new_1334.png")',
                },
            },
            {
                name: 'Cáp sạc cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-114.svg")',
                },
            },
            {
                name: 'Pin dự phòng cũ',
                style: {
                    'background-color': 'rgb(214, 64, 68)',
                    'background-image':
                        'url("https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/icons/category/cate-122.svg")',
                },
            },
        ],
    },
];

const BRAND_BANNER = [
    {
        title: 'Ưu đãi sinh viên',
        content: [
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-full-deal.jpg',
            },
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-samsung.jpg',
            },
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-laptop.jpg',
            },
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-macbook.jpg',
            },
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-macbook.jpg',
            },
        ],
    },
    {
        title: 'Ưu đãi thanh toán',
        content: [
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/uu-dai-gop-momo-t8-2024.jpg',
            },
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/uu-dai-doi-tac-home.png',
            },
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/uu-dai-thanh-toan-hsbc-0803-2024.jpg',
            },
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/uu-dai-sacom-t8-2024.png',
            },
        ],
    },
    {
        title: 'Chuyên trang thương hiệu',
        content: [
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/apple-chinh-hang-home.jpg',
            },
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/SIS asus.png',
            },
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/gian-hang-samsung-home.png',
            },
            {
                image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/xiaomi.png',
            },
        ],
    },
];

const SFORUM_HOMEPAGE = [
    {
        name: 'Hotsale cuối tuần: Toàn gia dụng "ngon - bổ - rẻ", có cả robot hút bụi, lau nhà với khuyến mãi 50%',
        image: 'https://cdn-media.sforum.vn/storage/app/media/chidung/hotsale/hotsale-cuoi-tuan-nganh-hang-gia-dung-cover.jpg',
    },
    {
        name: 'Điện thoại không phím bấm của Xiaomi bất ngờ lộ diện, trang bị sạc nhanh 200W',
        image: 'https://cdn-media.sforum.vn/storage/app/media/ducminh/nguyen-mau-dien-thoai-khong-phim-bam-xiaomi-t9-1.jpg',
    },
    {
        name: 'OPPO Find X8 series được xác nhận sẽ trang bị pin silicon-carbon dung lượng lớn',
        image: 'https://cdn-media.sforum.vn/storage/app/media/ducminh/oppo-find-x8-silicon-cacbon-t9-1.jpg',
    },
    {
        name: 'Bàn phím Galaxy Tab S10 sẽ có phím Galaxy AI chuyên dụng mới',
        image: 'https://cdn-media.sforum.vn/storage/app/media/trannghia/Samsung-AI-Key-cover.jpg',
    },
];

function Home() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Fragment>
            <section className="slider">
                <Menu />
                <div className="slide">
                    <Swiper
                        className="sliding"
                        slidesPerView={1}
                        modules={[Autoplay, Thumbs, Navigation]}
                        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                        autoplay={{ delay: 3000 }}
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
                        <Navi />
                    </Swiper>
                    <Swiper
                        className="pagination"
                        onSwiper={setThumbsSwiper}
                        slidesPerView={5}
                        watchSlidesProgress={true}
                        modules={[Thumbs]}
                    >
                        {SLIDE.map((e, i) => (
                            <SwiperSlide key={i} className="pagination-item">
                                {e.name}
                                <br />
                                {e.description}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="benner">
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
                <div className="banner-horizontal">
                    <img
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06 (1).gif"
                        alt="horizontal-banner"
                    />
                </div>
            </section>
            <section className="product-container hotSale ">
                <div className="product-title">
                    <div className="title-image">
                        <img
                            src="https://cdn2.cellphones.com.vn/x/media/catalog/product/h/o/hot-sale-cuoi-tuan-20-03-2024.gif"
                            alt="hot-sale-cuoi-tuan"
                        />
                    </div>
                    <div className="tab-menu">
                        <div className="tab-item active">Điện thoại, Tablet</div>
                        <div className="tab-item">Phụ kiện, TV</div>
                    </div>
                    <div className="countdown">
                        <span>Kết thúc sau:</span>
                        <div className="time-box">
                            <div className="time">00</div>
                            <div className="separate">:</div>
                            <div className="time">00</div>
                            <div className="separate">:</div>
                            <div className="time">00</div>
                            <div className="separate">:</div>
                            <div className="time">00</div>
                        </div>
                    </div>
                </div>
                <Products data={[...new Array(10)]} />
            </section>
            <section className="product-container">
                <div className="product-title">
                    <div className="title">ĐIỆN THOẠI NỔI BẬT NHẤT</div>
                    <div className="list-related-tag">
                        <div className="related-tag">Apple</div>
                        <div className="related-tag">Samsung</div>
                        <div className="related-tag">Xiaomi</div>
                        <div className="related-tag">OPPO</div>
                        <div className="related-tag">vivo</div>
                        <div className="related-tag">realme</div>
                        <div className="related-tag">ASUS</div>
                        <div className="related-tag">TECNO</div>
                        <div className="related-tag">Nokia</div>
                        <div className="related-tag">Infinix</div>
                        <div className="related-tag">Oneplus</div>
                        <div className="related-tag">Xem tất cả</div>
                    </div>
                </div>
                <Products grid={2} data={[...new Array(20)]} />
            </section>
            {CATEGORIES.map((category) => (
                <section key={category.title} className="category-container">
                    <div className="category-title">
                        <Link className="title">{category.title}</Link> <Link className="show-more">Xem tất cả</Link>
                    </div>
                    <div className="category-content">
                        {category.content.map((item) => (
                            <Link className="category-item" key={item.name} style={item.style}>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            ))}
            {BRAND_BANNER.map((brand) => (
                <section key={brand.title} className="brand-banner">
                    <div className="brand_banner-title">
                        <Link>{brand.title}</Link>
                    </div>
                    <Swiper
                        className="brand_banner-content"
                        slidesPerView={4}
                        spaceBetween={10}
                        modules={[Autoplay, Navigation]}
                        autoplay={{ delay: 3000 }}
                        navigation={
                            brand.content.length > 4 && {
                                prevEl: '.prve-sliding',
                                nextEl: '.next-sliding',
                            }
                        }
                    >
                        {brand.content.map((e, i) => (
                            <SwiperSlide key={i}>
                                <Link className="brand_banner-itme">
                                    <img src={e.image} alt="brand-benner" />
                                </Link>
                            </SwiperSlide>
                        ))}
                        {brand.content.length > 4 && <Navi />}
                    </Swiper>
                </section>
            ))}
            <section className="sforum-homepage">
                <div className="sforum_homepage-title">
                    <Link>TIN CÔNG NGHỆ</Link> <Link className="show-more">Xem tất cả</Link>
                </div>
                <div className="sforum_homepage-content">
                    {SFORUM_HOMEPAGE.map((e) => (
                        <Link key={e.name} className="sforum_homepage-item">
                            <img src={e.image} alt="sforum_homepage" />
                            <p>{e.name}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

export default Home;
