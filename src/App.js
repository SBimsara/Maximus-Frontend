import Questions from "./routes/Questions";
import Dashboard from "./routes/Dashboard";
import Subjects from "./routes/Subjects";
import Plans from "./routes/Plans/Plans";
import ErrorPage from "./routes/ErrorPage";



import './App.css';
import Sidebar  from "./components/Sidebar";
import Navbar  from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popup from "./routes/Plans/Popup";

import PageLayout from "./routes/PageLayout";
import Settings from "./routes/Settings";


import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    grade:"",
    subject:"",
    lesson:"",
    question:"",
    answer_1:"",
    answer_2:"",
    answer_3:"",
    answer_4:"",
    correct_answer_number:"",
  });

  const [editFormData, setEditFormData] = useState({
    grade:"",
    subject:"",
    lesson:"",
    question:"",
    answer_1:"",
    answer_2:"",
    answer_3:"",
    answer_4:"",
    correct_answer_number:"",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
       
      grade:addFormData.grade,
      subject: addFormData.subject,
       lesson: addFormData.lesson,
       question: addFormData.question,
       answer_1: addFormData.answer_1,
       answer_2: addFormData.answer_2,
       answer_3: addFormData.answer_3,
       answer_4: addFormData.answer_4,
       correct_answer_number: addFormData.correct_answer_number,
     
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      grade: editFormData.grade,
       subject: editFormData.subject,
       lesson: editFormData.lesson,
       question: editFormData.question,
       answer_1: editFormData.answer_1,
       answer_2: editFormData.answer_2,
       answer_3: editFormData.answer_3,
       answer_4: editFormData.answer_4,
       correct_answer_number: editFormData.correct_answer_number
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      grade: contact.grade,
    subject: contact.subject,
    lesson: contact.lesson,
    question: contact.question,
    answer_1: contact.answer_1,
    answer_2: contact.answer_2,
    answer_3: contact.answer_3,
    answer_4: contact.answer_4,
    correct_answer_number: contact.correct_answer_number,
      
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
            <th>Grade</th>
          <th>Subject</th>
          <th>lesson</th>
          <th>Question</th>
          <th>Answer_1</th>
          <th>Answer_2</th>
          <th>Answer_3</th>
          <th>Answer_4</th>
          <th>Correct_answer_number</th>
          <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Question</h2>
      <form onSubmit={handleAddFormSubmit}>
      <select name="grade" required="required" onChange={handleAddFormChange}>
  <option value="">Select a grade</option>
  <option value="10"> 10</option>
  <option value="11"> 11</option>
  <option value="other"> Other</option>
  
</select>


        <input
         type="text"
         name="subject"
         required="required"
         placeholder="Enter the subject"
         onChange={handleAddFormChange} 
        />
        <input
          type="text"
          name="lesson"
          required="required"
          placeholder="Enter the lesson"
          onChange={handleAddFormChange}
        />
        <input
         type="text"
         name="question"
         required="required"
         placeholder="Enter the question"
         onChange={handleAddFormChange}
        />
        <input
         type="text"
         name="answer_1"
         required="required"
         placeholder="Enter the answer_1"
         onChange={handleAddFormChange}
        />
        <input
         type="text"
         name="answer_2"
         required="required"
         placeholder="Enter the answer_2"
         onChange={handleAddFormChange}
        />
        <input
         type="text"
         name="answer_3"
         required="required"
         placeholder="Enter the answer_3"
         onChange={handleAddFormChange}
        />
        <input
         type="text"
         name="answer_4"
         required="required"
         placeholder="Enter the answer_4"
         onChange={handleAddFormChange}
        />
        <input
         type="text"
         name="correct_answer_number"
         required="required"
         placeholder="Enter the correct_answer_number"
         onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};





function App() {
  
  return (
   <>
        <Sidebar/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/questions" element={<Questions/>}/>
          <Route path="/subjects" element={<Subjects/>}/>
          <Route path="/plans" element={<Plans/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
        {/* <Popup/> */}
        {/* <PageLayout/> */}
        </> 
  );
}

export default App;
