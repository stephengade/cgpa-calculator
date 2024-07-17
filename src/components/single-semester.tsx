"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { AppModal } from "./modal";

interface Course {
  score: string;
  credit: string;
  grade: string;
}

const SingleSemesterGPACalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { score: "", credit: "", grade: "" },
  ]);
  const [carryOverCourses, setCarryOverCourses] = useState<Course[]>([]);
  const [gpa, setGPA] = useState<string | null>(null);
  const [totalCreditUnits, setTotalCreditUnits] = useState<number>(0); // Total credit units for the semester
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const calculateGrade = (score: number): string => {
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 45) return "D";
    if (score >= 40) return "E";
    return "F";
  };

  const calculateGradePoint = (grade: string): number => {
    switch (grade) {
      case "A":
        return 5;
      case "B":
        return 4;
      case "C":
        return 3;
      case "D":
        return 2;
      case "E":
        return 1;
      case "F":
        return 0;
      default:
        return 0;
    }
  };

  const handleCourseChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const values = [...courses];
    values[index][name as keyof Course] = value;

    if (name === "score") {
      const grade = calculateGrade(parseInt(value, 10));
      values[index]["grade"] = grade;
    }

    setCourses(values);
  };

  const handleAddCourse = () => {
    setCourses([...courses, { score: "", credit: "", grade: "" }]);
  };

  const handleRemoveCourse = (index: number) => {
    const values = [...courses];
    values.splice(index, 1);
    setCourses(values);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let semesterGP = 0;
    let semesterCU = 0;

    // Calculate GPA for the semester
    courses.forEach((course) => {
      const gradePoint = calculateGradePoint(course.grade);
      const creditUnit = parseInt(course.credit, 10);
      semesterGP += gradePoint * creditUnit;
      semesterCU += creditUnit;
    });

    const gpaValue = semesterCU > 0 ? (semesterGP / semesterCU).toFixed(2) : "0";
    setGPA(gpaValue);
    setTotalCreditUnits(semesterCU);

    // Handle carry over courses
    const carryOver = courses.filter((course) => course.grade === "F");
    setCarryOverCourses(carryOver);

    setModalOpen(true);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex space-x-2 text-black">
            <input
              inputMode="numeric"
              name="score"
              type="number"
              value={course.score}
              onChange={(event) => handleCourseChange(index, event)}
              placeholder="Score (0-100)"
              className="border p-2 w-1/3 outline-none"
              required
            />
            <input
              inputMode="numeric"
              name="credit"
              type="number"
              value={course.credit}
              onChange={(event) => handleCourseChange(index, event)}
              placeholder="Units"
              className="border p-2 w-1/3 outline-none"
              required
            />
            <input
              type="text"
              name="grade"
              value={course.grade}
              readOnly
              placeholder="Grade"
              className="border p-2 w-1/3 bg-gray-100 outline-none"
            />
            <button
              type="button"
              onClick={() => handleRemoveCourse(index)}
              className="bg-red-500 text-[10px] text-white p-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="flex flex-row items-center text-[13px] md:text-base justify-center gap-5">
          <button
            type="button"
            onClick={handleAddCourse}
            className="bg-black text-white p-2 rounded"
          >
            Add Course
          </button>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Calculate GPA
          </button>
        </div>
      </form>
      <AppModal closeModal={handleCloseModal} openModal={modalOpen}>
        {gpa !== null && (
          <div className="mt-4">
            <div className="text-[100px]">
              {parseFloat(gpa) >= 4
                ? "🫡"
                : parseFloat(gpa) >= 3
                ? "👍"
                : parseFloat(gpa) >= 2
                ? "😒"
                : "😭"}
            </div>

            <p className="text-sm md:text-xl">
              Current Semester GPA: <span className="font-bold">{gpa}</span>
            </p>
            <p className="text-sm md:text-xl">
              Total Credit Units: <span className="font-bold">{totalCreditUnits}</span>
            </p>

            {/* Handle carry over */}
            {carryOverCourses.length > 0 && (
              <div className="border-t border-b py-4">
                <h3 className="text-lg font-semibold mb-2">
                  Carry-Over -{" "}
                  <span className="text-red-500">
                    {carryOverCourses.length ?? 0}
                  </span>
                </h3>
                <ul>
                  {carryOverCourses.map((course, index) => (
                    <li key={index} className="mb-2">
                      {index + 1} -{" "}
                      <span className="font-semibold text-sm">{`Score: ${course.score}, Credit: ${course.credit}, Grade: ${course.grade}`}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </AppModal>
    </div>
  );
};

export default SingleSemesterGPACalculator;
