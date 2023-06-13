import Questions from "./routes/Questions";
import Dashboard from "./routes/Dashboard/Dashboard";
import Subjects from "./routes/Subjects";

import ErrorPage from "./routes/ErrorPage";
import AddPlans from "./routes/Plans/AddPlans";
import PlanDetails from "./routes/Plans/PlanDetails";

import './App.css';
import Navbar1 from "./components/Navbar1";
import Sidebar  from "./components/Sidebar";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import PageLayout from "./routes/PageLayout";
import Settings from "./routes/Settings";
import DropdownMenu from "./components/ui/DropdownMenu";

import CustomDropdown from "./components/form/CustomDropdown";

import PlanPopup from "./routes/Plans/PlanPopup";
import ActionAlerts from "./components/ui/actionAlerts";


import PasswordResetForm from './routes/PasswordReset/PasswordResetForm';
import Signup from "./routes/SignupForm/signup";
import AdminsForm from "./routes/CurrentAdmins/AdminsForm";
import Requests from "./routes/ViewRequests/Requests";

import Login from "./routes/LoginForm/Login"






function App() {
  
  return (
   <>
       <Sidebar />
     
       
         
{/*       
        <Navbar1 /> */}
        <Routes>

        <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/questions" element={<Questions/>}/>
          <Route path="/subjects" element={<Subjects/>}/>
          <Route path="/addPlans" element={<AddPlans/>}/>
          
          
          <Route path="/planDe" element={<PlanDetails/>}/>


          
        
        <Route path="/passwordResetForm" element={<PasswordResetForm />}/>
<Route path="/signup" element={<Signup />} />
<Route path="/authentication"element={<AdminsForm/>}/>
<Route path="/requests"element={<Requests/>}/>
        
          
<Route path="/settings" element={<Settings/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
          
          
        </Routes>
        {/* <Popup/> */}
        {/* <PageLayout/> */}
        
        {/* <CustomDropdown/> */}

        {/* <CustomDropdown/> */}
        {/* {<AddPlans/>} */}
        {/* <PlanPopup/> */}
        {/* <ActionAlerts/> */}
        </> 
  );
}

export default App;
