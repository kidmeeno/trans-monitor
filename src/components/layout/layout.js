import React from 'react';
import './layout.css';
import Header from '../header/header';
import overViewIcon from '../../assets/images/overviewIcon.svg';
import allPaymentIcon from '../../assets/images/wallet-43.svg';
import reconcilePaymentIcon from '../../assets/images/wallet-43 (1).svg';
import unReconsilePaymentIcon from '../../assets/images/wallet-43 (2).svg';
import manuelSettingIcon from '../../assets/images/ic_fiber_manual_record_48px.svg';
import merchantProfileIcon from '../../assets/images/single-01 2.svg';
import allOrdersIcon from '../../assets/images/Group 7.1.svg';
import pendingOrdersIcon from '../../assets/images/Group 7.svg';
import reconciledOrdersIcon from '../../assets/images/Group 7.2.svg';


const Layout = (props) => {
    return (
        <div className={"layout__wrapper"}>
            <Header />
            <div className={"layout__body"}>
                <div className={"side__nav__wrapper"}>
                    <div className={"generate__invoice__wrapper"}>
                        <button className={"invoice__btn"}>GENERATE INVOICE</button>
                    </div>
                    <div className={"sidebar__nav__wrapper"}>
                        <ul>
                            <li className={"sidebar__li"}>
                                <div className={"nav__item__res"}><span>Main</span></div>
                            </li>
                            <li className={"sidebar__li"}>
                                <div className={"active__nav__tag"}>
                                    <div className={"nav__content__res"}>
                                        <img src={overViewIcon} alt="" className={"nav__icons"} />
                                        <span>Overview</span>
                                    </div>
                                </div>
                            </li>
                            <li className={"sidebar__li"}>
                                {/* <div className={"nav__item__res"}><span>Main</span></div> */}
                            </li>
                            <li className={"sidebar__li"}>
                                <div className={"nav__item__res"}><span>Payments</span></div>
                            </li>
                            <li className={"sidebar__li"}>
                                <div className={"non__active__nav__tag"}>
                                    <div className={"nav__content__res"}>
                                        <img src={allPaymentIcon} alt="" className={"nav__icons"} />
                                        <span>All Payments</span>
                                    </div>
                                </div>
                            </li>
                            <li className={"sidebar__li"}>
                                <div className={"non__active__nav__tag"}>
                                    <div className={"nav__content__res"}>
                                        <img src={reconcilePaymentIcon} alt="" className={"nav__icons"} />
                                        <span>Reconcilled Payments</span>
                                    </div>
                                </div>
                            </li>
                            <li className={"sidebar__li"}>
                                <div className={"non__active__nav__tag"}>
                                    <div className={"nav__content__res"}>
                                        <img src={unReconsilePaymentIcon} alt="" className={"nav__icons"} />
                                        <span>Un - Reconcilled Payments</span>
                                    </div>
                                </div>
                            </li>
                            <li className={"sidebar__li"}>
                                <div className={"non__active__nav__tag"}>
                                    <div className={"nav__content__res"}>
                                        <img src={manuelSettingIcon} alt="" className={"nav__icons"} />
                                        <span>Manual Settlement</span>
                                    </div>
                                </div>
                            </li>
                            <li className={"sidebar__li"}>
                                {/* <div className={"nav__item__res"}><span>Main</span></div> */}
                            </li>
                            <li className={"sidebar__li"}>
                                <div className={"nav__item__res"}><span>Orders</span></div>
                            </li>
                            <li className={"sidebar__li"}>
                                <div className={"non__active__nav__tag"}>
                                    <div className={"nav__content__res"}>
                                        <img src={allOrdersIcon} alt="" className={"nav__icons"} />
                                        <span>All Orders</span>
                                    </div>
                                </div>
                            </li>
                            <li className={"sidebar__li"}>
                                <div className={"non__active__nav__tag"}>
                                    <div className={"nav__content__res"}>
                                        <img src={pendingOrdersIcon} alt="" className={"nav__icons"} />
                                        <span>Pending Orders</span>
                                    </div>
                                </div>
                            </li>
                            <li className={"sidebar__li"}>
                                <div className={"non__active__nav__tag"}>
                                    <div className={"nav__content__res"}>
                                        <img src={reconciledOrdersIcon} alt="" className={"nav__icons"} />
                                        <span>Reconcilled Orders</span>
                                    </div>
                                </div>
                            </li>
                            <li className={"sidebar__li"}>
                                {/* <div className={"nav__item__res"}><span>Main</span></div> */}
                            </li>
                            <li className={"sidebar__li"}>
                            <div className={"non__active__nav__tag"}>
                                    <div className={"nav__content__res"}>
                                        <img src={merchantProfileIcon} alt="" className={"nav__icons"} />
                                        <span>Merchant Profile</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"content__wrapper"}>
                    <div className={"content"}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout