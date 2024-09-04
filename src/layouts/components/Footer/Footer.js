import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('top')}>
                <div className={cx('container')}>
                    <div className={cx('box')}>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Tổng đài hỗ trợ miễn phí</div>
                            <div className={cx('content')}>
                                <div className={cx('text')}>
                                    Gọi mua hàng <span className={cx('phone')}>1800.2097</span> (7h30 - 22h00)
                                </div>
                                <div className={cx('text')}>
                                    Gọi khiếu nại <span className={cx('phone')}>1800.2063</span> (8h00 - 21h30)
                                </div>
                                <div className={cx('text')}>
                                    Gọi bảo hành <span className={cx('phone')}>1800.2064</span> (8h00 - 21h00)
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Phương thức thanh toán</div>
                            <div className={cx('boxIconPay')}>
                                <div className={cx('icon-pay')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/x35,webp/media/wysiwyg/apple-pay-og.png"
                                        alt="icon-pay"
                                    />
                                </div>
                                <div className={cx('icon-pay')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png"
                                        alt="icon-pay"
                                    />
                                </div>
                                <div className={cx('icon-pay')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/momo_1.png"
                                        alt="icon-pay"
                                    />
                                </div>
                                <div className={cx('icon-pay')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/onepay-logo.png"
                                        alt="icon-pay"
                                    />
                                </div>
                                <div className={cx('icon-pay')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/mpos-logo.png"
                                        alt="icon-pay"
                                    />
                                </div>
                                <div className={cx('icon-pay')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/kredivo-logo.png"
                                        alt="icon-pay"
                                    />
                                </div>
                                <div className={cx('icon-pay')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png"
                                        alt="icon-pay"
                                    />
                                </div>
                                <div className={cx('icon-pay')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png"
                                        alt="icon-pay"
                                    />
                                </div>
                                <div className={cx('icon-pay')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/fundiin.png"
                                        alt="icon-pay"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</div>
                            <div className={cx('notification')}>
                                <div className={cx('voucher')}>(*) Nhận ngay voucher 10%</div>
                                <div className={cx('tip')}>
                                    *Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
                                </div>
                            </div>
                            <input className={cx('input')} type="text" placeholder="Email*" />
                            <input className={cx('input')} type="text" placeholder="Số điện thoại" />
                            <div className={cx('rule')}>
                                <input type="checkbox" />
                                Tôi đồng ý với điều khoản của CellphoneS
                            </div>
                            <button className={cx('submit')}>Đăng ký ngay</button>
                        </div>
                    </div>
                    <div className={cx('box')}>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Thông tin và chính sách</div>
                            <div className={cx('content')}>
                                <div className={cx('text')}>Mua hàng và thanh toán Online</div>
                                <div className={cx('text')}>Mua hàng trả góp Online</div>
                                <div className={cx('text')}>Mua hàng trả góp bằng thẻ tín dụng</div>
                                <div className={cx('text')}>Chính sách giao hàng</div>
                                <div className={cx('text')}>Tra điểm Smember</div>
                                <div className={cx('text')}>Xem ưu đãi Smember</div>
                                <div className={cx('text')}>Tra thông tin bảo hành</div>
                                <div className={cx('text')}>Tra cứu hoá đơn điện tử</div>
                                <div className={cx('text')}>Thông tin hoá đơn mua hàng</div>
                                <div className={cx('text')}>Trung tâm bảo hành chính hãng</div>
                                <div className={cx('text')}>Quy định về việc sao lưu dữ liệu</div>
                                <div className={cx('text')}>Chính sách khui hộp sản phẩm Apple</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('box')}>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Tổng đài hỗ trợ miễn phí</div>
                            <div className={cx('content')}>
                                <div className={cx('text')}>Khách hàng doanh nghiệp (B2B)</div>
                                <div className={cx('text')}>Ưu đãi thanh toán</div>
                                <div className={cx('text')}>Quy chế hoạt động</div>
                                <div className={cx('text')}>Chính sách bảo mật thông tin cá nhân</div>
                                <div className={cx('text')}>Chính sách Bảo hành</div>
                                <div className={cx('text')}>Liên hệ hợp tác kinh doanh</div>
                                <div className={cx('text')}>Tuyển dụng</div>
                                <div className={cx('text')}>Dịch vụ bảo hành mở rộng</div>
                                <div className={cx('app-downloader')}>
                                    <div className={cx('text')}>Smember: Tích điểm & sử dụng ưu đãi</div>
                                    <div className="is-flex">
                                        <img
                                            className={cx('qr')}
                                            src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/QR_appGeneral.jpg"
                                            alt="QR"
                                        />
                                        <div className="is-flex is-flex-direction-colum is-align-items-center is-justify-content-center">
                                            <Link className={cx('app')}>
                                                <img
                                                    src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadANDROID.png"
                                                    alt="google play"
                                                />
                                            </Link>
                                            <Link className={cx('app')}>
                                                <img
                                                    src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadiOS.png"
                                                    alt="google play"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('box')}>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Kết nối với CellphoneS</div>
                            <div className={cx('boxIconNetWork')}>
                                <Link className={cx('icon-netWork')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png"
                                        alt="icon-netWork"
                                    />
                                </Link>
                                <Link className={cx('icon-netWork')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png"
                                        alt="icon-netWork"
                                    />
                                </Link>
                                <Link className={cx('icon-netWork')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png"
                                        alt="icon-netWork"
                                    />
                                </Link>
                                <Link className={cx('icon-netWork')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-tiktok.png"
                                        alt="icon-netWork"
                                    />
                                </Link>
                                <Link className={cx('icon-netWork')}>
                                    <img
                                        src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-zalo.png"
                                        alt="icon-netWork"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Website thành viên</div>
                            <div className={cx('corp-members')}>
                                <div className={cx('corp-member')}>
                                    Hệ thống bảo hành sửa chữa Điện thoại - Máy tính
                                    <Link className={cx('corp-member-image')}>
                                        <img
                                            src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png"
                                            alt="imgae"
                                        />
                                    </Link>
                                </div>
                                <div className={cx('corp-member')}>
                                    Trung tâm bảo hành uỷ quyền Apple
                                    <Link className={cx('corp-member-image')}>
                                        <img
                                            src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CareS_1.png"
                                            alt="imgae"
                                        />
                                    </Link>
                                </div>
                                <div className={cx('corp-member')}>
                                    Kênh thông tin giải trí công nghệ cho giới trẻ
                                    <Link className={cx('corp-member-image')}>
                                        <img
                                            src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png"
                                            alt="imgae"
                                        />
                                    </Link>
                                </div>
                                <div className={cx('corp-member')}>
                                    Trang thông tin công nghệ mới nhất
                                    <Link className={cx('corp-member-image')}>
                                        <img
                                            src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png"
                                            alt="imgae"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('buttom')}>
                <div className={cx('container')}>
                    <div className={cx('cms')}>
                        <div className={cx('cms-item')}>
                            <div className={cx('cms-line')}><Link >Back to School là gì</Link> – <Link>Điện thoại</Link> – <Link>Điện thoại iPhone</Link></div>
                            <div className={cx('cms-line')}><Link>Điện thoại iPhone 15</Link> – <Link>Điện thoại iPhone 15 Pro Max</Link></div>
                        </div>
                        <div className={cx('cms-item')}>
                            <div className={cx('cms-line')}><Link>Điện thoại Vivo</Link> – <Link>Điện thoại OPPO</Link> – <Link>Điện thoại Xiaomi</Link></div>
                            <div className={cx('cms-line')}><Link>Điện thoại Samsung Galaxy</Link> – <Link>Samsung Galaxy A</Link></div>
                        </div>
                        <div className={cx('cms-item')}>
                            <div className={cx('cms-line')}><Link>Laptop</Link> – <Link>Laptop Acer</Link> – <Link>Laptop Dell</Link> – <Link>Laptop HP</Link></div>
                            <div className={cx('cms-line')}><Link>Tivi</Link> – <Link>Tivi Samsung</Link> – <Link>Tivi Sony</Link> – <Link>Tivi LG</Link></div>
                        </div>
                        <div className={cx('cms-item')}>
                            <div className={cx('cms-line')}><Link>Nhà thông minh</Link> – <Link>Máy hút bụi gia đình</Link> – <Link>Laptop AI</Link></div>
                            <div className={cx('cms-line')}>
                                <Link>Đồ gia dụng</Link> – <Link>Nồi chiên không dầu giá rẻ</Link> – <Link>Nồi cơm điện giá rẻ</Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('company-information')}>
                        <div className={cx('address')}>
                            Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC - GPĐKKD: 0316172372 cấp tại Sở KH &
                            ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ
                            Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.
                        </div>
                        <div className={cx('certification')}>
                            <Link className={cx('certification-item')}>
                                <img src="https://cdn2.cellphones.com.vn/80x,webp/media/logo/logoSaleNoti.png" alt="certification" />
                            </Link>
                            <Link className={cx('certification-item')}>
                                <img src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022" alt="certification" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
