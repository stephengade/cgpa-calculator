import React from 'react';

const GradingSystemInfo: React.FC = () => {
  return (
    <div className="px-4 py-10 max-w-[850px] mx-auto">


      <h2 className="text-lg font-semibold">About the Grading System</h2>
     <p>A quick disclaimer: Kindly ensure the grading scale is the same as the one in your school. This calculator will work perfectly for students in Obafemi Awolowo University (Ile-Ife) and some schools. But abeg, check the grading scale.</p>



      <div className="mt-8 mb-4">
        <h3 className="text-base md:text-[25px] font-semibold mb-1">Grading Scale and Points</h3>
        <p className="mb-2">
          The grading system determines the grade points assigned to each score range, which are then used to calculate the Grade Point Average (GPA) and Cumulative Grade Point Average (CGPA).
        </p>
        <table className="table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">Score Range (%)</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Grade</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Grade Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2">70 - 100</td>
              <td className="border border-gray-200 px-4 py-2">A</td>
              <td className="border border-gray-200 px-4 py-2">5.00</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">60 - 69</td>
              <td className="border border-gray-200 px-4 py-2">B</td>
              <td className="border border-gray-200 px-4 py-2">4.00</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">50 - 59</td>
              <td className="border border-gray-200 px-4 py-2">C</td>
              <td className="border border-gray-200 px-4 py-2">3.00</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">45 - 49</td>
              <td className="border border-gray-200 px-4 py-2">D</td>
              <td className="border border-gray-200 px-4 py-2">2.00</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">40 - 44</td>
              <td className="border border-gray-200 px-4 py-2">E</td>
              <td className="border border-gray-200 px-4 py-2">1.00</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">0 - 39</td>
              <td className="border border-gray-200 px-4 py-2">F</td>
              <td className="border border-gray-200 px-4 py-2">0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-8">
        <h3 className="text-base md:text-[25px] font-semibold mb-1">GPA (Grade Point Average)</h3>
        <p className="mb-2">
          GPA is the average of the grade points obtained in all courses within a single semester.
        </p>
        <p className="mb-2">
          <strong>Formula:</strong> GPA = Total Grade Points / Total Credit Units
        </p>
        <p className="mb-2">
          Example: If you have taken courses with grades and credit units, you can calculate your GPA by dividing the total grade points earned by the total credit units completed.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-base md:text-[25px] font-semibold mb-1">CGPA (Cumulative Grade Point Average)</h3>
        <p className="mb-2">
          CGPA represents the overall average of grade points obtained across multiple semesters.
        </p>
        <p className="mb-2">
          <strong>Formula:</strong> CGPA = Total Cumulative Grade Points / Total Cumulative Credit Units
        </p>
        <p className="mb-2">
          Example: To calculate your CGPA, sum up all the grade points earned from all semesters and divide by the total credit units completed over all semesters.
        </p>
      </div>
      <div>
        <h3 className="text-base font-semibold md:text-[25px] mb-1">Understanding the Classifications</h3>
        <ul className="list-disc pl-5 mb-2">
          <li><strong>First Class:</strong> CGPA &ge; 4.50</li>
          <li><strong>Second Class Upper:</strong> 3.50 &le; CGPA &lt; 4.50</li>
          <li><strong>Second Class Lower:</strong> 2.40 &le; CGPA &lt; 3.50</li>
          <li><strong>Third Class:</strong> 1.50 &le; CGPA &lt; 2.40</li>
          <li><strong>Pass:</strong> 1.00 &le; CGPA &lt; 1.50</li>
          <li><strong>Fail:</strong> CGPA &lt; 1.00</li>
        </ul>
        <p>
          This grading system provides a structured approach to assess and recognize academic achievements based on consistent criteria across all semesters.
        </p>
      </div>
    </div>
  );
};

export default GradingSystemInfo;
