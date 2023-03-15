import Questions from "./routes/Questions";
import Dashboard from "./routes/Dashboard";
import Subjects from "./routes/Subjects";
import Plans from "./routes/Plans";
import ErrorPage from "./routes/ErrorPage";
import Settings from "./routes/Settings";


import './App.css';
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar.js";



import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopupForm from "./routes/styles/PopupForm";




function App() {
  
  return (
   <>
        {/* {<PopupForm/>}
        <Sidebar/> */}
        <Routes> 
          <Route path="/" element={<Dashboard/>} />
          <Route path="/questions" element={<Questions/>}/>
          <Route path="/subjects" element={<Subjects/>}/>
          <Route path="/plans" element={<Plans/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
        
        </> 
  );
}

export default App;
