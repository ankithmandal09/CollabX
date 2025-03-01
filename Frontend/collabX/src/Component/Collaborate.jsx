import React, { useState } from "react";
import "../styles/Collaborate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Collaborate() {
  const [searchTerm, setSearchTerm] = useState("");
  const [collaborators, setCollaborators] = useState([
    { name: "John Doe", skills: ["React", "JavaScript"] },
    { name: "Jane Smith", skills: ["UI/UX Design", "Figma"] },
    { name: "Emily Johnson", skills: ["Project Management", "Agile"] },
    { name: "Michael Brown", skills: ["JavaScript", "Node.js"] }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter collaborators based on the search term (for simplicity, we'll use a basic filter)
    const filteredCollaborators = collaborators.filter((collaborator) =>
      collaborator.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setCollaborators(filteredCollaborators);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 py-10">
      <div className="w-full sm:w-3/6 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Collaborate with Others</h1>
        <p className="text-center text-gray-600 mt-2">
          Find collaborators based on skills to work on projects.
        </p>

        <form className="mt-6" onSubmit={handleSearch}>
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
            type="text"
            placeholder="Search by skills or name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 mb-4 text-white bg-[#1CC896] rounded-3xl font-semibold hover:bg-[#16a779] focus:outline-none"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-3" />
            Search Collaborators
          </button>
        </form>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">Suggested Collaborators</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {collaborators.map((collaborator, index) => (
              <li key={index}>
                <strong>{collaborator.name}</strong>: {collaborator.skills.join(", ")}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full mt-6">
          <Link
            to="/skills"
            className="w-full flex justify-center items-center py-3 mb-3 text-white bg-[#1CC896] rounded-3xl font-semibold hover:bg-[#16a779] focus:outline-none"
          >
            <FontAwesomeIcon icon={faUsers} className="mr-3" />
            Share Your Skills
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Collaborate;
