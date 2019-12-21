import React from 'react';
import './layout.css'
import Header from '../header/header'


const Layout = (props) => {
    return (
        <div className={"layout__wrapper"}>
            <Header/>
            <div className={"layout__body"}>
                <div className={"side__nav__wrapper"}>
                    <div className={"generate__invoice__wrapper"}>
                        <button className={"invoice__btn"}>GENERATE INVOICE</button>
                    </div>
                    <div className={"sidebar__nav__wrapper"}>
                        <ul>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                            <li className={"sidebar__li"}><span>Main</span></li>
                        </ul>
                    </div>
                </div>
                <div className={"content__wrapper"}>
                    body goes here
                </div>
            </div>
        </div>
    )
}

export default Layout