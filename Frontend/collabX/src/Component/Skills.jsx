import React, { useState } from "react";
import "../styles/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCogs } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Skills() {
  const [skills, setSkills] = useState([
    "React Development",
    "UI/UX Design",
    "JavaScript",
    "Project Management"
  ]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = (e) => {
    e.preventDefault();
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 py-10">
      <div className="w-full sm:w-3/6 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Your Skills
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Share and manage the skills you want to offer the community.
        </p>

        <form className="mt-6" onSubmit={addSkill}>
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
            type="text"
            placeholder="Add a new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 mb-4 text-white bg-[#1CC896] rounded-3xl font-semibold hover:bg-[#16a779] focus:outline-none"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-3" />
            Add Skill
          </button>
        </form>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">Skills List</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="w-full mt-6">
          <Link
            to="/collaborate"
            className="w-full flex justify-center items-center py-3 mb-3 text-white bg-[#1CC896] rounded-3xl font-semibold hover:bg-[#16a779] focus:outline-none"
          >
            <FontAwesomeIcon icon={faCogs} className="mr-3" />
            Find Collaborators
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Skills;
