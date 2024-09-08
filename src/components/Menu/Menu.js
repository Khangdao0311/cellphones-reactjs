import { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { MENU_CATEGORY } from './data';
import classNames from 'classnames/bind';


import styles from './Menu.module.scss';
import MenuChildren from '../MenuChildren';
const cx = classNames.bind(styles);



function Menu() {
    const [menuChildren, setMenuChildren] = useState([]);

    const menutree = useRef();

    const hendleShowMenuChildren = (data) => {
        setMenuChildren(data);
    };

    const hendleHiddenMenuChildren = () => {
        setMenuChildren([]);
    };

    useEffect(() => {
        menutree.current.parentElement.addEventListener('mouseleave', hendleHiddenMenuChildren);
    });

    return (
        <Fragment>
            <div ref={menutree} className={cx('menu-tree')}>
                {MENU_CATEGORY.map((e, i) => {
                    const Icon = e.icon;
                    return (
                        <div
                            key={i}
                            className={cx('item')}
                            onMouseOver={() => {
                                hendleShowMenuChildren(() => e.children);
                            }}
                        >
                            <div className={cx('box')}>
                                <Icon className={cx('icon')} />
                                <div className={cx('content')}>
                                    {e.categories.map((cat, iCat) => (
                                        <Link key={iCat} to={cat.to} className={cx('title')}>
                                            {cat.title}
                                            {iCat === e.categories.length - 1 ? '' : ','}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <FaChevronRight className={cx('icon-arrow')} />
                        </div>
                    );
                })}
            </div>
            {!!menuChildren.length && <MenuChildren data={menuChildren} />}
        </Fragment>
    );
}

export default Menu;
