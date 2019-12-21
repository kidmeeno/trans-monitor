import React from 'react';
import './transactionCards.css';
import cardChart from '../../assets/images/cardChart.svg';

const TransactionCards = () => {
    return (
        <div className={"row"} style={{padding:0, margin:0}}>
            <div className={"col-md-6 trans__card__wrapper"}>
                <div className={"trans__cards"}>
                    <div className={"trans__details"}>
                        <trans-name>Daily Transaction Volume</trans-name>
                        <span>2,342</span>
                    </div>
                    <div className={"card__chart__wrapper"}>
                        <img src={cardChart} alt="" className={"trans__card__img"} />
                    </div>
                </div>
                <div className={"trans__cards"}>
                    <div className={"trans__details"}>
                        <trans-name>Daily Transaction Value</trans-name>
                        <span>₦4,000,000</span>
                    </div>
                    <div className={"card__chart__wrapper"}>
                        <img src={cardChart} alt="" className={"trans__card__img"} />
                    </div>
                </div>
            </div>
            <div className={"col-md-6 trans__card__wrapper"}>
                <div className={"trans__cards"}>
                    <div className={"trans__details"}>
                        <trans-name>Daily Transaction Volume</trans-name>
                        <span>2,342</span>
                    </div>
                    <div className={"card__chart__wrapper"}>
                        <img src={cardChart} alt="" className={"trans__card__img"} />
                    </div>
                </div>
                <div className={"trans__cards"}>
                    <div className={"trans__details"}>
                        <trans-name>Daily Transaction Volume</trans-name>
                        <span>₦4,000,000</span>
                    </div>
                    <div className={"card__chart__wrapper"}>
                        <img src={cardChart} alt="" className={"trans__card__img"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionCards