import React, { useEffect, useState } from "react";
import './BudgetPlanningDashboardPage.scss'
import axios from 'axios'
import DatePicker from "react-datepicker";
import FinanceManagerAPI from "../../FinanceManagerAPI";
import Chart from "react-google-charts";

const {getExpenseForGivenYear, getIncomeForGivenYear} = FinanceManagerAPI
export default function BudgetPlanningDashboardPage() {
    const [year, setYear] = useState(new Date())
    const [expenses, setExpenses] = useState([])
    const [incomes, setIncomes] = useState([])
    const [expenseData, setExpenseData] = useState(new Map())
    const [incomeData, setIncomeData] = useState(new Map())
    const [data, setData] = useState([])
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const options = {
        title: "Line Chart of Expenses over the year",
        hAxis: { title: "Months" },
        vAxis: { title: "Amount ($)" },
    };
    useEffect(() => {
        axios.get(getExpenseForGivenYear(1, year.getFullYear()))
        .then((response) => {
            setExpenses(response.data)
        })
        .catch((error) => {console.error()});
    }, [year])
    useEffect(() => {
        axios.get(getIncomeForGivenYear(1, year.getFullYear()))
        .then((response) => {
            setIncomes(response.data)
        })
        .catch((error) => {console.error()});
    }, [year])

    useEffect(()=>{
        let totalExpense = new Map()
        expenses.map((e) => {
            let mnth = new Date(e.expense_date).getMonth()
            let dailyExpense = e.bills_and_utilities + e.grocery_and_food + e.insurances + e.tax + e.investments + e.other_purchases
            if (totalExpense.get(mnth)) {
                totalExpense.set(mnth, totalExpense.get(mnth) + dailyExpense)
            }
            else{
                totalExpense.set(mnth, dailyExpense)
            }
        })
        setExpenseData(totalExpense)
    }, [year,expenses])
    useEffect(()=>{
        let totalIncome = new Map()
        incomes.map((i) => {
            let mnth = new Date(i.income_date).getMonth()
            let dailyIncome = i.refunds + i.salary + i.prize_money + i.returns + i.gifts
            if (totalIncome.get(mnth)) {
                totalIncome.set(mnth, totalIncome.get(mnth) + dailyIncome)
            }
            else{
                totalIncome.set(mnth, dailyIncome)
            }
        })
        setIncomeData(totalIncome)
    }, [year, incomes])
    useEffect(() => {
        let graphData = []
        graphData.push(['Month','Expense','Income', 'Savings'])
        for(let i = 0; i<12;i++){
            let month = months[i]
            let expense = 0.00
            let income = 0.00
            if(incomeData.get(i)){
                income = incomeData.get(i)
            }
            if (expenseData.get(i)){
                expense = expenseData.get(i)
            }
            graphData.push([month, expense, income, income-expense])
        }
        setData(graphData)
    },[year, incomeData, expenseData])

    return (
        <>
            <div className="timebar">
                <div className="timebar__title">Please select a month:</div>
                <div className="timebar__month">
                    <DatePicker
                        value={year}
                        selected={year}
                        onChange={(date) => setYear(date)}
                        dateFormat="yyyy"
                        showYearPicker
                        yearItemNumber={9}
                    />
                </div>
            </div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </>
    )
}