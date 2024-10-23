import React, { useEffect, useState } from "react";
import './ExpenseTrackingManagePage.scss'
import axios from 'axios'
import DatePicker from "react-datepicker";
import FinanceManagerAPI from "../../FinanceManagerAPI";
import DisplayExpense from "../../components/DisplayExpense/DisplayExpense";
import DisplayIncome from "../../components/DisplayIncome/DisplayIncome";

const {getExpenseForGivenMonth, getIncomeForGivenMonth} = FinanceManagerAPI
export default function ExpenseTrackingManagePage() {
    const [monthYear, setMonthYear] = useState(new Date())
    const [expenses, setExpenses] = useState([])
    const [incomes, setIncomes] = useState([])
    useEffect(() => {
        axios.get(getExpenseForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
        .then((response) => {
            setExpenses(response.data)
        })
        .catch((error) => {console.error()});
    },[monthYear]);
    useEffect(() => {
        axios.get(getIncomeForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
        .then((response) => {
            setIncomes(response.data)
        })
        .catch((error) => {console.error()});
    }, [monthYear])
    return (
        <>
            <div className="timebar">
                <div className="timebar__title">Please select a month:</div>
                <div className="timebar__month">
                    <DatePicker
                        value={monthYear}
                        selected={monthYear}
                        onChange={(date) => setMonthYear(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                    />
                </div>
            </div>
            <div className="expense__details">
                <div className="expenses">
                    <div className="expenses__title">Expenses</div>
                    <div className="expenses__item">
                        {expenses.map((expense) => (<DisplayExpense key={expense.id} expense={expense}/>))}
                        {/* <DisplayExpense expense={expense} /> */}
                    </div>
                </div>
                <div className="expenses">
                    <div className="expenses__title">Incomes</div>
                    <div className="expenses__item">
                        {incomes.map((income) => (<DisplayIncome key={income.id} income={income}/>))}
                        {/* <DisplayExpense expense={expense} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}