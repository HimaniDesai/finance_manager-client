import React from "react";
import './DisplayIncome.scss'
import {dateFormat} from '../../Utilities'

export default function DisplayIncome({income}) {
    return (
        <>
        <div className="expense">
            <div className="expense__date">{dateFormat(income.income_date)}</div>
            <div className="expense__container">
                <div className="expense__item">
                    <label className="expense__item-title">Refunds</label>
                    <label className="expense__item-value">${income.refunds}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">Salary</label>
                    <label className="expense__item-value">${income.salary}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">Prize Money</label>
                    <label className="expense__item-value">${income.prize_money}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">Returns</label>
                    <label className="expense__item-value">${income.returns}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">Gifts</label>
                    <label className="expense__item-value">${income.gifts}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">TOTAL</label>
                    <label className="expense__item-value">${
                            income.gifts + income.returns + income.prize_money + income.salary + income.refunds
                        }</label>
                </div>

            </div>
        </div>
        </>
    )
}