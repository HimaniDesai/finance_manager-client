import appLogo from './assets/logo/logo.png'
import './App.scss'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Redirect from './components/Redirect/Redirect'
import Subheader from './components/SubHeader/Subheader'
import BudgetPlanningDashboardPage from './pages/BudgetPlanningDashboardPage/BudgetPlanningDashboardPage'
import BudgetPlanningManagePage from './pages/BudgetPlanningManagePage/BudgetPlanningManagePage'
import ExpenseTrackingDashboardPage from './pages/ExpenseTrackingDashboardPage/ExpenseTrackingDashboardPage'
import ExpenseTrackingManagePage from './pages/ExpenseTrackingManagePage/ExpenseTrackingManagePage'
import PortfolioAnalysisDashboardPage from './pages/PortfolioAnalysisDashboardPage/PortfolioAnalysisDashboardPage'
import PortfolioAnalysisManagePage from './pages/PortfolioAnalysisManagePage/PortfolioAnalysisManagePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Redirect/>}></Route>
          <Route path='/budgetPlanning/*' element={<Subheader feature={'budgetPlanning'} options={['Dashboard', 'Plan Budget']}/>}></Route>
          <Route path='/expenseTracking/*' element={<Subheader feature={'expenseTracking'} options={['Dashboard', 'Manage Expense']}/>}></Route>
          <Route path='/portfolioAnalysis/*' element={<Subheader feature={'portfolioAnalysis'} options={['Dashboard', 'Manage Investments']}/>}></Route>
          <Route path='/budgetPlanning/dashboard' element={[
            <Subheader feature={'budgetPlanning'} options={['Dashboard', 'Plan Budget']}/>,
            <BudgetPlanningDashboardPage/>]}></Route>
          <Route path='/expenseTracking/dashboard' element={[
            <Subheader feature={'expenseTracking'} options={['Dashboard', 'Manage Expense']}/>,
            <ExpenseTrackingDashboardPage/>]}></Route>
          <Route path='/portfolioAnalysis/dashboard' element={[
            <Subheader feature={'portfolioAnalysis'} options={['Dashboard', 'Manage Investments']}/>,
            <PortfolioAnalysisDashboardPage/>]}></Route>
          <Route path='/budgetPlanning/planBudget' element={[
            <Subheader feature={'budgetPlanning'} options={['Dashboard', 'Plan Budget']}/>,
            <BudgetPlanningManagePage/>]}></Route>
          <Route path='/expenseTracking/manageExpense' element={[
            <Subheader feature={'expenseTracking'} options={['Dashboard', 'Manage Expense']}/>,
            <ExpenseTrackingManagePage/>]}></Route>
          <Route path='/portfolioAnalysis/manageInvestment' element={[
            <Subheader feature={'portfolioAnalysis'} options={['Dashboard', 'Manage Investments']}/>,
            <PortfolioAnalysisManagePage/>]}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
