import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.grade}</td>
                 <td>{contact.subject}</td>
                 <td>{contact.lesson}</td>
                 <td>{contact.question}</td>
                 <td>{contact.answer_1}</td>
                 <td>{contact.answer_2}</td>
                 <td>{contact.answer_3}</td>
                 <td>{contact.answer_4}</td>
                 <td>{contact.correct_answer_number}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;