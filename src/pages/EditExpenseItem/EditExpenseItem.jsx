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
    const [bills_and_utilities, setBillsAndUtilities] = useState(0)
    const [grocery_and_food, setGroceryAndFood] = useState(0)
    const [insurances, setInsurances] = useState(0)
    const [tax, setTax] = useState(0)
    const [investments, setInvestments] = useState(0)
    const [other_purchases, setOtherPurchases] = useState(0)
    const [expense_date, setExpenseDate] = useState(new Date())
    useEffect(()=>{
        const fetchExpenseData = async() => {
            try{
                const response = await axios.get(getExpenseById(idEdit))
                const expenseData = response.data
                setBillsAndUtilities(expenseData.bills_and_utilities)
                setGroceryAndFood(expenseData.grocery_and_food)
                setInsurances(expenseData.insurances)
                setTax(expenseData.tax)
                setInvestments(expenseData.investments)
                setOtherPurchases(expenseData.other_purchases)
                setExpenseDate(dateFormat(expenseData.expense_date))
            }catch (error) {
                console.error("Unable to update expense:", error);
                setError(true);
            }
        }
        fetchExpenseData()    
    },[idEdit])
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const requestBody = {
                bills_and_utilities: bills_and_utilities,
                grocery_and_food: grocery_and_food,
                insurances: insurances,
                tax: tax,
                investments: investments,
                other_purchases: other_purchases,
                expense_date: expense_date,
                user_id:data.user_id
            };
      
            await axios.put(editExpense(idEdit), requestBody);
            navigate(-1);
          } catch (error) {
            console.error("Unable to update expense:", error);
            setError(true);
          }
    }
    return (
        <>
        <div className="edit_expense">
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Expense Date</label>
                <DatePicker
                    showIcon
                    value={expense_date}
                    selected={expense_date}
                    onChange={(date) => setExpenseDate(date)}
                 />
            </div>
            <div>
                <label>Bills And Utilities</label>
                <input type="text" name="bills_and_utilities" value={bills_and_utilities} onChange={setBillsAndUtilities(bills_and_utilities)} />
            </div>
            <div>
                <label>Grocery And Food</label>
                <input type="text" name="grocery_and_food" value={grocery_and_food} onChange={setGroceryAndFood(grocery_and_food)} />
            </div>
            <div>
                <label>Insurances</label>
                <input type="text" name="insurances" value={insurances} onChange={setInsurances(insurances)} />
            </div>
            <div>
                <label>Tax</label>
                <input type="text" name="tax" value={tax} onChange={setTax(tax)} />
            </div>
            <div>
                <label>Investments</label>
                <input type="text" name="investments" value={investments} onChange={setInvestments(investments)} />
            </div>
            <div>
                <label>Other Purchases</label>
                <input type="text" name="other_purchases" value={other_purchases} onChange={setOtherPurchases(other_purchases)} />
            </div>
            <div>
                <button type="button" onClick={()=>{navigate(-1)}}>CANCEL</button>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
        </div>
        </>
    )
}