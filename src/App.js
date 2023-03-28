import Questions from "./routes/Questions";
import Dashboard from "./routes/Dashboard";
import Subjects from "./routes/Subjects";
import Plans from "./routes/Plans/Plans";
import ErrorPage from "./routes/ErrorPage";



import './App.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popup from "./routes/Plans/Popup";

import PageLayout from "./routes/PageLayout";
import Settings from "./routes/Settings";
import DropdownMenu from "./components/ui/DropdownMenu";
import Login from "./routes/Login";
import PasswordResetForm from './routes/PasswordResetForm';
import Signup from "./routes/Signup";
import AdminsForm from "./routes/AdminsForm";
import Requests from "./routes/Requests";








function App() {

  return (
    <>
      {/* <DropdownMenu/> */}
      {/*{<Sidebar/>}*/}
      {/*{<Navbar />}*/}
      <Routes>
        {/*<Route path="/" element={<Dashboard/>} />
        <Route path="/questions" element={<Questions/>}/>
          <Route path="/subjects" element={<Subjects/>}/>
          <Route path="/plans" element={<Plans/>}/>
  <Route path="/settings" element={<Settings/>}/>*/}
        <Route path="/login" element={<Login />}/>
        <Route path="/passwordResetForm" element={<PasswordResetForm />}/>
<Route path="/signup" element={<Signup />} />
{/*<Route path="/authentication"element={<AdminsForm/>}/>
<Route path="/requests"element={<Requests/>}/>*/}
        {/*<Route path="/*" element={<ErrorPage/>}/>*/}
      </Routes>
      {/* <Popup/> */}
      {/* <PageLayout/> */}
    </>
  );
}

export default App;
