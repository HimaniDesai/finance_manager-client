import React, { useEffect, useState } from "react";
import './ExpenseTrackingManagePage.scss'
import axios from 'axios'
import DatePicker from "react-datepicker";
import FinanceManagerAPI from "../../FinanceManagerAPI";
import DisplayExpense from "../../components/DisplayExpense/DisplayExpense";
import DisplayIncome from "../../components/DisplayIncome/DisplayIncome";
import { useNavigate } from "react-router-dom";

const {getExpenseForGivenMonth, getIncomeForGivenMonth, deleteExpenseById, deleteIncomeById} = FinanceManagerAPI
export default function ExpenseTrackingManagePage() {
    const navigate = useNavigate()
    const [monthYear, setMonthYear] = useState(new Date())
    const [expenses, setExpenses] = useState([])
    const [incomes, setIncomes] = useState([])
    useEffect(() => {
        axios.get(getExpenseForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
        .then((response) => {
            setExpenses(response.data)
        })
        .catch((error) => {console.error()});
    },[monthYear, expenses]);
    useEffect(() => {
        axios.get(getIncomeForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
        .then((response) => {
            setIncomes(response.data)
        })
        .catch((error) => {console.error()});
    }, [monthYear, incomes])
    const handleNewExpense=()=>{
        navigate(`/expenseTracking/manageExpense/insertExpense/1`)
    }
    const handleNewIncome=()=>{
        navigate(`/expenseTracking/manageExpense/insertIncome/1`)
    }
    const handleDeleteExpense = function (expenseId) {
        axios.delete(deleteExpenseById(expenseId))
        .then((response) => {
            // axios.get(getExpenseForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
            axios.get(getExpenseForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
            .then((response) => {
                setExpenses(response.data)
            })
        }).catch((error) => {console.error()});
    }
    const handleDeleteIncome = function (incomeId) {
        axios.delete(deleteIncomeById(incomeId))
        .then((response) => {
            // axios.get(getExpenseForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
            axios.get(getIncomeForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
            .then((response) => {
                setIncomes(response.data)
            })
        }).catch((error) => {console.error()});
    }
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
            <div className="new-expense">
                <div className="new-expense__item">
                    <button className="new-expense__item--button" onClick={handleNewExpense}>
                        Add new Expense
                    </button>
                </div>
                <div className="new-expense__item">
                    <button className="new-expense__item--button" onClick={handleNewIncome}>
                        Add new Income
                    </button>
                </div>
            </div>
            <div className="expense__details">
                <div className="expenses">
                    <div className="expenses__title">Expenses</div>
                    <div className="expenses__item">
                        {expenses.map((expense) => (<DisplayExpense key={expense.id} expense={expense} handleDeleteExpense={handleDeleteExpense} />))}
                    </div>
                </div>
                <div className="expenses">
                    <div className="expenses__title">Incomes</div>
                    <div className="expenses__item">
                        {incomes.map((income) => (<DisplayIncome key={income.id} income={income} handleDeleteIncome={handleDeleteIncome} />))}
                    </div>
                </div>
            </div>
        </>
    )
}