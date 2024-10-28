import React, { useEffect, useState } from "react";
import './EditExpenseItem.scss'
import arrowBack from '../../assets/icons/arrow_back-24px.svg'
import { Link, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import FinanceManagerAPI from "../../FinanceManagerAPI";
import axios from "axios";
import {dateFormat} from '../../Utilities'

const {editExpense, getExpenseById} = FinanceManagerAPI;

export default function EditExpenseItem() {
    const navigate = useNavigate();
    const { idEdit } = useParams();
    const [billsAndUtilities, setBillsAndUtilities] = useState(0)
    const [groceryAndFood, setGroceryAndFood] = useState(0)
    const [insurances, setInsurances] = useState(0)
    const [tax, setTax] = useState(0)
    const [investments, setInvestments] = useState(0)
    const [otherPurchases, setOtherPurchases] = useState(0)
    const [expenseDate, setExpenseDate] = useState(new Date())
    useEffect(()=>{
        const fetchExpenseData = async() => {
            try{
                const response = await axios.get(getExpenseById(idEdit))
                const expenseData = response.data[0] 
                setBillsAndUtilities(expenseData.bills_and_utilities)
                setGroceryAndFood(expenseData.grocery_and_food)
                setInsurances(expenseData.insurances)
                setTax(expenseData.tax)
                setInvestments(expenseData.investments)
                setOtherPurchases(expenseData.other_purchases)
                setExpenseDate((expenseData.expense_date))
                
            }catch (error) {
                console.error("Unable to update expense:", error);
                setError(true);
            }
        }
        fetchExpenseData() 
         
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const requestBody = {
                bills_and_utilities: billsAndUtilities,
                grocery_and_food: groceryAndFood,
                insurances: insurances,
                tax: tax,
                investments: investments,
                other_purchases: otherPurchases,
                expense_date: expenseDate,
            };
      
            await axios.put(editExpense(idEdit), requestBody);
            navigate(-1);
          } catch (error) {
            console.error("Unable to update expense:", error);
            setError(true);
          }
    }
    const handleBillsAndUtilities = (event) => setBillsAndUtilities(event.target.value)
    const handleGroceryAndFood = (event) => setGroceryAndFood(event.target.value )
    const handleInsurances = (event) => setInsurances(event.target.value )
    const handleTax = (event) => setTax(event.target.value )
    const handleInvestments = (event) => setInvestments(event.target.value )
    const handleOtherPurchases = (event) => setOtherPurchases(event.target.value )
    // const handleExpenseDate = (event) => setExpenseDate(event.target.value )
    return (
        <>
        <div className="edit_expense-header">
            <Link to={'/expenseTracking/manageExpense'}>
                <img 
                    className="edit_expense-image"
                    src={arrowBack}
                    alt="back_arrow"
                ></img>
            </Link>
            <div className="edit_expense-title"> Edit Expense</div>
        </div>
        <div>
        <form className="edit_form" onSubmit={handleSubmit}>
            <div className="edit_expense">
                <label className="edit_expense-label">Expense Date</label>
                <DatePicker
                    showIcon
                    value={expenseDate}
                    className="edit_expense-field--date"
                    selected={expenseDate}
                    onChange={(date) => setExpenseDate(date)}
                 />
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Bills And Utilities</label>
                <div className="edit_expense-input">
                    <input type="text" name="bills_and_utilities" className="edit_expense-field" value={billsAndUtilities} onChange={handleBillsAndUtilities} />
                </div>
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Grocery And Food</label>
                <div className="edit_expense-input">
                <input type="text" name="grocery_and_food" className="edit_expense-field" value={groceryAndFood} onChange={handleGroceryAndFood} />
                </div>
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Insurances</label>
                <div className="edit_expense-input">
                <input type="text" name="insurances" className="edit_expense-field" value={insurances} onChange={handleInsurances} />
                </div>
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Tax</label>
                <div className="edit_expense-input">
                <input type="text" name="tax" className="edit_expense-field" value={tax} onChange={handleTax} />
                </div>
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Investments</label>
                <div className="edit_expense-input">
                <input type="text" name="investments" className="edit_expense-field" value={investments} onChange={handleInvestments} />
                </div>
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Other Purchases</label>
                <div className="edit_expense-input">
                <input type="text" name="other_purchases" className="edit_expense-field" value={otherPurchases} onChange={handleOtherPurchases} />
                </div>
            </div>
            <div className="edit_expense-last">
                <button className="edit_expense-button" type="button" onClick={()=>{navigate(-1)}}>CANCEL</button>
                <button className="edit_expense-button" type="submit">SUBMIT</button>
            </div>
        </form>
        </div>
        </>
    )
}