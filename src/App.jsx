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
import LandingPage from './pages/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import EditExpenseItem from './pages/EditExpenseItem/EditExpenseItem'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LandingPage/>}></Route>
          <Route path='/' element={<Redirect/>}></Route>
          <Route path='/budgetPlanning/*' element={[<Header/>,<Subheader feature={'budgetPlanning'} options={['Dashboard', 'Plan Budget']}/>, <Footer/>]}></Route>
          <Route path='/expenseTracking/*' element={[<Header/>,<Subheader feature={'expenseTracking'} options={['Dashboard', 'Manage Expense']}/>, <Footer/>]}></Route>
          <Route path='/portfolioAnalysis/*' element={[<Header/>,<Subheader feature={'portfolioAnalysis'} options={['Dashboard', 'Manage Investments']}/>, <Footer/>]}></Route>
          <Route path='/budgetPlanning/dashboard' element={[
            <Header/>,
            <Subheader feature={'budgetPlanning'} options={['Dashboard', 'Plan Budget']}/>,
            <BudgetPlanningDashboardPage/>, <Footer/>]}></Route>
          <Route path='/expenseTracking/dashboard' element={[
            <Header/>,
            <Subheader feature={'expenseTracking'} options={['Dashboard', 'Manage Expense']}/>,
            <ExpenseTrackingDashboardPage/>, <Footer/>]}></Route>
          <Route path='/portfolioAnalysis/dashboard' element={[
            <Header/>,
            <Subheader feature={'portfolioAnalysis'} options={['Dashboard', 'Manage Investments']}/>,
            <PortfolioAnalysisDashboardPage/>, <Footer/>]}></Route>
          <Route path='/budgetPlanning/planBudget' element={[
            <Header/>,
            <Subheader feature={'budgetPlanning'} options={['Dashboard', 'Plan Budget']}/>,
            <BudgetPlanningManagePage/>, <Footer/>]}></Route>
          <Route path='/expenseTracking/manageExpense/' element={[
            <Header/>,
            <Subheader feature={'expenseTracking'} options={['Dashboard', 'Manage Expense']}/>,
            <ExpenseTrackingManagePage/>, <Footer/>]}></Route>
          <Route path='/expenseTracking/manageExpense/editExpense/:idEdit' element={[
            <Header/>,
            <Subheader feature={'expenseTracking'} options={['Dashboard', 'Manage Expense']}/>,
            <EditExpenseItem/>, <Footer/>
            ]}></Route>
          <Route path='/portfolioAnalysis/manageInvestment' element={[
            <Header/>,
            <Subheader feature={'portfolioAnalysis'} options={['Dashboard', 'Manage Investments']}/>,
            <PortfolioAnalysisManagePage/>, <Footer/>]}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
