import React, { useEffect } from 'react'
import { ClerkProvider, SignedIn,SignedOut,SignIn,SignUp } from '@clerk/clerk-react'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes} from "react-router-dom";
import DepositsPage from './pages/dashboard/Deposits';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './pages/layout/AuthLayout';
import HistoryPage from './pages/dashboard/History';
import ManageCardsPage from './pages/dashboard/ManageCards';
import TransactionPage from './pages/dashboard/Transactions';
import SettingsPage from './pages/dashboard/Settings';
import AOS from 'aos';
function App() {

  if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
  
  const navigate=useNavigate();

  useEffect(()=>{
AOS.init();
  },[]);

  return (
<ClerkProvider publishableKey={clerkPubKey} navigate={(to)=>navigate(to)}>
 <Routes>
        <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/deposits" element={<DepositsPage/>}/>
    <Route path="/history" element={<HistoryPage/>}/>
<Route path="/manage-cards" element={<ManageCardsPage/>}/>
<Route path="/transactions" element={<TransactionPage/>}/>
<Route path="/settings" element={<SettingsPage/>}/>

        <Route
          path="/sign-in/*"
      element={<AuthLayout><SignIn redirectUrl={'/dashboard'} routing="path" path="/sign-in" /></AuthLayout>}
        />
        <Route
          path="/sign-up/*"
  element={<AuthLayout><SignUp redirectUrl={'/dashboard'} routing="path" path="/sign-up" /></AuthLayout>}
        />
        <Route
      path="/dashboard"
          element={
          <>
          <SignedIn>
          <Dashboard/>
          
            </SignedIn>
      <SignedOut>
              <Home/>
           </SignedOut>
          </>
          }
        />
      </Routes>
      </ClerkProvider>
  )
}

export default App
