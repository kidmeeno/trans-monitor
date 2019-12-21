import React from 'react';
import './adminPage.css';
import TransactionCards from '../../components/transactionCards/transactionCards';

const Admin = () => {
    return (
        <div>
            <TransactionCards />
            <div className={"row graph__wrapper__section"} style={{ padding: 0, margin: 0 }}>
                <div className={"col-md-8 graph__chart"}>
                    graph oooo
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

export default Admin