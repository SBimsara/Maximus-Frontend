import Questions from "./routes/Questions";
import Dashboard from "./routes/Dashboard";
import Subjects from "./routes/Subjects";
//import PlanDetails from "./routes/Plans/PlanDetails";
import ErrorPage from "./routes/ErrorPage";
import AddPlans from "./routes/Plans/AddPlans";
import PlanDetails from "./routes/Plans/PlanDetails";

import './App.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popup from "./routes/Plans/Popup";

import PageLayout from "./routes/PageLayout";
import Settings from "./routes/Settings";
import DropdownMenu from "./components/ui/DropdownMenu";
import Login from "./routes/LoginForm/Login";
import PasswordResetForm from './routes/PasswordReset/PasswordResetForm';
import Signup from "./routes/SignupForm/signup";
import AdminsForm from "./routes/CurrentAdmins/AdminsForm";
import Requests from "./routes/ViewRequests/Requests";


import CustomDropdown from "./components/form/CustomDropdown";

import PlanPopup from "./routes/Plans/PlanPopup";
import ActionAlerts from "./components/ui/actionAlerts";








function App() {

  return (
    <>
      {/* <DropdownMenu/> */}
      {/*{<Sidebar/>}*/}
      {/* {<Navbar />} */}
      <Routes>
        {/*<Route path="/" element={<Dashboard/>} />
        <Route path="/questions" element={<Questions/>}/>
          <Route path="/subjects" element={<Subjects/>}/>
          <Route path="/addPlans" element={<AddPlans/>}/>
  <Route path="/settings" element={<Settings/>}/>*/}
        <Route path="/login" element={<Login />}/>
        <Route path="/passwordResetForm" element={<PasswordResetForm />}/>
<Route path="/signup" element={<Signup />} />
<Route path="/authentication"element={<AdminsForm/>}/>
<Route path="/requests"element={<Requests/>}/>
        {/*<Route path="/*" element={<ErrorPage/>}/>*/}
          <Route path="/planDe" element={<PlanDetails/>}/>
          
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
