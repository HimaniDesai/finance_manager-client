import React, { useEffect, useState } from "react";
import './ExpenseTrackingDashboardPage.scss'
import axios from 'axios'
import DatePicker from "react-datepicker";
import FinanceManagerAPI from "../../FinanceManagerAPI";
import Chart from "react-google-charts";

const {getExpenseForGivenMonth, getIncomeForGivenMonth} = FinanceManagerAPI
export default function ExpenseTrackingDashboardPage() {
    const [monthYear, setMonthYear] = useState(new Date())
    const [expenses, setExpenses] = useState([])
    const [incomes, setIncomes] = useState([])
    const [expenseData, setExpenseData] = useState([])
    const [incomeData, setIncomeData] = useState([])
    const expenseOptions = {title: "Expense Wheel",}
    const incomeOptions = {title: "Income Wheel",}
    let refunds = 0.00 
    let salary = 0.00
    let prizeMoney = 0.00
    let returns = 0.00
    let gifts = 0.00
    let bills = 0.00
    let grocery = 0.00
    let insurances = 0.00
    let tax = 0.00
    let investment = 0.00
    let other = 0.00
    useEffect(() => {
        axios.get(getExpenseForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
        .then((response) => {
            setExpenses(response.data)
            
        })
        .catch((error) => {console.error()});
    },[monthYear]);
    useEffect(() => {
        expenses.map((e) => {
            bills = bills + e.bills_and_utilities
            grocery = grocery + e.grocery_and_food
            insurances = insurances + e.insurances
            tax = tax + e.tax
            investment = investment + e.investments
            other = other + e.other_purchases
        })
        setExpenseData(
            [
                ["Expense", "Amount"],
                ["Bills and Utilities", bills],
                ["Grocery and Food", grocery],
                ["Insurances", insurances],
                ["Tax", tax],
                ["Investment", investment],
                ["Other Purchases", other]
            ]
        )
    },[expenses]);
    useEffect(() => {
        axios.get(getIncomeForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
        .then((response) => {
            setIncomes(response.data)
        })
        .catch((error) => {console.error()});
    }, [monthYear])
    useEffect(() => {
        incomes.map((i) => {
            refunds = refunds + i.refunds
            salary = salary + i.salary
            prizeMoney = prizeMoney + i.prize_money
            returns = returns + i.returns
            gifts = gifts + i.gifts
        })
        setIncomeData(
            [
                ["Income", "Amount"],
                ["Refunds", refunds],
                ["Salary", salary],
                ["Prize Money", prizeMoney],
                ["Returns", returns],
                ["Gifts", gifts]
            ]
        )
    },[incomes]);
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
            <div className="expenseCharts">
                <Chart chartType="PieChart"
                    data={expenseData}
                    options={expenseOptions}
                    height={'400px'}
                />
                <Chart chartType="PieChart"
                    data={incomeData}
                    options={incomeOptions}
                    height={'400px'}
                />
            </div>
        </>
    )
}