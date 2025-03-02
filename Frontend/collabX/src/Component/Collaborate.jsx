import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Collaborate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Collaborate() {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://collab-db-default-rtdb.firebaseio.com/.json");
        let projectData = Object.values(response.data);
        projectData = shuffleArray(projectData);
        setProjects(projectData);
        setFilteredProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = projects.filter((project) => {
      const projectString = Object.values(project)
        .map(value => Array.isArray(value) ? value.join(' ') : String(value))
        .join(' ');
      return projectString.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProjects(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <>
      <div className="text-center mb-6 flex justify-center items-center w-full flex-col">
        <h1 className="text-3xl font-semibold text-gray-700">Collaborate with Others</h1>
        <p className="text-gray-600 mt-2">Find collaborators based on skills to work on projects.</p>

        <form className="mt-6 w-full max-w-xs" onSubmit={handleSearch}>
          <div className="flex justify-center flex-col">
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
          </div>
        </form>
      </div>

      <div className="bg-gray-100 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-4">
          {currentProjects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg flex flex-col justify-between">
              <div className="bg-[#1CC896] p-4 rounded-3xl">
                <h2 className="text-xl font-semibold text-black">Project Name</h2>
                <p className="text-black">{project.projectName}</p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-700">Skills Required to Collaborate</h2>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  {project.skillsRequired.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700">Tech Stack Skills Required</h3>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  {project.techStackRequired.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="w-full mt-6">
                <Link
                  to="/skills"
                  className="w-full flex justify-center items-center py-3 mb-3 text-white bg-[#1CC896] rounded-3xl font-semibold hover:bg-[#16a779] focus:outline-none"
                >
                  <FontAwesomeIcon icon={faUsers} className="mr-3" />
                  Send Collaboration Requests
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <nav>
            <ul className="flex space-x-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <button
                    onClick={() => handlePagination(index + 1)}
                    className={`px-4 py-2 text-lg font-semibold rounded-md ${currentPage === index + 1 ? 'bg-[#1CC896] text-white' : 'bg-white text-gray-700'}`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Collaborate;
