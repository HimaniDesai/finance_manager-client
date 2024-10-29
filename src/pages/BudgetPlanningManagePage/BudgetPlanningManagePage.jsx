import React, { useState, useEffect } from "react";
import './BudgetPlanningManagePage.scss'
import axios from 'axios'
import DatePicker from "react-datepicker";
import FinanceManagerAPI from "../../FinanceManagerAPI";

const {getExpenseForGivenMonth, getIncomeForGivenMonth} = FinanceManagerAPI
export default function BudgetPlanningManagePage() {
    const [monthYear, setMonthYear] = useState(new Date())
    const [expenses, setExpenses] = useState([])
    const [incomes, setIncomes] = useState([])
    const [expenseData, setExpenseData] = useState(new Map())
    const [incomeData, setIncomeData] = useState(new Map())
    const [reducedBills, setReducedBills] = useState(0)
    const [increasedBills, setIncreasedBills] = useState(0)
    const [reducedGrocery, setReducedGrocery] = useState(0)
    const [increasedGrocery, setIncreasedGrocery] = useState(0)
    const [reducedInsurances, setReducedInsurances] = useState(0)
    const [increasedInsurances, setIncreasedInsurances] = useState(0)
    const [reducedTax, setReducedTax] = useState(0)
    const [increasedTax, setIncreasedTax] = useState(0)
    const [reducedInvestment, setReducedInvestment] = useState(0)
    const [increasedInvestment, setIncreasedInvestment] = useState(0)
    const [reducedOther, setReducedOther] = useState(0)
    const [increasedOther, setIncreasedOther] = useState(0)
    const [reducedTotalExpense, setReducedTotalExpense] = useState(0)
    const [increasedTotalExpense, setIncreasedTotalExpense] = useState(0)
    const [reducedRefunds, setReducedRefunds] = useState(0)
    const [increasedRefunds, setIncreasedRefunds] = useState(0)
    const [reducedSalary, setReducedSalary] = useState(0)
    const [increasedSalary, setIncreasedSalary] = useState(0)
    const [reducedPrizeMoney, setReducedPrizeMoney] = useState(0)
    const [increasedPrizeMoney, setIncreasedPrizeMoney] = useState(0)
    const [reducedReturns, setReducedReturns] = useState(0)
    const [increasedReturns, setIncreasedReturns] = useState(0)
    const [reducedGift, setReducedGift] = useState(0)
    const [increasedGift, setIncreasedGift] = useState(0)
    const [reducedTotalIncome, setReducedTotalIncome] = useState(0)
    const [increasedTotalIncome, setIncreasedTotalIncome] = useState(0)
    useEffect(() => {
        axios.get(getExpenseForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
        .then((response) => {
            setExpenses(response.data)   
        })
        .catch((error) => {console.error()});
    },[monthYear]);
    useEffect(() => {
        let bills = 0.00
        let grocery = 0.00
        let insurances = 0.00
        let tax = 0.00
        let investment = 0.00
        let other = 0.00
        expenses.map((e) => {
            bills = bills + e.bills_and_utilities
            grocery = grocery + e.grocery_and_food
            insurances = insurances + e.insurances
            tax = tax + e.tax
            investment = investment + e.investments
            other = other + e.other_purchases
        })
        let exp = new Map()
        exp.set("Bills and Utilities", bills)
        exp.set("Grocery and Food", grocery)
        exp.set("Insurances", insurances)
        exp.set("Tax", tax)
        exp.set("Investment", investment)
        exp.set("Other Purchases", other)
        exp.set("Total", bills+grocery+insurances+tax+investment+other)
        setExpenseData(exp)
        setReducedTotalExpense(exp.get("Total"))
        setIncreasedTotalExpense(exp.get("Total"))
    },[monthYear, expenses]);
    useEffect(() => {
        axios.get(getIncomeForGivenMonth(1, monthYear.getMonth()+1, monthYear.getFullYear()))
        .then((response) => {
            setIncomes(response.data)
        })
        .catch((error) => {console.error()});
    }, [monthYear])
    useEffect(() => {
        let refunds = 0.00 
        let salary = 0.00
        let prizeMoney = 0.00
        let returns = 0.00
        let gifts = 0.00
        incomes.map((i) => {
            refunds = refunds + i.refunds
            salary = salary + i.salary
            prizeMoney = prizeMoney + i.prize_money
            returns = returns + i.returns
            gifts = gifts + i.gifts
        })
        let inc = new Map()
        inc.set("Refunds", refunds)
        inc.set("Salary", salary)
        inc.set("Prize Money", prizeMoney)
        inc.set("Returns", returns)
        inc.set("Gifts", gifts)
        inc.set("Total", refunds+salary+prizeMoney+returns+gifts)
        setIncomeData(inc)
        setReducedTotalIncome(inc.get("Total"))
        setIncreasedTotalIncome(inc.get("Total"))
    },[monthYear, incomes]);
    useEffect(() => {
        setReducedTotalExpense(expenseData.get('Total')  
                            -(expenseData.get("Bills and Utilities")*reducedBills/100) 
                            -(expenseData.get("Grocery and Food")*reducedGrocery/100)
                            -(expenseData.get("Insurances")*reducedInsurances/100)
                            -(expenseData.get("Tax")*reducedTax/100)
                            -(expenseData.get("Investment")*reducedInvestment/100)
                            -(expenseData.get("Other Purchases")*reducedOther/100))
    },[reducedBills, reducedGrocery, reducedInsurances, reducedTax, reducedInvestment, reducedOther])
    useEffect(() => {
        setIncreasedTotalExpense( expenseData.get('Total') + 
                            (expenseData.get("Bills and Utilities")*increasedBills/100)
                            +(expenseData.get("Grocery and Food")*increasedGrocery/100)
                            +(expenseData.get("Insurances")*increasedInsurances/100)
                            +(expenseData.get("Tax")*increasedTax/100)
                            +(expenseData.get("Investment")*increasedInvestment/100)
                            +(expenseData.get("Other Purchases")*increasedOther/100))
    },[increasedBills, increasedGrocery, increasedInsurances, increasedTax, increasedInvestment, increasedOther])
    useEffect(() => {
        setReducedTotalIncome(incomeData.get('Total')  
                            -(incomeData.get("Refunds")*reducedRefunds/100) 
                            -(incomeData.get("Salary")*reducedSalary/100)
                            -(incomeData.get("Prize Money")*reducedPrizeMoney/100)
                            -(incomeData.get("Returns")*reducedReturns/100)
                            -(incomeData.get("Gifts")*reducedGift/100))
    },[reducedRefunds, reducedSalary, reducedPrizeMoney, reducedReturns, reducedGift])
    useEffect(() => {
        setIncreasedTotalIncome(incomeData.get('Total')  
                            +(incomeData.get("Refunds")*increasedRefunds/100) 
                            +(incomeData.get("Salary")*increasedSalary/100)
                            +(incomeData.get("Prize Money")*increasedPrizeMoney/100)
                            +(incomeData.get("Returns")*increasedReturns/100)
                            +(incomeData.get("Gifts")*increasedGift/100))
    },[increasedRefunds, increasedSalary, increasedPrizeMoney, increasedReturns, increasedGift])
    const handleReset = () =>{
        setReducedBills(0)
        setIncreasedBills(0)
        setReducedGrocery(0)
        setIncreasedGrocery(0)
        setReducedInsurances(0)
        setIncreasedInsurances(0)
        setReducedTax(0)
        setIncreasedTax(0)
        setReducedInvestment(0)
        setIncreasedInvestment(0)
        setReducedOther(0)
        setIncreasedOther(0)
        setReducedRefunds(0)
        setIncreasedRefunds(0)
        setReducedSalary(0)
        setIncreasedSalary(0)
        setReducedPrizeMoney(0)
        setIncreasedPrizeMoney(0)
        setReducedReturns(0)
        setIncreasedReturns(0)
        setReducedGift(0)
        setIncreasedGift(0)
    }
    return (
        <>
            <div className="time">
                <div className="time__title">Please select a month:</div>
                <div className="time__month">
                    <DatePicker
                        value={monthYear}
                        selected={monthYear}
                        onChange={(date) => setMonthYear(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                    />
                </div>
                <div className="time__button">
                    <button className="reset__button" onClick={handleReset}>RESET</button>
                </div>
            </div>
            <div className="expense">
                <div className="expense__header-title">
                    <label className="expense__cell">Expenses</label>
                    <label className="expense__cell">Amount</label>
                    <label className="expense__cell">Reduce</label>
                    <label className="expense__cell">Increase</label>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Bills and Utility</label>
                    <label className="expense__cell">{expenseData.get("Bills and Utilities")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedBills||0}
                        name="expense_reduce_bills"
                        onChange={(event)=> setReducedBills(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedBills||0}
                        name="expense_increase_bills"
                        onChange={(event)=> setIncreasedBills(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Grocery and Food</label>
                    <label className="expense__cell">{expenseData.get("Grocery and Food")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedGrocery||0}
                        name="expense_reduce_grocery"
                        onChange={(event)=> setReducedGrocery(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedGrocery||0}
                        name="expense_increase_grocery"
                        onChange={(event)=> setIncreasedGrocery(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Insurances</label>
                    <label className="expense__cell">{expenseData.get("Insurances")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedInsurances||0}
                        name="expense_reduce_insurance"
                        onChange={(event)=> setReducedInsurances(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedInsurances||0}
                        name="expense_increase_insurance"
                        onChange={(event)=> setIncreasedInsurances(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Tax</label>
                    <label className="expense__cell">{expenseData.get("Tax")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedTax||0}
                        name="expense_reduce_tax"
                        onChange={(event)=> setReducedTax(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedTax||0}
                        name="expense_increase_tax"
                        onChange={(event)=> setIncreasedTax(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Investments</label>
                    <label className="expense__cell">{expenseData.get("Investment")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedInvestment||0}
                        name="expense_reduce_invetments"
                        onChange={(event)=> setReducedInvestment(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedInvestment||0}
                        name="expense_increase_investments"
                        onChange={(event)=> setIncreasedInvestment(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Other Purchases</label>
                    <label className="expense__cell">{expenseData.get("Other Purchases")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedOther||0}
                        name="expense_reduce_other"
                        onChange={(event)=> setReducedOther(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedOther||0}
                        name="expense_increase_other"
                        onChange={(event)=> setIncreasedOther(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Total</label>
                    <label className="expense__cell">{expenseData.get("Total")}</label>
                    <label className="expense__cell">{reducedTotalExpense}</label>
                    <label className="expense__cell">{increasedTotalExpense}</label>
                </div>
            </div>
            <div className="expense">
                <div className="expense__header-title">
                    <label className="expense__cell">Incomes</label>
                    <label className="expense__cell">Amount</label>
                    <label className="expense__cell">Reduce</label>
                    <label className="expense__cell">Increase</label>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Refunds</label>
                    <label className="expense__cell">{incomeData.get("Refunds")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedRefunds||0}
                        name="income_reduce_refunds"
                        onChange={(event)=> setReducedRefunds(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedRefunds||0}
                        name="income_increase_refunds"
                        onChange={(event)=> setIncreasedRefunds(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Salary</label>
                    <label className="expense__cell">{incomeData.get("Salary")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedSalary||0}
                        name="income_reduce_salary"
                        onChange={(event)=> setReducedSalary(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedSalary||0}
                        name="income_increase_salary"
                        onChange={(event)=> setIncreasedSalary(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Prize Money</label>
                    <label className="expense__cell">{incomeData.get("Prize Money")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedPrizeMoney||0}
                        name="income_reduce_prize"
                        onChange={(event)=> setReducedPrizeMoney(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedPrizeMoney||0}
                        name="income_increase_prize"
                        onChange={(event)=> setIncreasedPrizeMoney(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Returns</label>
                    <label className="expense__cell">{incomeData.get("Returns")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedReturns||0}
                        name="income_reduce_returns"
                        onChange={(event)=> setReducedReturns(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedReturns||0}
                        name="income_increase_returns"
                        onChange={(event)=> setIncreasedReturns(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Gifts</label>
                    <label className="expense__cell">{incomeData.get("Gifts")}</label>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={reducedGift||0}
                        name="income_reduce_gifts"
                        onChange={(event)=> setReducedGift(event.target.value)}
                    />
                    </div>
                    <div className="expense__cell">
                    <input
                        type="text"
                        className="expense__input"
                        value={increasedGift||0}
                        name="income_increase_gifts"
                        onChange={(event)=> setIncreasedGift(event.target.value)}
                    />
                    </div>
                </div>
                <div className="expense__header">
                    <label className="expense__cell">Total</label>
                    <label className="expense__cell">{incomeData.get("Total")}</label>
                    <label className="expense__cell">{reducedTotalIncome}</label>
                    <label className="expense__cell">{increasedTotalIncome}</label>
                </div>
            </div>
            <div className="suggestion">
                <label className="suggestion__label">You can try to save upto ${increasedTotalIncome-reducedTotalExpense} amount with reduction of ${reducedTotalExpense} in expense and increment of ${increasedTotalIncome} in income</label>
            </div>
        </>
    )
}