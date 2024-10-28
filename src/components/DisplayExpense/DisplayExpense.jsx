import React from "react";
import './DisplayExpense.scss'
import {dateFormat} from '../../Utilities'
import { Link, useNavigate } from "react-router-dom";

export default function DisplayExpense({expense, handleDeleteExpense}) {
    const navigate = useNavigate();
    return (
        <>
        <div className="expense">
            <div className="expense__date">{dateFormat(expense.expense_date)}</div>
            <div className="expense__container">
                <div className="expense__item">
                    <label className="expense__item-title">Bills And Utilities</label>
                    <label className="expense__item-value">${expense.bills_and_utilities}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">Grocery and Food</label>
                    <label className="expense__item-value">${expense.grocery_and_food}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">Insurance</label>
                    <label className="expense__item-value">${expense.insurances}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">Investments</label>
                    <label className="expense__item-value">${expense.investments}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">Other Purchase</label>
                    <label className="expense__item-value">${expense.other_purchases}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">Tax</label>
                    <label className="expense__item-value">${expense.tax}</label>
                </div>
                <div className="expense__item">
                    <label className="expense__item-title">TOTAL</label>
                    <label className="expense__item-value">${
                            expense.tax + expense.other_purchases + expense.investments + expense.insurances + expense.bills_and_utilities + expense.grocery_and_food
                        }</label>
                </div>
                <div className="expense__item-last">
                    <button className="button" onClick={()=> navigate(`/expenseTracking/manageExpense/editExpense/${expense.id}`)}>EDIT</button>
                    <button className="button" onClick={() => handleDeleteExpense(expense.id)}>DELETE</button>
                    {/* <Link to={`/expenseTracking/manageExpense/editExpense/${expense.id}`}>
                        EDIT
                    </Link> */}
                    {/* <EditExpenseItem expense={expense}>EDIT</EditExpenseItem> */}
                </div>
            </div>
        </div>
        </>
    )
}