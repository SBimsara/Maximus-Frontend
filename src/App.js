
import Dashboard from "./routes/Dashboard/Dashboard";

import Questions from "./routes/Questions/Questions";

import Subjects from "./routes/Subjects/Subjects";
import Lessons from "./routes/Lessons/Lessons";


import ErrorPage from "./routes/ErrorPage";
import Statistics from "./routes/Statistics/Statistics";
import Stat1 from "./routes/Statistics/Stat1/Stat1";
import Stat0 from "./routes/Statistics/Stat0/Stat0";
import Nav from "./routes/Statistics/navBar/Nav";


import AddPlans from "./routes/Plans/AddPlans";
import PlanDetails from "./routes/Plans/PlanDetails";


import './App.css';
import Navbar1 from "./components/Navbar1";
import Sidebar  from "./components/Sidebar";

import { BrowserRouter, Link,Route, Routes } from "react-router-dom";


import PageLayout from "./routes/PageLayout";
import Settings from "./routes/Settings";
import DropdownMenu from "./components/ui/DropdownMenu";

import Navigation from "./routes/Statistics/navBar/Navigation";

import CustomDropdown from "./components/form/CustomDropdown";

import PlanPopup from "./routes/Plans/PlanPopup";

import PasswordResetForm from './routes/PasswordReset/PasswordResetForm';
import Signup from "./routes/SignupForm/signup";
import AdminsForm from "./routes/CurrentAdmins/AdminsForm";
import Requests from "./routes/ViewRequests/Requests";

import Login from "./routes/LoginForm/Login"

import AddLessonsPopup from "./routes/Lessons/AddLessonspopup";


function App() {
  return (
    <>
      {/* <DropdownMenu/> */}

  
       
     
       
        <Navigation /> 
       <Sidebar />
        {/*<Navbar1 /> */}
        <Routes>

        <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/questions" element={<Questions/>}/>
          <Route path="/subjects" element={<Subjects/>}/>
          <Route path="/addPlans" element={<AddPlans/>}/>
          <Route path="/lessons" element={<Lessons />} />
          
          <Route path="/planDe" element={<PlanDetails/>}/>


          
        
        <Route path="/passwordResetForm" element={<PasswordResetForm />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/authentication"element={<AdminsForm/>}/>
        <Route path="/requests"element={<Requests/>}/>
        
          
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/*" element={<Dashboard />}/>
         <Route path="/statistics" element={<Statistics />} />
        <Route path="/statistics/Stat1" element={<Stat1 />} exact />
        <Route path="/statistics/Stat0" element={<Stat0 />} />
          
          
        </Routes>
        
        </> 
     
  

       
     
  

  );
}

export default App;
