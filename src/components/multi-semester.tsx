"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { AppModal } from "./modal";

interface Semester {
  gpa: string;
  creditUnits: string;
}

const MultiCGPACalculator: React.FC = () => {
  const [semesters, setSemesters] = useState<Semester[]>([
    { gpa: "", creditUnits: "" },
  ]);
  const [cgpa, setCGPA] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSemesterChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const values = [...semesters];
    values[index][name as keyof Semester] = value;
    setSemesters(values);
  };

  const handleAddSemester = () => {
    setSemesters([...semesters, { gpa: "", creditUnits: "" }]);
  };

  const handleRemoveSemester = (index: number) => {
    const values = [...semesters];
    values.splice(index, 1);
    setSemesters(values);
  };


  const getCGPAClass = (cgpa: number): string => {
    if (!cgpa) return "";

    if (cgpa >= 4.5) return "First Class";
    if (cgpa >= 3.5) return "Second Class Upper";
    if (cgpa >= 2.4) return "Second Class Lower";
    if (cgpa >= 1.5) return "Third Class";
    if (cgpa >= 1.0) return "Pass";

    return "Fail";
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let totalQualityPoints = 0;
    let totalCreditUnits = 0;

    // Calculate CGPA
    semesters.forEach((semester) => {
      const gpa = parseFloat(semester.gpa);
      const creditUnits = parseInt(semester.creditUnits, 10);
      totalQualityPoints += gpa * creditUnits;
      totalCreditUnits += creditUnits;
    });

    const cgpaValue = totalCreditUnits > 0 ? (totalQualityPoints / totalCreditUnits).toFixed(2) : "0";
    setCGPA(cgpaValue);


    setModalOpen(true);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {semesters.map((semester, index) => (
          <div key={index} className="flex space-x-2 text-black">
            <input
              inputMode="numeric"
              name="gpa"
              type="number"
              step="0.01"
              value={semester.gpa}
              onChange={(event) => handleSemesterChange(index, event)}
              placeholder="GPA"
              className="border p-2 w-1/2 outline-none"
              required
            />
            <input
              inputMode="numeric"
              name="creditUnits"
              type="number"
              value={semester.creditUnits}
              onChange={(event) => handleSemesterChange(index, event)}
              placeholder="Credit Units"
              className="border p-2 w-1/2 outline-none"
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveSemester(index)}
              className="bg-red-500 text-[10px] text-white p-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="flex flex-row items-center text-[13px] md:text-base justify-center gap-5">
          <button
            type="button"
            onClick={handleAddSemester}
            className="bg-black text-white p-2 rounded"
          >
            Add Semester
          </button>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Calculate CGPA
          </button>
        </div>
      </form>
      <AppModal closeModal={handleCloseModal} openModal={modalOpen}>
      {cgpa !== null && (
        <div className="mt-4 text-center">
           <div className="text-[100px]">
              {parseFloat(cgpa) >= 4
                ? "🫡"
                : parseFloat(cgpa) >= 3
                ? "👍"
                : parseFloat(cgpa) >= 2
                ? "😒"
                : "😭"}
            </div>
          <p className="text-sm md:text-xl">
            Current CGPA: <span className="font-bold">{cgpa}</span>
          </p>

          <p className="text-sm mt-4 md:text-xl border-t border-b border-solid py-2">
            {getCGPAClass(parseFloat(cgpa))}
          </p>
        </div>
      )}
      </AppModal>
    </div>
  );
};

export default MultiCGPACalculator;
