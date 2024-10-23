const api = `http://localhost:8080`
const FinanceManagerAPI = {
    // API URL STRINGS FOR CALL USING AXIOS
    getExpenseForGivenMonth: (user_id, month, year) => api+ `/expenses/` + `${user_id}` + `/` + `${month}` + `/` + `${year}`,
    getIncomeForGivenMonth: (user_id, month, year) => api+ `/incomes/` + `${user_id}` + `/` + `${month}` + `/` + `${year}`
}

export default FinanceManagerAPI;