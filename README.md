# Finance Manager <sub>_Budget. Track. Invest. Succed_</sub>

## Finance Management Application to track expenses, plan budget and analyze portfolio.

## Money is an important resource in an individual's life and the aim of the application is the understand the money flows by keeping track of income and expenditure. These insights can help a peron to get a hollistic view of their money and perform budget planning accordingly. This app also provides some basic insights on the users portfolio.

### User Profile
- User (Any individual)
    - looking for an app to track the expenses, plan on budget and view the insights 
    - analyzing portfolio based upon investments

### Features
-Login/SignUp
    - As a user, I want to be able to create an account to manage my expenses
    - As a user, I want to be able to login in my account to manage my expenses
- Expense Tracker
    - As a logged in user, I want to be able to add new expense/ income
    - As a logged in user, I want to be able to edit existing expense/ income
    - As a logged in user, I want to be able to delete existing expense/ income
    - As a logged in user, I want to be able to view charts for my monthly income and expense
- Budget Planner
    - As a logged in user, I want to be able to view charts for my yearly income and expenses
    - As a logged in user, I want to be able to perform budget planning by estimating relative increment/ decrement in my income or expense
- Portfolio Analysis
    - As a logged in user, I want to be able to view my protfolio chart for a given month
    - As a logged in user, I want to be able to add new investment to my portfolio
    - As a logged in user, I want to be able to terminate my existing investment 

## Implementation

### Tech Stack
- React
- JavaScript
- MySQL
- Express
- Client Libraries
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

### APIs
- [Alpha Vantage API](https://www.alphavantage.co/documentation/) will be used to get the stock data

### SiteMap
- Login/Signup Page
- (Default Landing Page) Budget Planning (Dashboard)
- Budget Planning (Plan Budget)
- Expense Tracker (Dashboard)
- Expense Tracker (Manage Expense) -> Edit, Add, Delete given expense/income
- Portfolio Analysis (Dashboard)
- Portfolio Analysis (Manage Investment) -> Add/ Terminate investment

### Mockups
#### Login/SignUp Page
![Login_Signup Page](https://github.com/user-attachments/assets/afda0680-d3bc-4cdd-8f2b-6e1b67de377b)

#### (Default Landing Page) Budget Planning (Dashboard)
![Landing-BudgetPlanning-Dashboard](https://github.com/user-attachments/assets/5e73d4ac-32c1-4b7c-b550-b8d50ea747c1)

#### Budget Planning (Plan Budget)
![BudgetPlanning-PlanBudget](https://github.com/user-attachments/assets/add8f83d-a185-4d9f-8bfb-6ed3d8d268f5)

#### Expense Tracker (Dashboard)
![ExpenseTracker-Dashboard](https://github.com/user-attachments/assets/a4fa0dba-2bd9-44ac-ab9d-c0ac1d0ede26)

#### Expense Tracker (Manage Expense) -> Edit, Add, Delete given expense/income
![ExpenseTracker-ManageExpenses](https://github.com/user-attachments/assets/ea74e191-f3a2-4790-80d9-8bbd0b79d8e8)

#### Portfolio Analysis (Dashboard)
![PortfolioAnalysis-Dashboard](https://github.com/user-attachments/assets/16382b0b-a3a7-4193-94ac-775b1b09be49)

#### Portfolio Analysis (Manage Investment) -> Add/ Terminate investment
![PortfolioAnalysis-ManageInvestments](https://github.com/user-attachments/assets/f8fc37c3-afc6-49bd-86b2-c52acb85cce4)


### Data
![EntityRelationshipModel](https://github.com/user-attachments/assets/dd4abf82-19a0-4b0f-8bc3-f5df61d4c8a7)

### Endpoints
> [!NOTE] Endpoins are not decided hence just a basic outline of API is provided based upon the features and functionality
- GET, PUT, POST and DELETE endpoints on Expense, Income and Portfolio tables.

### Roadmap
- Create client
    - react project with routes and boilerplate pages
- Create server
    - express project with routing, with placeholder 200 responses
- Create migrations
- Gather 35 sample expense and income entries for a user
- Gather sample of investments for user portfolio
- Create seeds with sample user data
- Deploy client and server projects so all commits will be reflected in production
- Feature: Create account
    - Implement register page + form
    - Create POST /users/register endpoint
- Feature: Login
    - Implement login page + form
    - Create POST /users/login endpoint
- Feature: Implement JWT tokens
    - Server: Update expected requests / responses on protected endpoints
    - Client: Store JWT in local storage, include JWT on axios calls
- Feature: View charts of expense/income for given year and month
      - Client: Fetch entries for a given time (month/ year) and display the plots
- Feature: View charts on income and expense particulars for given month
      - - Client: Fetch entries for a given time (year) and display the plots
- Feature: Add Income on a given date
      - Client: send a POST request to store the entry for given user
- Feature: Delete Income on a given data
      - Client: delete income entry for a given entryId
- Feature: Edit Income on a given date
      - Server: get income details from server for a particular entryId
      - Client: display the details for user to make changes
      - Server: for a put request update the income details for a given entryId
- Feature: Add Expense on a given date
      - Client: send a POST request to store the entry for given user
- Feature: Delete Expense on a given data
      - Client: delete expense entry for a given entryId
- Feature: Edit Expense on a given date
      - Server: get Expense details from server for a particular entryId
      - Client: display the details for user to make changes
      - Server: for a put request update the expense details for a given entryId
- Feature: Add a new investment
      - Server: add a new investment detail for given date
- Feature: Terminate an existing investment
      - Server: update the termination date for an investment
- Bug fixes
- DEMO DAY


## Nice to haves
- Implement better visualizations on the expense insights
- Forgot password functionality
- Unit and integration testting
- Serach functionality for expenses/income in Expense Tracker
- Get notifications if portfolio value increases from a set value
- Perform budget planning by considering the portfolio changes
