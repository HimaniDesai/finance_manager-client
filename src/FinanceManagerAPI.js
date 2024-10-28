const api = `http://localhost:8080`
const FinanceManagerAPI = {
    // API URL STRINGS FOR CALL USING AXIOS
    getExpenseForGivenMonth: (user_id, month, year) => api+ `/expenses/` + `${user_id}` + `/` + `${month}` + `/` + `${year}`,
    getIncomeForGivenMonth: (user_id, month, year) => api+ `/incomes/` + `${user_id}` + `/` + `${month}` + `/` + `${year}`,
    getExpenseForGivenYear: (user_id, year) => api+ `/expenses/` + `${user_id}` + `/` + `${year}`,
    getIncomeForGivenYear: (user_id, year) => api+ `/incomes/` + `${user_id}` + `/` + `${year}`,
    editExpense: (id) =>  api+ `/expenses/`+ `${id}`,
    getExpenseById: (id) => api+ `/expenses/`+ `${id}`,
}

export default FinanceManagerAPI;