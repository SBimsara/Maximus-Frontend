import {useState} from 'react';
import './Lessons.css';

function App() {
  const [formVal, setFormVal] = useState([{subject:'', lesson: '', grade:''}])
  
  const addRow = () => {
    setFormVal([...formVal, {subject:'', lesson: '', grade:''}])
  }
  
  const onRemove = (i) => {
    const newForm = [...formVal]
    newForm.splice(i, 1)
    setFormVal(newForm)
  }
  
  const onHandle = (e, i) => {
    let newForm = [...formVal]
    newForm[i][e.target.name]= e.target.value
    setFormVal(newForm)
  }
  
  const formValidation = (formVal) => {
    const data = [...formVal]
    let valid = true
    
    for (let index = 0; index < data.length; index++) {
      if(data[index].subject.trim() === "") {
        data[index].subjectCheck = "Subject name required"
        valid = false
      } else {
        data[index].subjectCheck = ""
      }

      if(data[index].lesson.trim() === "") {
        data[index].lessonCheck = "Lesson name required"
        valid = false
      } else {
        data[index].lessonCheck = ""
      }

      if(data[index].grade.trim() === "") {
        data[index].gradeCheck = "Grade required"
        valid = false
      } else if(data[index].grade !== "10" && data[index].grade !== "11") {
        data[index].gradeCheck = "Invalid Grade"
        valid = false
      } else {
        data[index].gradeCheck = ""
      }
    }
    
    setFormVal(data)
    return valid
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitData", formVal)
    const errorRes = formValidation(formVal)
    console.log("errorRes", errorRes)
    if(errorRes) {
      // api call
    } else {
      // error msg
    }
  }
  
  return (
    <div className="App">
      <div className="form-container">
        <h2>Add a Lesson</h2>
        <form onSubmit={onSubmit}>
          {formVal.map((item, i)=> (
            <div className="form-row" key={i}>
              <div className="form-group">
                <label>Subject Name</label>
                <input type="text" name="subject" value={item.subject || ""} onChange={(e)=> onHandle(e, i)}/>
                <div className="error-message">{item.subjectCheck}</div>
              </div>

              <div className="form-group lesson-group">
                <label>Lesson Name</label>
                <input type="text" name="lesson" value={item.lesson || ""} onChange={(e)=> onHandle(e, i)}/>
                <div className="error-message">{item.lessonCheck}</div>
              </div>

              <div className="form-group">
                <label>Grade (10/11)</label>
                <input type="text" name="grade" value={item.grade || ""} onChange={(e)=>onHandle(e, i)}/>
                <div className="error-message">{item.gradeCheck}</div>
              </div>

              {
                i === 0 ? "" : <button className="remove-btn" onClick={()=>onRemove(i)}>Remove</button> 
              }
            </div>
          ))}
          <div className="form-actions">
          <button className="add-row-btn" onClick={addRow}>Add Lesson</button>
            <button className="submit-btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;


