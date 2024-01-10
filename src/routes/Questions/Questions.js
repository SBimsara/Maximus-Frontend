import axios from "axios";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./Questions.css";
import Navbar1 from '../../components/Navbar1';

export default function QuestionPage() {
  const [grade, setGrade] = useState([]);
  const [subject, setSubject] = useState([]);
  const [term, setTerm] = useState([]);
  const [lesson, setLesson] = useState([]);
  const [quizType, setQuizType] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    loadGrades();
    loadSubjects();
    loadTerms();
  }, []);

  const loadGrades = async () => {
    try {
      const result = await axios.get("http://localhost:8090/grades");
      setGrade(result.data);
    } catch (error) {
      console.error("Failed to load grades:", error);
    }
  };
  const loadSubjects = async () => {
    try {
      const result = await axios.get("http://localhost:8090/subjects");
      setSubject(result.data);
    } catch (error) {
      console.error("Failed to load subjects:", error);
    }
  };
  const loadTerms = async () => {
    try {
      const result = await axios.get("http://localhost:8090/terms");
      setTerm(result.data);
    } catch (error) {
      console.error("Failed to load terms:", error);
    }
  };
  const loadLessons = async (gradeId, subjectId, termId) => {
    try {
      const result = await axios.get(
        `http://localhost:8090/lessons?gradeId=${gradeId}&subjectId=${subjectId}&termId=${termId}`
      );
      setLesson(result.data);
    } catch (error) {
      console.error("Failed to load lessons:", error);
    }
  };

  const handleGradeChange = (event) => {
    const gradeId = event.target.value;
    const selectedSubjectId = document.getElementById("subject").value;
    const selectedTermId = document.getElementById("term").value;

    loadLessons(gradeId, 0, 0);
  };
  const handleSubjectChange = (event) => {
    const subjectId = event.target.value;
    const selectedGradeId = document.getElementById("grade").value;
    const selectedTermId = document.getElementById("term").value;

    loadLessons(selectedGradeId, subjectId, 0);
  };
  const handleTermChange = (event) => {
    const termId = event.target.value;
    const selectedGradeId = document.getElementById("grade").value;
    const selectedSubjectId = document.getElementById("subject").value;

    loadLessons(selectedGradeId, selectedSubjectId, termId);
  };
  const handleQuizTypeChange = (e) => {
    setQuizType({ ...quizType, [e.target.name]: e.target.value });
  };

  const readExcel = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer(file);
    const excelfile = XLSX.read(data);
    const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]];
    const exceljson = XLSX.utils.sheet_to_json(excelsheet);
    setQuestionData(exceljson);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedGradeElement = document.getElementById("grade");
    const selectedSubjectElement = document.getElementById("subject");
    const selectedTermElement = document.getElementById("term");
    const selectedLessonElement = document.getElementById("lesson");
    const selectedQuizTypeElement = document.querySelector(
      'input[name="quizType"]:checked'
    );

    if (
      selectedGradeElement &&
      selectedSubjectElement &&
      selectedTermElement &&
      selectedLessonElement &&
      selectedQuizTypeElement &&
      questionData.length > 0
    ) {
      const selectedGradeId = selectedGradeElement.value;
      const selectedSubjectId = selectedSubjectElement.value;
      const selectedTermId = selectedTermElement.value;
      const selectedLessonId = selectedLessonElement.value;
      const selectedQuizTypeId = selectedQuizTypeElement.value;

      try {
        for (const questionItem of questionData) {
          const newQuestionData = {
            grade: {
              grade_id: selectedGradeId,
            },
            subject: {
              subject_id: selectedSubjectId,
            },
            term: {
              term_id: selectedTermId,
            },
            lesson: {
              lesson_id: selectedLessonId,
            },
            quizType: {
              quiz_type_id: selectedQuizTypeId,
            },
            question_text: questionItem.Question,
            answer1: questionItem.Answer1,
            answer2: questionItem.Answer2,
            answer3: questionItem.Answer3,
            answer4: questionItem.Answer4,
            correct_answer: questionItem.CorrectAnswer,
          };

          const response = await axios.post(
            "http://localhost:8090/question",
            newQuestionData
          );
          console.log("Question data added successfully", response.data);
        }
        setSuccessMessage("Question data added successfully");
        setQuestionData([]);

        setTimeout(() => {
          window.location.reload();
        }, 2500);
      } catch (error) {
        console.error("Failed to add question data:", error);
        setErrorMessage("Failed to add question data. Please try again.");
      }
    }
  };

  return (

   
    
    <form onSubmit={handleSubmit}>
      {successMessage && (
        <div className="alert alert-success mt-3 width container" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger mt-3 width container" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="contaner">
      <>
        <Navbar1 text="QUESTIONS"/>
      </>
    </div>
      <div className="container center">
    
        <table className="tableStyle">
          <tbody>
            <tr>
              <td>
                <label htmlFor="grade">Grade:</label>
              </td>
              <td>
                <select
                  className="form-control"
                  name="grade"
                  id="grade"
                  onChange={handleGradeChange}
                >
                  <option value="">-- Select Grade--</option>

                  {grade.map((grade) => (
                    <option key={grade.grade_id} value={grade.grade_id}>
                      {grade.grade_name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="subject">Subject:</label>
              </td>
              <td>
                <select
                  className="form-control"
                  name="subject"
                  id="subject"
                  onChange={handleSubjectChange}
                >
                  <option value="">-- Select Subject --</option>

                  {subject.map((subject) => (
                    <option
                      key={subject.subject_id}
                      value={subject.subject_id}
                      name={subject.subject_name}
                    >
                      {subject.subject_name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="term">Term:</label>
              </td>
              <td>
                <select
                  className="form-control"
                  name="term"
                  id="term"
                  onChange={handleTermChange}
                >
                  <option value="">-- Select Term --</option>

                  {term.map((term) => (
                    <option key={term.term_id} value={term.term_id}>
                      {term.term_name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="lesson">Lesson:</label>
              </td>
              <td>
                <select className="form-control" name="lesson" id="lesson">
                  <option value="">-- Select Lesson --</option>

                  {lesson.map((lesson) => (
                    <option
                      key={lesson.lesson_id}
                      value={lesson.lesson_id}
                      name={lesson.lesson_name}
                    >
                      {lesson.lesson_name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Quiz Type:</label>
              </td>
              <td>
                <input
                  className="form-check-input spaceRadio"
                  type="radio"
                  name="quizType"
                  id="normalquiz"
                  value={1}
                  onChange={handleQuizTypeChange}
                />
                <label className="form-check-label space" htmlFor="normalquiz">
                  Normal Quiz
                </label>

                <input
                  className="form-check-input spaceRadio"
                  type="radio"
                  name="quizType"
                  id="endtermquiz"
                  value={2}
                  onChange={handleQuizTypeChange}
                />
                <label className="form-check-label" htmlFor="endtermquiz">
                  End Term Quiz
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <a
                  href="https://docs.google.com/spreadsheets/d/1wJsoohSzZCQDAdm6sbNe-6_sJ4KW_4Fs/export?format=xlsx"
                  target="_blank"
                  className="spaceLink"
                  download={true}
                >
                  Download QuestionData Template
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="formFileMultiple" className="form-label">
                  Select Questions:
                </label>
              </td>
              <td>
                <input
                  className="form-control"
                  type="file"
                  id="formFileMultiple"
                  onChange={(e) => readExcel(e)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit" className="btn btn-lg btn-success">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}
