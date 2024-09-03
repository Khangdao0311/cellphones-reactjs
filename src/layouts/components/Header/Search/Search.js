import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { ImFire } from 'react-icons/im';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useStore } from '~/store';
import { actions } from '~/store';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [state, dispatch] = useStore();
    const [searchResult, setSearchResult] = useState([]);
    const inputRef = useRef();

    const handleShowSearchSuggest = () => {
        if (!state.check.search.result) {
            dispatch(actions.setSearchSuggest(true));
        }
    };

    const debouncedValue = useDebounce(state.search, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        setSearchResult([1,2,3]);
        dispatch(actions.setSearchResult(true));
        console.log('Đang Tìm...');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    const handleClear = () => {
        if (!!state.search) {
            setSearchResult([]);
            dispatch(actions.setSearchValue(''));
            inputRef.current.focus();
            dispatch(actions.setSearchSuggest(true));
        } else {
            dispatch(actions.setSearchResult(false));
        }
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            dispatch(actions.setSearchValue(searchValue));
        }
    };

    return (
        <div className={cx('search')}>
            <button className={cx('button')}>
                <FaSearch className={cx('icon')} />
            </button>
            <input
                className={cx('input')}
                onClick={handleShowSearchSuggest}
                type="text"
                placeholder="Bạn cần tìm gì ?"
                value={state.search}
                onChange={handleChange}
                ref={inputRef}
            />
            {(!!state.check.search.result || !!state.check.search.suggest) && (
                <button className={cx('clear')} onClick={handleClear}>
                    <FaXmark className={cx('icon')} />
                </button>
            )}
            {!!state.check.search.result && (
                <div className={cx('result')}>
                    <div className={cx('find-name')}>
                        <div className={cx('title')}>Có phải bạn muốn tìm</div>
                        <div className={cx('list')}>
                            <div className={cx('item')}>iphone 1</div>
                            <div className={cx('item')}>iphone 1</div>
                            <div className={cx('item')}>iphone 1</div>
                        </div>
                    </div>
                    <div className={cx('find-product')}>
                        <div className={cx('title')}>Sản phẩm gợi ý</div>
                        <div className={cx('list')}>
                            {searchResult.map((product, index) => (
                                <div key={index} className={cx('item')}>
                                    <img
                                        className={cx('image')}
                                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
                                        alt="productFind"
                                    />
                                    <div className={cx('info')}>
                                        <div className={cx('name')}>iPhone 15 Pro Max 256GB | Chính hãng VN/A</div>
                                        <div className={cx('price')}>
                                            <div className={cx('price-main')}>10.000.000</div>
                                            <del className={cx('price-sub')}>20.000.000</del>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {!!state.check.search.suggest && (
                <div className={cx('suggest')}>
                    <div className={cx('benner')}>
                        <img
                            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06 (1).jpg"
                            alt="benner-search"
                        />
                    </div>
                    <div className={cx('history')}>
                        <div className={cx('head')}>
                            <div className={cx('title')}>
                                Lịch sử tìm kiếm <IoMdTime />
                            </div>
                            <div className={cx('clearAll')}>
                                Xóa tất cả <MdDeleteOutline />
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('item')}>iPhone 15</div>
                            <div className={cx('item')}>Samsung Galaxy S23</div>
                            <div className={cx('item')}>Samsung Galaxy S23</div>
                        </div>
                    </div>
                    <div className={cx('trending')}>
                        <div className={cx('head')}>
                            <div className={cx('title')}>
                                Xu hướng tìm kiếm <ImFire style={{ fill: '#EC6F59' }} />
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('item')}>
                                <img
                                    className={cx('image')}
                                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
                                    alt="product-trending"
                                />
                                <div className={cx('name')}>Iphone 15 series</div>
                            </div>
                            <div className={cx('item')}>
                                <img
                                    className={cx('image')}
                                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
                                    alt="product-trending"
                                />
                                <div className={cx('name')}>Iphone 15 series</div>
                            </div>
                            <div className={cx('item')}>
                                <img
                                    className={cx('image')}
                                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
                                    alt="product-trending"
                                />
                                <div className={cx('name')}>Iphone 15 series</div>
                            </div>
                            <div className={cx('item')}>
                                <img
                                    className={cx('image')}
                                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
                                    alt="product-trending"
                                />
                                <div className={cx('name')}>Iphone 15 series</div>
                            </div>
                            <div className={cx('item')}>
                                <img
                                    className={cx('image')}
                                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
                                    alt="product-trending"
                                />
                                <div className={cx('name')}>Iphone 15 series</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
