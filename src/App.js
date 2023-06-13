import Questions from "./routes/Questions";
import Dashboard from "./routes/Dashboard";
import Subjects from "./routes/Subjects";
//import PlanDetails from "./routes/Plans/PlanDetails";
import ErrorPage from "./routes/ErrorPage";
import Statistics from "./routes/Statistics/Statistics";
import Stat1 from "./routes/Statistics/Stat1/Stat1";
import Stat0 from "./routes/Statistics/Stat0/Stat0";
import Nav from "./routes/Statistics/navBar/Nav";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Popup from "./routes/Plans/Popup";
import AddPlans from "./routes/Plans/AddPlans";
import PlanDetails from "./routes/Plans/PlanDetails";
import './App.css';
import Sidebar  from "./components/Sidebar";
import Navbar  from "./components/Navbar";


import PageLayout from "./routes/PageLayout";
import Settings from "./routes/Settings";
import DropdownMenu from "./components/ui/DropdownMenu";

import Navigation from "./routes/Statistics/navBar/Navigation";

import CustomDropdown from "./components/form/CustomDropdown";

import PlanPopup from "./routes/Plans/PlanPopup";
import ActionAlerts from "./components/ui/actionAlerts";


function App() {
  return (
    <>
      {/* <DropdownMenu/> */}
      <Sidebar />
      {/* <Navbar /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/questions" element={<Questions/>} />
        <Route path="/subjects" element={<Subjects/>} />
        <Route path="/addPlans" element={<AddPlans/>}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/planDe" element={<PlanDetails/>}/>
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/statistics/Stat1" element={<Stat1 />} exact />
        <Route path="/statistics/Stat0" element={<Stat0 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      {/* <Popup/> */}
      {/* <PageLayout/> */}
    </>
  );
}

export default App;
