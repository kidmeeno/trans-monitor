import React from 'react';
import notificationIcon from '../../assets/images/Group.svg';
import userImg from '../../assets/images/IMG-20180413-WA0005.png';
import searchIcon from '../../assets/images/searchIcon.svg';
import './header.css'

const Header = () => {
    return (
        <div className={"header__wrapper"}>
            <div className={"logo__wrapper"}>
                TransMonitor
            </div>
            <div className={"search__wrapper"}>
                <img src={searchIcon} alt="" />
                <input type="text" className={"search__field"} placeholder="Search..." />
            </div>
            <div className={"header__item"}>
                <div className={"support__faq__wrapper"}>
                    <span>Support</span>
                    <span>FAQ</span>
                    <div className={"notification__icon__wrapper"}>
                        <div className={"notification__counter"}>8</div>
                        <img src={notificationIcon} alt="" />
                    </div>
                </div>
                <div className={"user__detail__wrapper"}>
                    <div className={"user__detail"}>
                        <span className={"greetings"}>hello</span>
                        <span className={"user__name"}>Okechukwu Iyke</span>
                    </div>
                    <img src={userImg} alt="" className={"user__img"} />
                </div>
            </div>
        </div>
    )
}

export default Header