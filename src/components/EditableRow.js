import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
         type="text"
         name="grade"
         required="required"
         placeholder="Enter the grade"
         value={editFormData.grade}
         onChange={handleEditFormChange} 
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="subject"
          required="required"
          placeholder="Enter the subject"
          value={editFormData.subject}
          onChange={handleEditFormChange}
          
        ></input>
      </td>
      <td>
        <input
         type="text"
         name="lesson"
         required="required"
         placeholder="Enter the lesson"
         value={editFormData.lesson}
         onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
         type="text"
         name="question"
         required="required"
         placeholder="Enter the question"
         value={editFormData.question}
         onChange={handleEditFormChange}
       
        ></input>
      </td>
      <td>
      <input
         type="text"
         name="answer_1"
         required="required"
         placeholder="Enter the answer_1"
         value={editFormData.answer_1}
         onChange={handleEditFormChange}
        
        ></input>
        </td>
        <td>
        <input
         type="text"
         name="answer_2"
         required="required"
         placeholder="Enter the answer_2"
         value={editFormData.answer_2}
         onChange={handleEditFormChange}
      
        ></input>
        </td>
        <td>
        <input
         type="text"
         name="answer_3"
         required="required"
         placeholder="Enter the answer_3"
         value={editFormData.answer_3}
         onChange={handleEditFormChange}
    
        ></input>
        </td>
        <td>
        <input
         type="text"
         name="answer_4"
         required="required"
         placeholder="Enter the answer_4"
         value={editFormData.answer_4}
         onChange={handleEditFormChange}
     
        ></input>
        </td>
        <td>
        <input
         type="text"
         name="correct_answer_number"
         required="required"
         placeholder="Enter the correct_answer_number"
         value={editFormData.correct_answer_number}
         onChange={handleEditFormChange}
       
        ></input>


        </td>
        <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;