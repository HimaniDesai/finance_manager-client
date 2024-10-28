import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<LandingPage/>}></Route>
        <Route path='/app' element={<App/>}></Route>
        // <Route path='/app/*' element={<App/>}></Route>
      // </Routes>
    // </BrowserRouter> */}
      <App/>
  </StrictMode>,
)
