import React from 'react';
import './chartCard.css';
import leftArrowIcon from '../../assets/images/Arrow.svg';
import rightArrowIcon from '../../assets/images/Arrow (1).svg';

const ChartCard = () => {
    return (
        <div>
            <div className={"row graph__wrapper__section"} style={{ padding: 0, margin: 0 }}>
                <div className={"col-md-8 graph__chart__wrapper"}>
                    <div className={"graph__chart"}>
                        <div className={"chart__container__top"}>
                            <div style={{width:"100%"}}>
                            <div className={"row"}>
                                <div className={"col-md-6 d-flex align-items-center"}>
                                    <div className={"date__div"}>
                                    Today: 5, Aug 2018
                                    </div>
                                </div>
                                <div className={"col-md-6 select__date__section"}>
                                    <select className={"date__dropdown"}>
                                        <option>1 Jan - 1 Jun</option>
                                    </select>
                                    <div className={"btn__wrapper"}>
                                        <button className={"arrow__btn"}><img src={leftArrowIcon} alt=""/></button>
                                        <button className={"arrow__btn"}><img src={rightArrowIcon} alt=""/></button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-md-4 order__detail__wrapper"}>
                    <div style={{ width: "100%", height:"100%" }}>
                        <div className={"order__detailed__stats"}>
                            <div>
                                <bold-text>
                                    Orders
                                </bold-text>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                        <span className="sr-only">70% Complete</span>
                                    </div>
                                </div>
                                <ul className={"order__ul__res"}>
                                    <li>Pending Orders: <span style={{ color: "yellow", fontWeight: "bold" }}>20</span></li>
                                    <li>Pending Orders: <span style={{ color: "green", fontWeight: "bold" }}>20</span></li>
                                    <li>Pending Orders: <span style={{ color: "blue", fontWeight: "bold" }}>20</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className={"payment__detailed__stats"}>
                            <div>
                                <bold-text>
                                    Orders
                                </bold-text>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                        <span className="sr-only">70% Complete</span>
                                    </div>
                                </div>
                                <ul className={"order__ul__res"}>
                                    <li>Pending Orders: <span style={{ color: "yellow", fontWeight: "bold" }}>20</span></li>
                                    <li>Pending Orders: <span style={{ color: "green", fontWeight: "bold" }}>20</span></li>
                                    <li>Pending Orders: <span style={{ color: "blue", fontWeight: "bold" }}>20</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartCard