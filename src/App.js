import Questions from "./routes/Questions";
import Dashboard from "./routes/Dashboard";
import Subjects from "./routes/Subjects";
import Plans from "./routes/Plans/PlanDetails";
import ErrorPage from "./routes/ErrorPage";



import './App.css';
import Sidebar  from "./components/Sidebar";
import Navbar  from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popup from "./routes/Plans/Popup";

import PageLayout from "./routes/PageLayout";
import Settings from "./routes/Settings";
import DropdownMenu from "./components/ui/DropdownMenu";

import CustomDropdown from "./components/form/CustomDropdown";
import AddPlans from "./routes/Plans/AddPlans";








function App() {
  
  return (
   <>
        {/* <DropdownMenu/> */}
        {/* <Sidebar/> */}
        {/* <Navbar/> */}
        {/* <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/questions" element={<Questions/>}/>
          <Route path="/subjects" element={<Subjects/>}/>
          <Route path="/plans" element={<Plans/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes> */}
        {/* <Popup/> */}
        {/* <PageLayout/> */}
        {/* <CustomDropdown/> */}

        {/* <CustomDropdown/> */}
        {<AddPlans/>}
        </> 
  );
}

export default App;
