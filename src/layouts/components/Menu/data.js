import { IoPhonePortraitOutline, IoMegaphoneOutline } from 'react-icons/io5';
import { RxLaptop } from 'react-icons/rx';
import { HiOutlineTv } from 'react-icons/hi2';
import { BsHouseHeartFill, BsPhoneFlip } from 'react-icons/bs';
import { TbDeviceAirpods } from 'react-icons/tb';
import { CgAppleWatch } from 'react-icons/cg';
import { GiPc, GiNewspaper } from 'react-icons/gi';

import config from '~/config';

export const MENU_CATEGORY = [
    {
        icon: IoPhonePortraitOutline,
        categories: [
            {
                title: 'Điện Thoại',
                to: config.routes.dienThoai,
            },
            {
                title: 'Tablet',
                to: config.routes.tablet,
            },
        ],
        children: [
            {
                title: 'Hãng điện thoại',
                content: [
                    {
                        name: 'iPhone',
                        to: '',
                    },
                    {
                        name: 'Samsung',
                        to: '',
                    },
                    {
                        name: 'Xiaomi',
                        to: '',
                    },
                    {
                        name: 'OPPO',
                        to: '',
                    },
                    {
                        name: 'realme',
                        to: '',
                    },
                    {
                        name: 'vivo',
                        to: '',
                    },
                    {
                        name: 'TECNO',
                        to: '',
                    },
                    {
                        name: 'Infinic',
                        to: '',
                    },
                    {
                        name: 'Nokia',
                        to: '',
                    },
                    {
                        name: 'Nubia',
                        to: '',
                    },
                    {
                        name: 'OnePlus',
                        to: '',
                    },
                    {
                        name: 'Masstel',
                        to: '',
                    },
                ],
            },
            {
                title: 'Mức giá điện thoại',
                content: [
                    {
                        name: 'Dưới 2 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 2 - 4 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 4 - 7 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 7 - 13 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 13 - 20 triệu',
                        to: '',
                    },
                    {
                        name: 'Trên 20 triệu',
                        to: '',
                    },
                ],
            },
            {
                title: 'Mức giá điện thoại',
                content: [
                    {
                        name: 'Dưới 2 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 2 - 4 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 4 - 7 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 7 - 13 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 13 - 20 triệu',
                        to: '',
                    },
                    {
                        name: 'Trên 20 triệu',
                        to: '',
                    },
                ],
            },
            {
                title: 'Điện thoại HOT',
                content: [
                    {
                        name: 'iPhone 15 Pro Max',
                        to: '',
                    },
                    {
                        name: 'Galaxy Z Fold6',
                        to: '',
                    },
                    {
                        name: 'Galaxy Z Flip6',
                        to: '',
                    },
                ],
            },
            {
                title: 'Hãng máy tính bảng',
                content: [
                    {
                        name: 'iPad',
                        to: '',
                    },
                    {
                        name: 'Samsung',
                        to: '',
                    },
                    {
                        name: 'Xiaomi',
                        to: '',
                    },
                    {
                        name: 'Huawei',
                        to: '',
                    },
                    {
                        name: 'Lenovo',
                        to: '',
                    },
                    {
                        name: 'Nokia',
                        to: '',
                    },
                    {
                        name: 'Teclast',
                        to: '',
                    },
                    {
                        name: 'Máy đọc sách',
                        to: '',
                    },
                    {
                        name: 'Kindle',
                        to: '',
                    },
                    {
                        name: 'Boox',
                        to: '',
                    },
                    {
                        name: 'Xem thêm tất cả Tablet',
                        to: '',
                    },
                ],
            },
            {
                title: 'Máy tính bảng HOT',
                content: [
                    {
                        name: 'iPad Air 2024',
                        to: '',
                    },
                    {
                        name: 'iPad Pro 2024',
                        to: '',
                    },
                    {
                        name: 'Galaxy Tab S9 FE 5G',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: RxLaptop,
        categories: [
            {
                title: 'Laptop',
                to: config.routes.laptop,
            },
        ],
        children: [
            {
                title: 'Thương hiệu',
                content: [
                    {
                        name: 'Mac',
                        to: '',
                    },
                    {
                        name: 'ASUS',
                        to: '',
                    },
                    {
                        name: 'Lenovo',
                        to: '',
                    },
                    {
                        name: 'Dell',
                        to: '',
                    },
                    {
                        name: 'HP',
                        to: '',
                    },
                    {
                        name: 'Acer',
                        to: '',
                    },
                    {
                        name: 'LG',
                        to: '',
                    },
                    {
                        name: 'Huawei',
                        to: '',
                    },
                    {
                        name: 'MSI',
                        to: '',
                    },
                    {
                        name: 'Gigabyte',
                        to: '',
                    },
                    {
                        name: 'Vaio',
                        to: '',
                    },
                    {
                        name: 'Microsoft Surface',
                        to: '',
                    },
                ],
            },
            {
                title: 'Phân khúc giá',
                content: [
                    {
                        name: 'Dưới 10 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 10 - 15 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 15 - 20 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 20 - 25 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 25 - 30 triệu',
                        to: '',
                    },
                ],
            },
            {
                title: 'Nhu cầu sử dụng',
                content: [
                    {
                        name: 'Văn phòng',
                        to: '',
                    },
                    {
                        name: 'Gaming',
                        to: '',
                    },
                    {
                        name: 'Mỏng nhẹ',
                        to: '',
                    },
                    {
                        name: 'Đồ họa - kỹ thuật',
                        to: '',
                    },
                    {
                        name: 'Sinh viên',
                        to: '',
                    },
                    {
                        name: 'Cảm ứng',
                        to: '',
                    },
                    {
                        name: 'Laptop AI',
                        to: '',
                    },
                    {
                        name: 'Mac CTO - Nâng cấp theo cách của bạn',
                        to: '',
                    },
                ],
            },
            {
                title: 'Dòng chip',
                content: [
                    {
                        name: 'Laptop Core i3',
                        to: '',
                    },
                    {
                        name: 'Laptop Core i5',
                        to: '',
                    },
                    {
                        name: 'Laptop Core i7',
                        to: '',
                    },
                    {
                        name: 'Laptop Core i9',
                        to: '',
                    },
                    {
                        name: 'Apple M1 Series',
                        to: '',
                    },
                    {
                        name: 'Apple M2 Series',
                        to: '',
                    },
                    {
                        name: 'Apple M3 Series',
                        to: '',
                    },
                    {
                        name: 'AMD Ryzen',
                        to: '',
                    },
                    {
                        name: 'Intel Core Ultra',
                        to: '',
                    },
                ],
            },
            {
                title: 'Kích thước màn hình',
                content: [
                    {
                        name: 'Laptop 12 inch',
                        to: '',
                    },
                    {
                        name: 'Laptop 13 inch',
                        to: '',
                    },
                    {
                        name: 'Laptop 14 inch',
                        to: '',
                    },
                    {
                        name: 'Laptop 15.6 inch',
                        to: '',
                    },
                    {
                        name: 'Laptop 16 inch',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: TbDeviceAirpods,
        categories: [
            {
                title: 'Âm thanh',
                to: config.routes.amThanh,
            },
        ],
        children: [
            {
                title: 'Chọn loại tai nghe',
                content: [
                    {
                        name: 'Bluetooth',
                        to: '',
                    },
                    {
                        name: 'Chụp tai',
                        to: '',
                    },
                    {
                        name: 'Nhép tai',
                        to: '',
                    },
                    {
                        name: 'Có dây',
                        to: '',
                    },
                    {
                        name: 'Thể thao',
                        to: '',
                    },
                    {
                        name: 'Gaming',
                        to: '',
                    },
                    {
                        name: 'Xem tất cả tai nghe',
                        to: '',
                    },
                ],
            },
            {
                title: 'Hãng tai nghe',
                content: [
                    {
                        name: 'Apple',
                        to: '',
                    },
                    {
                        name: 'JBL',
                        to: '',
                    },
                    {
                        name: 'Marshall',
                        to: '',
                    },
                    {
                        name: 'Sony',
                        to: '',
                    },
                    {
                        name: 'Soundpeats',
                        to: '',
                    },
                    {
                        name: 'Xiaomi',
                        to: '',
                    },
                    {
                        name: 'Samsung',
                        to: '',
                    },
                    {
                        name: 'Sennheiser',
                        to: '',
                    },
                    {
                        name: 'Beats',
                        to: '',
                    },
                    {
                        name: 'ASUS',
                        to: '',
                    },
                    {
                        name: 'Soul',
                        to: '',
                    },
                    {
                        name: 'Havit',
                        to: '',
                    },
                    {
                        name: 'Edifier',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn theo giá',
                content: [
                    {
                        name: 'Tai nghe dưới 200K',
                        to: '',
                    },
                    {
                        name: 'Tai nghe dưới 500K',
                        to: '',
                    },
                    {
                        name: 'Tai nghe dưới 1 triệu',
                        to: '',
                    },
                    {
                        name: 'Tai nghe dưới 2 triệu',
                        to: '',
                    },
                    {
                        name: 'Tai nghe dưới 5 triệu',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn loại loa',
                content: [
                    {
                        name: 'Loa Bluetooth',
                        to: '',
                    },
                    {
                        name: 'Loa mini',
                        to: '',
                    },
                    {
                        name: 'Loa Karaoke',
                        to: '',
                    },
                    {
                        name: 'Loa Soundbar',
                        to: '',
                    },
                    {
                        name: 'Loa vi tính',
                        to: '',
                    },
                    {
                        name: 'Xem tất cả loa',
                        to: '',
                    },
                ],
            },
            {
                title: 'Hãng loa',
                content: [
                    {
                        name: 'JBL',
                        to: '',
                    },
                    {
                        name: 'LG',
                        to: '',
                    },
                    {
                        name: 'Sony',
                        to: '',
                    },
                    {
                        name: 'Marshall',
                        to: '',
                    },
                    {
                        name: 'Harman Kardon',
                        to: '',
                    },
                    {
                        name: 'Thonsmart',
                        to: '',
                    },
                    {
                        name: 'Samsung',
                        to: '',
                    },
                    {
                        name: 'Edifier',
                        to: '',
                    },
                    {
                        name: 'Nowgo',
                        to: '',
                    },
                    {
                        name: 'Nanomax',
                        to: '',
                    },
                ],
            },
            {
                title: 'Sản phẩm nổi bật',
                content: [
                    {
                        name: 'AirPods Pro 2',
                        to: '',
                    },
                    {
                        name: 'AirPods 2',
                        to: '',
                    },
                    {
                        name: 'Galaxy Buds 3',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: CgAppleWatch,
        categories: [
            {
                title: 'Đồng hồ',
                to: config.routes.dongHo,
            },
            {
                title: 'Camera',
                to: config.routes.camera,
            },
        ],
        children: [
            {
                title: 'Loại đồng hồ',
                content: [
                    {
                        name: 'Đồng hồ thông minh',
                        to: '',
                    },
                    {
                        name: 'Vòng đeo tay thông minh',
                        to: '',
                    },
                    {
                        name: 'Đồng hồ định vị trẻ em',
                        to: '',
                    },
                    {
                        name: 'Dây đeo',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn theo thương hiệu',
                content: [
                    {
                        name: 'Apple Watch',
                        to: '',
                    },
                    {
                        name: 'Samsung',
                        to: '',
                    },
                    {
                        name: 'Xiaomi',
                        to: '',
                    },
                    {
                        name: 'Huawei',
                        to: '',
                    },
                    {
                        name: 'Coros',
                        to: '',
                    },
                    {
                        name: 'Garmin',
                        to: '',
                    },
                    {
                        name: 'Kieslect',
                        to: '',
                    },
                    {
                        name: 'Amazfit',
                        to: '',
                    },
                    {
                        name: 'Black Shark',
                        to: '',
                    },
                    {
                        name: 'Mibro',
                        to: '',
                    },
                    {
                        name: 'Masstel',
                        to: '',
                    },
                    {
                        name: 'Haylou',
                        to: '',
                    },
                    {
                        name: 'Kospet',
                        to: '',
                    },
                ],
            },
            {
                title: 'Sản phẩm nổi bật',
                content: [
                    {
                        name: 'Apple Watch Series 9',
                        to: '',
                    },
                    {
                        name: 'Samsung Galaxy Watch 7',
                        to: '',
                    },
                    {
                        name: 'Samsung Galaxy Watch Ultra',
                        to: '',
                    },
                ],
            },
            {
                title: 'Camera',
                content: [
                    {
                        name: 'Camera an ninh',
                        to: '',
                    },
                    {
                        name: 'Camera hành trình',
                        to: '',
                    },
                    {
                        name: 'Action camera',
                        to: '',
                    },
                    {
                        name: 'Gimbal',
                        to: '',
                    },
                    {
                        name: 'Tripod',
                        to: '',
                    },
                    {
                        name: 'Máy ảnh',
                        to: '',
                    },
                    {
                        name: 'Flycam',
                        to: '',
                    },
                    {
                        name: 'Xem tất cả camera',
                        to: '',
                    },
                ],
            },
            {
                title: 'Camera nổi bật',
                content: [
                    {
                        name: 'Camera an ninh Imou',
                        to: '',
                    },
                    {
                        name: 'Camera an ninh Ezviz',
                        to: '',
                    },
                    {
                        name: 'Camera an ninh Xiaomi',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: BsHouseHeartFill,
        categories: [
            {
                title: 'Đồ gia dụng',
                to: config.routes.doGiaDung,
            },
        ],
        children: [
            {
                title: 'Gia dụng nhà bếp',
                content: [
                    {
                        name: 'Nồi chiên không dầu',
                        to: '',
                    },
                    {
                        name: 'Máy rửa bát',
                        to: '',
                    },
                    {
                        name: 'Lò vi sóng',
                        to: '',
                    },
                    {
                        name: 'Nồi cơm điện',
                        to: '',
                    },
                    {
                        name: 'Máy xay sinh tố',
                        to: '',
                    },
                    {
                        name: 'Máy ép trái cây',
                        to: '',
                    },
                    {
                        name: 'Máy làm sữa hạt',
                        to: '',
                    },
                    {
                        name: 'Bếp điện',
                        to: '',
                    },
                    {
                        name: 'Ấm siêu tốc',
                        to: '',
                    },
                    {
                        name: 'Nồi áp suất',
                        to: '',
                    },
                    {
                        name: 'Nồi nấu chậm',
                        to: '',
                    },
                    {
                        name: 'Máy ép chậm',
                        to: '',
                    },
                ],
            },
            {
                title: 'Sức khỏe - Làm đẹp',
                content: [
                    {
                        name: 'Máy lọc không khí',
                        to: '',
                    },
                    {
                        name: 'Máy đo huyết áp',
                        to: '',
                    },
                    {
                        name: 'Máy sấy tóc',
                        to: '',
                    },
                    {
                        name: 'Máy massage',
                        to: '',
                    },
                    {
                        name: 'Máy cạo râu',
                        to: '',
                    },
                    {
                        name: 'Cân sức khoẻ',
                        to: '',
                    },
                    {
                        name: 'Bàn chải điện',
                        to: '',
                    },
                    {
                        name: 'Máy tăm nước',
                        to: '',
                    },
                    {
                        name: 'Tông đơ cắt tóc',
                        to: '',
                    },
                ],
            },
            {
                title: 'Thiết bị gia đình',
                content: [
                    {
                        name: 'Robot hút bụi',
                        to: '',
                    },
                    {
                        name: 'Quạt',
                        to: '',
                    },
                    {
                        name: 'Máy hút bụi cầm tay',
                        to: '',
                    },
                    {
                        name: 'Máy rửa chén',
                        to: '',
                    },
                    {
                        name: 'TV Box',
                        to: '',
                    },
                    {
                        name: 'Máy chiếu',
                        to: '',
                    },
                    {
                        name: 'Đèn thông minh',
                        to: '',
                    },
                    {
                        name: 'Bàn ủi',
                        to: '',
                    },
                    {
                        name: 'Chăm sóc thú cưng',
                        to: '',
                    },
                ],
            },
            {
                title: 'Sản phẩm nổi bật',
                content: [
                    {
                        name: 'Robot hút bụi Dreame X40 Ultra',
                        to: '',
                    },
                    {
                        name: 'Máy chơi game Sony PlayStation 5',
                        to: '',
                    },
                    {
                        name: 'Máy chiếu Beecube X2 Max Gen 3',
                        to: '',
                    },
                    {
                        name: 'Robot hút bụi Ecovacs X5 Pro Omni',
                        to: '',
                    },
                    {
                        name: 'Máy Massage cổ Breo N5 Mini',
                        to: '',
                    },
                    {
                        name: 'Robot hút bụi Xiaomi S20',
                        to: '',
                    },
                    {
                        name: 'Máy lọc không khí Xiaomi',
                        to: '',
                    },
                    {
                        name: 'Robot hút bụi Ecovacs',
                        to: '',
                    },
                ],
            },
            {
                title: 'Thương hiệu gia dụng',
                content: [
                    {
                        name: 'Philips',
                        to: '',
                    },
                    {
                        name: 'Kangaroo',
                        to: '',
                    },
                    {
                        name: 'Panasonic',
                        to: '',
                    },
                    {
                        name: 'Sunhouse',
                        to: '',
                    },
                    {
                        name: 'Sharp',
                        to: '',
                    },
                    {
                        name: 'Cosori',
                        to: '',
                    },
                    {
                        name: 'Bear',
                        to: '',
                    },
                    {
                        name: 'Bluestone',
                        to: '',
                    },
                    {
                        name: 'Dreame',
                        to: '',
                    },
                    {
                        name: 'Kalite',
                        to: '',
                    },
                    {
                        name: 'Xiaomi',
                        to: '',
                    },
                    {
                        name: 'Cuckoo',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: IoPhonePortraitOutline,
        categories: [
            {
                title: 'Phụ kiện',
                to: config.routes.phuKien,
            },
        ],
        children: [
            {
                title: 'Phụ kiện di động',
                content: [
                    {
                        name: 'Phụ kiện Apple',
                        to: '',
                    },
                    {
                        name: 'Dán màn hình',
                        to: '',
                    },
                    {
                        name: 'Ốp lưng - Bao da',
                        to: '',
                    },
                    {
                        name: 'Thẻ nhớ',
                        to: '',
                    },
                    {
                        name: 'Apple Care+',
                        to: '',
                    },
                    {
                        name: 'Samsung Care+',
                        to: '',
                    },
                    {
                        name: 'Sim 4G',
                        to: '',
                    },
                    {
                        name: 'Cáp, sạc',
                        to: '',
                    },
                    {
                        name: 'Pin dự phòng',
                        to: '',
                    },
                    {
                        name: 'Phụ kiện điện thoại',
                        to: '',
                    },
                ],
            },
            {
                title: 'Phụ kiện laptop',
                content: [
                    {
                        name: 'Chuột, bàn phím',
                        to: '',
                    },
                    {
                        name: 'Balo Laptop | Túi chống sốc',
                        to: '',
                    },
                    {
                        name: 'Phần mềm',
                        to: '',
                    },
                    {
                        name: 'Webcam',
                        to: '',
                    },
                    {
                        name: 'Giá đỡ',
                        to: '',
                    },
                    {
                        name: 'Thảm, lót chuột',
                        to: '',
                    },
                    {
                        name: 'Sạc laptop',
                        to: '',
                    },
                    {
                        name: 'Camera phòng họp',
                        to: '',
                    },
                ],
            },
            {
                title: 'Thiết bị mạng',
                content: [
                    {
                        name: 'Thiết bị phát sóng WiFi',
                        to: '',
                    },
                    {
                        name: 'Bộ phát wifi di động',
                        to: '',
                    },
                    {
                        name: 'Bộ kích sóng WiFi',
                        to: '',
                    },
                    {
                        name: 'Xem tất cả thiết bị mạng',
                        to: '',
                    },
                ],
            },
            {
                title: 'Gaming Gear',
                content: [
                    {
                        name: 'PlayStation',
                        to: '',
                    },
                    {
                        name: 'ROG Ally',
                        to: '',
                    },
                    {
                        name: 'MSI Claw',
                        to: '',
                    },
                    {
                        name: 'Bàn phím Gaming',
                        to: '',
                    },
                    {
                        name: 'Chuột chơi game',
                        to: '',
                    },
                    {
                        name: 'Tai nghe Gaming',
                        to: '',
                    },
                    {
                        name: 'Tay cầm chơi game',
                        to: '',
                    },
                    {
                        name: 'Xem tất cả Gaming Gear',
                        to: '',
                    },
                ],
            },
            {
                title: 'Phụ kiện khác',
                content: [
                    {
                        name: 'Dây đeo đồng hồ',
                        to: '',
                    },
                    {
                        name: 'Dây đeo Airtag',
                        to: '',
                    },
                    {
                        name: 'Phụ kiện tiện ích',
                        to: '',
                    },
                    {
                        name: 'Phụ kiện ô tô',
                        to: '',
                    },
                    {
                        name: 'Đồ chơi trẻ em',
                        to: '',
                    },
                    {
                        name: 'Trạm sạc dự phòng',
                        to: '',
                    },
                ],
            },
            {
                title: 'Thiết bị lưu trữ',
                content: [
                    {
                        name: 'Thẻ nhớ',
                        to: '',
                    },
                    {
                        name: 'USB',
                        to: '',
                    },
                    {
                        name: 'Ổ cứng di động',
                        to: '',
                    },
                ],
            },
            {
                title: 'Phụ kiện Hot',
                content: [
                    {
                        name: 'Ốp lưng iPhone 15',
                        to: '',
                    },
                    {
                        name: 'Dán màn hình iPhone 15',
                        to: '',
                    },
                    {
                        name: 'Cáp sạc iPhone 15',
                        to: '',
                    },
                    {
                        name: 'Ốp lưng Z Flip 5',
                        to: '',
                    },
                    {
                        name: 'Dán màn hình S24 Ultra | Plus',
                        to: '',
                    },
                    {
                        name: 'Ốp lưng S24 Ultra | Plus',
                        to: '',
                    },
                    {
                        name: 'DJI Mini 3',
                        to: '',
                    },
                    {
                        name: 'DJI Air 3',
                        to: '',
                    },
                    {
                        name: 'Săn deal đồng giá',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: GiPc,
        categories: [
            {
                title: 'PC',
                to: config.routes.pc,
            },
            {
                title: 'Màn hình',
                to: config.routes.manHinh,
            },
            {
                title: 'Máy in',
                to: config.routes.mayIn,
            },
        ],
        children: [
            {
                title: 'Loại PC',
                content: [
                    {
                        name: 'Build PC',
                        to: '',
                    },
                    {
                        name: 'Cấu hình sẵn',
                        to: '',
                    },
                    {
                        name: 'All In One',
                        to: '',
                    },
                    {
                        name: 'PC bộ',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn PC theo nhu cầu',
                content: [
                    {
                        name: 'Gaming',
                        to: '',
                    },
                    {
                        name: 'Đồ họa',
                        to: '',
                    },
                    {
                        name: 'Văn phòng',
                        to: '',
                    },
                ],
            },
            {
                title: 'Linh kiện máy tính',
                content: [
                    {
                        name: 'CPU',
                        to: '',
                    },
                    {
                        name: 'Main',
                        to: '',
                    },
                    {
                        name: 'RAM',
                        to: '',
                    },
                    {
                        name: 'Ổ cứng',
                        to: '',
                    },
                    {
                        name: 'Nguồn',
                        to: '',
                    },
                    {
                        name: 'VGA',
                        to: '',
                    },
                    {
                        name: 'Tản nhiệt',
                        to: '',
                    },
                    {
                        name: 'Case',
                        to: '',
                    },
                    {
                        name: 'Xem tất cả',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn màn hình theo hãng',
                content: [
                    {
                        name: 'ASUS',
                        to: '',
                    },
                    {
                        name: 'Samsung',
                        to: '',
                    },
                    {
                        name: 'DELL',
                        to: '',
                    },
                    {
                        name: 'LG',
                        to: '',
                    },
                    {
                        name: 'MSI',
                        to: '',
                    },
                    {
                        name: 'Acer',
                        to: '',
                    },
                    {
                        name: 'Xiaomi',
                        to: '',
                    },
                    {
                        name: 'ViewSonic',
                        to: '',
                    },
                    {
                        name: 'Philips',
                        to: '',
                    },
                    {
                        name: 'AOC',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn mafnm hình theo nhu cầu',
                content: [
                    {
                        name: 'Gaming',
                        to: '',
                    },
                    {
                        name: 'Văn phòng',
                        to: '',
                    },
                    {
                        name: 'Đồ họa',
                        to: '',
                    },
                    {
                        name: 'Lập trình',
                        to: '',
                    },
                    {
                        name: 'Màn hình di động',
                        to: '',
                    },
                    {
                        name: 'Arm màn hình',
                        to: '',
                    },
                    {
                        name: 'Xem tất cả',
                        to: '',
                    },
                ],
            },
            {
                title: 'Gaming Gear',
                content: [
                    {
                        name: 'PlayStation',
                        to: '',
                    },
                    {
                        name: 'ROG Ally',
                        to: '',
                    },
                    {
                        name: 'Bàn phím Gaming',
                        to: '',
                    },
                    {
                        name: 'Chuột chơi game',
                        to: '',
                    },
                    {
                        name: 'Tai nghe Gaming',
                        to: '',
                    },
                    {
                        name: 'Tay cầm chơi Game',
                        to: '',
                    },
                    {
                        name: 'Xem tất cả',
                        to: '',
                    },
                ],
            },
            {
                title: 'Thiết bị văn phòng',
                content: [
                    {
                        name: 'PlayStation',
                        to: '',
                    },
                    {
                        name: 'ROG Ally',
                        to: '',
                    },
                    {
                        name: 'Bàn phím Gaming',
                        to: '',
                    },
                    {
                        name: 'Chuột chơi game',
                        to: '',
                    },
                    {
                        name: 'Tai nghe Gaming',
                        to: '',
                    },
                    {
                        name: 'Tay cầm chơi Game',
                        to: '',
                    },
                    {
                        name: 'Xem tất cả',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: HiOutlineTv,
        categories: [
            {
                title: 'Tivi',
                to: config.routes.tivi,
            },
        ],
        children: [
            {
                title: 'Chọn theo hãng',
                content: [
                    {
                        name: 'Samsung',
                        to: '',
                    },
                    {
                        name: 'LG',
                        to: '',
                    },
                    {
                        name: 'Xiaomi',
                        to: '',
                    },
                    {
                        name: 'Coocaa',
                        to: '',
                    },
                    {
                        name: 'Sony',
                        to: '',
                    },
                    {
                        name: 'Toshiba',
                        to: '',
                    },
                    {
                        name: 'TCL',
                        to: '',
                    },
                    {
                        name: 'Hisense',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn theo mức giá',
                content: [
                    {
                        name: 'Dưới 5 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 5 - 9 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 9 - 12 triệu',
                        to: '',
                    },
                    {
                        name: 'Từ 12 - 15 triệu',
                        to: '',
                    },
                    {
                        name: 'Trên 15 triệu',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn theo độ phân giải',
                content: [
                    {
                        name: 'Tivi 4K',
                        to: '',
                    },
                    {
                        name: 'Tivi 8K',
                        to: '',
                    },
                    {
                        name: 'Tivi Full HD',
                        to: '',
                    },
                    {
                        name: 'Tivi OLED',
                        to: '',
                    },
                    {
                        name: 'Tivi QLED',
                        to: '',
                    },
                    {
                        name: 'Android Tivi',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn theo kích thước',
                content: [
                    {
                        name: 'Tivi 32 inch',
                        to: '',
                    },
                    {
                        name: 'Tivi 43 inch',
                        to: '',
                    },
                    {
                        name: 'Tivi 50 inch',
                        to: '',
                    },
                    {
                        name: 'Tivi 55 inch',
                        to: '',
                    },
                    {
                        name: 'Tivi 65 inch',
                        to: '',
                    },
                    {
                        name: 'Tivi 70 inch',
                        to: '',
                    },
                    {
                        name: 'Tivi 85 inch',
                        to: '',
                    },
                ],
            },
            {
                title: 'Sản phẩm nổi bật',
                content: [
                    {
                        name: 'Xiaomi TV Max 86 inch',
                        to: '',
                    },
                    {
                        name: 'Tivi Xiaomi A Pro 55 inch 4K',
                        to: '',
                    },
                    {
                        name: 'Tivi LG Stanby Me 27inch',
                        to: '',
                    },
                    {
                        name: 'Tivi Coocaa 4K 70" 70C9',
                        to: '',
                    },
                    {
                        name: 'Tivi Xiaomi A 32 inch HD',
                        to: '',
                    },
                    {
                        name: 'Tivi Samsung QLED 55" 55Q60BAK',
                        to: '',
                    },
                    {
                        name: 'Giá treo tivi',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: IoPhonePortraitOutline,
        categories: [
            {
                title: 'Thu cũ đổi mới',
                to: config.routes.thuCuDoiMoi,
            },
        ],
        children: [
            {
                title: 'Chọn theo hãng',
                content: [
                    {
                        name: 'Thu cũ iPhone',
                        to: '',
                    },
                    {
                        name: 'Thu cũ Samsung',
                        to: '',
                    },
                    {
                        name: 'Thu cũ Xiaomi',
                        to: '',
                    },
                    {
                        name: 'Thu cũ Laptop',
                        to: '',
                    },
                    {
                        name: 'Thu cũ Mac',
                        to: '',
                    },
                    {
                        name: 'Thu cũ iPad',
                        to: '',
                    },
                    {
                        name: 'Thu cũ đồng hồ',
                        to: '',
                    },
                    {
                        name: 'Thu cũ Apple Watch',
                        to: '',
                    },
                    {
                        name: 'Thu cũ 2G',
                        to: '',
                    },
                ],
            },
            {
                title: 'Sản phẩm trợ giá cao',
                content: [
                    {
                        name: 'iPhone 15 Pro Max » 2 triệu',
                        to: '',
                    },
                    {
                        name: 'iPhone 14 Pro Max » 2 triệu',
                        to: '',
                    },
                    {
                        name: 'Galaxy S23 Ultra » 2 triệu',
                        to: '',
                    },
                    {
                        name: 'Galaxy Z Fold 5 » 2 triệu',
                        to: '',
                    },
                    {
                        name: 'Galaxy Z Flip 5 » 2 triệu',
                        to: '',
                    },
                    {
                        name: 'Galaxy Tab S9 » 500K',
                        to: '',
                    },
                    {
                        name: 'OPPO Find N3 » 5 triệu',
                        to: '',
                    },
                    {
                        name: 'Oppo Find N3 Flip » 3 triệu',
                        to: '',
                    },
                    {
                        name: 'Macbook » 2 triệu',
                        to: '',
                    },
                    {
                        name: 'Laptop » 3 triệu',
                        to: '',
                    },
                    {
                        name: 'Máy chơi game Rog Ally » 2 triệu',
                        to: '',
                    },
                ],
            },
            {
                title: 'Sản phẩm giá thu cao',
                content: [
                    {
                        name: 'iPhone 15 Pro Max',
                        to: '',
                    },
                    {
                        name: 'iPhone 14 Pro Max',
                        to: '',
                    },
                    {
                        name: 'iPhone 13 Pro Max',
                        to: '',
                    },
                    {
                        name: 'Samsung Galaxy Z Fold 5',
                        to: '',
                    },
                    {
                        name: 'Samsung Galaxy Z Flip 5',
                        to: '',
                    },
                    {
                        name: 'Samsung Galaxy S24 Ultra',
                        to: '',
                    },
                    {
                        name: 'Macbook Air M1',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: BsPhoneFlip,
        categories: [
            {
                title: 'Hàng cũ',
                to: config.routes.hangCu,
            },
        ],
        children: [
            {
                title: 'Chọn loại sản phẩm cũ',
                content: [
                    {
                        name: 'Điện thoại cũ',
                        to: '',
                    },
                    {
                        name: 'Máy tính bảng cũ',
                        to: '',
                    },
                    {
                        name: 'Mac cũ',
                        to: '',
                    },
                    {
                        name: 'Laptop cũ',
                        to: '',
                    },
                    {
                        name: 'Tai nghe cũ',
                        to: '',
                    },
                    {
                        name: 'Loa cũ',
                        to: '',
                    },
                    {
                        name: 'Đồng hồ thông minh cũ',
                        to: '',
                    },
                    {
                        name: 'Nhà thông minh cũ',
                        to: '',
                    },
                    {
                        name: 'Màn hình cũ',
                        to: '',
                    },
                    {
                        name: 'Phụ kiện cũ',
                        to: '',
                    },
                    {
                        name: 'Tivi Cũ',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn dòng iPhone cũ',
                content: [
                    {
                        name: 'iPhone 15 series cũ',
                        to: '',
                    },
                    {
                        name: 'iPhone 14 series cũ',
                        to: '',
                    },
                    {
                        name: 'iPhone 13 series cũ',
                        to: '',
                    },
                    {
                        name: 'iPhone 12 series cũ',
                        to: '',
                    },
                    {
                        name: 'iPhone 11 series cũ',
                        to: '',
                    },
                    {
                        name: 'Xem tất cả iPhone cũ',
                        to: '',
                    },
                ],
            },
            {
                title: 'Điện thoại Android cũ',
                content: [
                    {
                        name: 'Samsung cũ',
                        to: '',
                    },
                    {
                        name: 'Xiaomi cũ',
                        to: '',
                    },
                    {
                        name: 'OPPO cũ',
                        to: '',
                    },
                    {
                        name: 'Nokia cũ',
                        to: '',
                    },
                    {
                        name: 'realme cũ',
                        to: '',
                    },
                    {
                        name: 'vivo cũ',
                        to: '',
                    },
                    {
                        name: 'ASUS cũ',
                        to: '',
                    },
                    {
                        name: 'TCL cũ',
                        to: '',
                    },
                    {
                        name: 'Infinix cũ',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn hãng laptop cũ',
                content: [
                    {
                        name: 'Laptop Dell cũ',
                        to: '',
                    },
                    {
                        name: 'Laptop ASUS cũ',
                        to: '',
                    },
                    {
                        name: 'Laptop Acer cũ',
                        to: '',
                    },
                    {
                        name: 'Laptop HP cũ',
                        to: '',
                    },
                    {
                        name: 'Laptop Surface cũ',
                        to: '',
                    },
                ],
            },
            {
                title: 'Sản phẩm nổi bật',
                content: [
                    {
                        name: 'iPhone 15 Series Cũ',
                        to: '',
                    },
                    {
                        name: 'iPhone 14 Series cũ',
                        to: '',
                    },
                    {
                        name: 'iPhone 13 Series cũ',
                        to: '',
                    },
                    {
                        name: 'Apple Watch Se 44mm 4G cũ đẹp',
                        to: '',
                    },
                    {
                        name: 'Samsung Galaxy Z Flip4 cũ đẹp',
                        to: '',
                    },
                    {
                        name: 'Xiaomi 12T Pro cũ đẹp',
                        to: '',
                    },
                    {
                        name: 'Xiaomi 12T cũ đẹp',
                        to: '',
                    },
                    {
                        name: 'Oppo Find N2 Flip đã kích hoạt',
                        to: '',
                    },
                ],
            },
            {
                title: 'Sản phẩm Apple cũ',
                content: [
                    {
                        name: 'Apple Watch cũ',
                        to: '',
                    },
                    {
                        name: 'iPad cũ',
                        to: '',
                    },
                ],
            },
            {
                title: 'Chọn tivi cũ',
                content: [
                    {
                        name: 'Tivi cũ',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: IoMegaphoneOutline,
        categories: [
            {
                title: 'Khuyến mãi',
                to: config.routes.khuyenMai,
            },
        ],
        children: [
            {
                title: 'Khuyến mãi',
                content: [
                    {
                        name: 'Hotsale cuối tuần',
                        to: '',
                    },
                    {
                        name: 'Siêu sale phụ kiện',
                        to: '',
                    },
                    {
                        name: 'Ưu đãi thanh toán',
                        to: '',
                    },
                    {
                        name: 'Thu cũ 2G trợ giá đến 500k',
                        to: '',
                    },
                    {
                        name: 'Khách hàng doanh nghiệp B2B',
                        to: '',
                    },
                ],
            },
            {
                title: 'Thu cũ đổi giá hời',
                content: [
                    {
                        name: 'iPhone 15 trợ giá đến 2 triệu',
                        to: '',
                    },
                    {
                        name: 'Galaxy Z Fold5 trợ giá 2 triệu',
                        to: '',
                    },
                    {
                        name: 'OnePlus Nord 3 trợ giá 2 triệu',
                        to: '',
                    },
                    {
                        name: 'Laptop trợ giá đến 3 triệu',
                        to: '',
                    },
                    {
                        name: 'Đồng hồ trợ giá đến 1 triệu',
                        to: '',
                    },
                ],
            },
            {
                title: 'Ưu đãi thành viên',
                content: [
                    {
                        name: 'Nâng cấp chính sách Smember 3.0',
                        to: '',
                    },
                ],
            },
            {
                title: 'Ưu đãi sinh viên',
                content: [
                    {
                        name: 'Tựu trường lên deal chiến HOT and NEW',
                        to: '',
                    },
                    {
                        name: 'Đăng ký S-Student HOT and NEW',
                        to: '',
                    },
                    {
                        name: 'Laptop giảm đến 800K',
                        to: '',
                    },
                    {
                        name: 'Điện thoại giảm đến 6%',
                        to: '',
                    },
                    {
                        name: 'Đồng hồ giảm thêm 6%',
                        to: '',
                    },
                    {
                        name: 'Loa - tai nghe giảm thêm 5%',
                        to: '',
                    },
                    {
                        name: 'Máy chơi game giảm thêm 5%',
                        to: '',
                    },
                    {
                        name: 'Hàng cũ giảm thêm 5%',
                        to: '',
                    },
                    {
                        name: 'Ưu đãi học viên Edu Talk',
                        to: '',
                    },
                    {
                        name: 'Ưu đãi học viên Teky',
                        to: '',
                    },
                ],
            },
        ],
    },
    {
        icon: GiNewspaper,
        categories: [
            {
                title: 'Tin công nghệ',
                to: config.routes.tinCongNghe,
            },
        ],
        children: [
            {
                title: 'Chuyên mục',
                content: [
                    {
                        name: 'Tin công nghệ',
                        to: '',
                    },
                    {
                        name: 'Khám phá',
                        to: '',
                    },
                    {
                        name: 'S-Games',
                        to: '',
                    },
                    {
                        name: 'Tư vấn',
                        to: '',
                    },
                    {
                        name: 'Trên tay',
                        to: '',
                    },
                    {
                        name: 'Thị trường',
                        to: '',
                    },
                    {
                        name: 'Thủ thuật - Hỏi đáp',
                        to: '',
                    },
                ],
            },
        ],
    },
];
