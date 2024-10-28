import React, { useEffect, useState } from "react";
import './EditIncomeItem.scss'
import arrowBack from '../../assets/icons/arrow_back-24px.svg'
import { Link, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import FinanceManagerAPI from "../../FinanceManagerAPI";
import axios from "axios";
import {dateFormat} from '../../Utilities'

const {editIncome, getIncomeById} = FinanceManagerAPI;

export default function EditIncomeItem() {
    const navigate = useNavigate();
    const { idEdit } = useParams();
    const [refunds, setRefunds] = useState(0)
    const [salary, setSalary] = useState(0)
    const [returns, setReturns] = useState(0)
    const [prizeMoney, setPrizeMoney] = useState(0)
    const [gifts, setGifts] = useState(0)
    const [incomeDate, setIncomeDate] = useState(new Date())
    useEffect(()=>{
        const fetchIncomeData = async() => {
            try{
                const response = await axios.get(getIncomeById(idEdit))
                const incomeData = response.data[0] 
                setRefunds(incomeData.refunds)
                setSalary(incomeData.salary)
                setReturns(incomeData.returns)
                setPrizeMoney(incomeData.prize_money)
                setGifts(incomeData.gifts)
                setIncomeDate(dateFormat(incomeData.income_date))
                
            }catch (error) {
                console.error("Unable to update income:", error);
                setError(true);
            }
        }
        fetchIncomeData() 
         
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const requestBody = {
                refunds: refunds,
                salary: salary,
                returns: returns,
                prize_money: prizeMoney,
                gifts: gifts,
                income_date: incomeDate,
            };
      
            await axios.put(editIncome(idEdit), requestBody);
            navigate(-1);
          } catch (error) {
            console.error("Unable to update income:", error);
            setError(true);
          }
    }
    const handleRefunds = (event) => setRefunds(event.target.value)
    const handleSalary = (event) => setSalary(event.target.value )
    const handlePrizeMoney = (event) => setPrizeMoney(event.target.value )
    const handleReturns = (event) => setReturns(event.target.value )
    const handleGifts = (event) => setGifts(event.target.value )
    const handleIncomeDate = (event) => setIncomeDate(event.target.value )
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
            <div className="edit_expense-title"> Edit Income</div>
        </div>
        <div>
        <form className="edit_form" onSubmit={handleSubmit}>
            <div className="edit_expense">
                <label className="edit_expense-label">Income Date</label>
                <DatePicker
                    showIcon
                    value={incomeDate}
                    className="edit_expense-field--date"
                    selected={incomeDate}
                    onChange={handleIncomeDate}
                 />
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Refunds</label>
                <div className="edit_expense-input">
                    <input type="text" name="bills_and_utilities" className="edit_expense-field" value={refunds} onChange={handleRefunds} />
                </div>
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Salary</label>
                <div className="edit_expense-input">
                <input type="text" name="grocery_and_food" className="edit_expense-field" value={salary} onChange={handleSalary} />
                </div>
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Prize Money</label>
                <div className="edit_expense-input">
                <input type="text" name="insurances" className="edit_expense-field" value={prizeMoney} onChange={handlePrizeMoney} />
                </div>
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Returns</label>
                <div className="edit_expense-input">
                <input type="text" name="tax" className="edit_expense-field" value={returns} onChange={handleReturns} />
                </div>
            </div>
            <div className="edit_expense">
                <label className="edit_expense-label">Gifts</label>
                <div className="edit_expense-input">
                <input type="text" name="investments" className="edit_expense-field" value={gifts} onChange={handleGifts} />
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