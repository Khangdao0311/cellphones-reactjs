import classNames from 'classnames/bind';
import style from './Local.module.scss';
import { FaSearch, FaCheckCircle } from 'react-icons/fa';

import { actions, useStore } from '~/store';

const cx = classNames.bind(style);

const LOCAL = [
    {
        id: 1,
        name: 'Hồ Chí Minh',
    },
    {
        id: 2,
        name: 'Hà Nội',
    },
    {
        id: 3,
        name: 'An Giang',
    },
    {
        id: 4,
        name: 'Bà Rịa - Vũng Tàu',
    },
    {
        id: 5,
        name: 'Bắc Giang',
    },
    {
        id: 6,
        name: 'Bắc Ninh',
    },
    {
        id: 7,
        name: 'Bến Tre',
    },
    {
        id: 8,
        name: 'Bình Dương',
    },
    {
        id: 9,
        name: 'Bình Định',
    },
    {
        id: 10,
        name: 'Bình Phước',
    },
    {
        id: 11,
        name: 'Bình Thuận',
    },
    {
        id: 12,
        name: 'Cà Mau',
    },
    {
        id: 13,
        name: 'Cần Thơ',
    },
    {
        id: 14,
        name: 'Đà Nẵng',
    },
    {
        id: 15,
        name: 'Đắk Lắk',
    },
    {
        id: 16,
        name: 'Đồng Nai',
    },
    {
        id: 17,
        name: 'Đồ Tháp',
    },
    {
        id: 18,
        name: 'Hà Tỉnh',
    },
    {
        id: 19,
        name: 'Hải Dương',
    },
    {
        id: 20,
        name: 'Hải Phòng',
    },
    {
        id: 21,
        name: 'Khánh Hòa',
    },
    {
        id: 22,
        name: 'Kiên Giang',
    },
    {
        id: 23,
        name: 'Lạng Sơn',
    },
    {
        id: 24,
        name: 'Lâm Đồng',
    },
    {
        id: 25,
        name: 'Long An',
    },
    {
        id: 26,
        name: 'Nam Định',
    },
    {
        id: 27,
        name: 'Nghệ An',
    },
    {
        id: 28,
        name: 'Phú Thọ',
    },
    {
        id: 29,
        name: 'Quảng Bình',
    },
    {
        id: 30,
        name: 'Quảng Ninh',
    },
    {
        id: 31,
        name: 'Sóc Trăng',
    },
    {
        id: 32,
        name: 'Tây Ninhh',
    },
    {
        id: 33,
        name: 'Thái Bình',
    },
    {
        id: 34,
        name: 'Thái Nguyên',
    },
    {
        id: 35,
        name: 'Thanh Hóa',
    },
    {
        id: 36,
        name: 'Thừa Thiên - Huế',
    },
    {
        id: 37,
        name: 'Tiền Giang',
    },
    {
        id: 38,
        name: 'Trà Vinh',
    },
    {
        id: 39,
        name: 'Vĩnh Long',
    },
    {
        id: 40,
        name: 'Vĩnh Phúc',
    },
];

function Local({ local }) {
    const [state, dispatch] = useStore();

    const handleLocal = () => {
        dispatch(actions.setShowLocal());
    };

    const handleChangeLocal = (payload) => {
        dispatch(actions.setLocal(payload));
    };

    return (
        <div className={cx('province')}>
            <div className={cx('header')}>
                <div className={cx('search')}>
                    <input id={cx('input')} className={cx('search-input')} placeholder="Nhập tên tỉnh thành" />
                    <label htmlFor={cx('input')} className={cx('search-icon')}>
                        <FaSearch />
                    </label>
                </div>
                <button className={cx('close')} onClick={handleLocal}>
                    Đóng x
                </button>
            </div>
            <div className={cx('list')}>
                <div className={cx('placeholder')}>
                    Vui lòng chọn tỉnh, thành phố để biết chính xác giá, khuyến mãi và tồn kho
                </div>
                <ul className={cx('box')}>
                    {LOCAL.map((e) => (
                        <li className={cx('item')} key={e.id}>
                            <div
                                className={cx('name')}
                                onClick={() => {
                                    handleChangeLocal(e);
                                    handleLocal();
                                }}
                            >
                                {e.name}
                                {e.id === state.local.id && (
                                    <div className={cx('icon')}>
                                        <FaCheckCircle />
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Local;
