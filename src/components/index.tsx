'use client'

import { useState } from "react";
import SingleSemesterGPACalculator from "./single-semester";
import MultiSemesterGPACalculator from "./multi-semester";
import MultiCGPACalculator from "./multi-semester";

export const CGPACalculatorPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleSetTab = (idx: number) => {
        setActiveTab(idx);
    }

    return (
        <div className="container mx-auto mt-7">
            <div className="grid grid-cols-2 mb-2 bg-slate-300 py-1 rounded-[32px] shadow-sm">
                {["Semester GPA", "CGPA Calculator"].map((item, index) => (
                    <button
                        key={index}
                        className={`mx-2 rounded-[32px] py-2 outline-none cursor-pointer ${activeTab === index ? "bg-blue-500 text-white" : " text-gray-700"}`}
                        onClick={()=>handleSetTab(index)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {activeTab === 0 && <SingleSemesterGPACalculator />}
            {activeTab === 1 && <MultiCGPACalculator />}
        </div>
    );
};
