import React, { useEffect, useState } from "react";
import '../styles/Profile.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub, faTwitter, faDribbble, } from "@fortawesome/free-brands-svg-icons";
import { faPen, faSave } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [userDetails, setUserDetails] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      birthday: '',
      gender: '',
      bio: '',
      nationality: '',
      skills: [],
    });
  
    const [credentials, setCredentials] = useState([]);
    const [formData, setFormData] = useState([]);
  
    async function getCredentials() {
      try {
        const response = await axios.get('https://hackathonfeb2025users-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
        setCredentials(Object.values(response.data));     
      } catch (error) {
        console.error(error);
      }
    }
  
    async function getFormData() {
      try {
        const response = await axios.get('https://hackathon-form-data-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
        setFormData(Object.values(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      getFormData();
      getCredentials();
    }, []);
    
    useEffect(() => {
      if (credentials.length > 0 && formData.length > 0) {
        setUserDetails({
          username: credentials[0].username || '',
          firstName: formData[0].firstName || '',
          lastName: formData[0].lastName || '',
          email: formData[0].email || '',
          phoneNumber: formData[0].phoneNumber || '',
          birthday: formData[0].birthday || '',
          gender: formData[0].gender || '',
          bio: formData[0].bio || '',
          nationality: formData[0].nationality || '',
          skills: formData[0].skills || [],
        });
      }
    }, [credentials, formData]);
  
    const handleEditToggle = () => {
      setIsEditing(!isEditing);
    };
  
    const handleChange = (field, value) => {
      setUserDetails({
        ...userDetails,
        [field]: value
      });
    };
  console.log(userDetails)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-700 profile">
        <div className="flex flex-col sm:flex-row bg-white rounded-3xl shadow-xl max-w-6xl w-full p-8 gap-8">
          <div className="flex flex-col items-center sm:items-start gap-8 sm:w-1/3">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-[#1CC896]">
                {isEditing ? (
                  <input
                    type="text"
                    value={`${userDetails.firstName} ${userDetails.lastName}`}
                    onChange={(e) => handleChange('firstName', e.target.value.split(' ')[0])}
                    className="bg-transparent border-b-2 border-[#1CC896] outline-none"
                  />
                ) : (
                  `${userDetails.firstName} ${userDetails.lastName}`
                )}
              </h1>
              <div className="flex gap-4">
                  <Link>
                      <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link>
                      <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <Link>
                      <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link>
                      <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link>
                      <FontAwesomeIcon icon={faDribbble} />
                  </Link>
              </div>
            </div>
  
            <img
              src="https://www.usnews.com/object/image/0000017f-2352-df1a-a3ff-b77bab9e0000/gettyimages-1369617365.jpg?update-time=1645565687144&size=responsive640"
              alt="Profile"
              className="rounded-full w-40 h-40 object-cover border-4 border-gray-200 mt-4"
            />
  
            <div className="text-center sm:text-left mt-4">
              <p className="text-gray-600">
                {isEditing ? (
                  <input
                    type="text"
                    value={userDetails.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    className="bg-transparent border-b-2 border-[#1CC896] outline-none"
                  />
                ) : (
                  userDetails.bio
                )}
              </p>
            </div>
          </div>
  
          <div className="sm:w-2/3 flex flex-col gap-8">
            <button
              onClick={handleEditToggle}
              className="self-end px-6 py-2 rounded-lg bg-[#1CC896] text-black hover:bg-[#76cdb4] transition duration-300"
            >
              {isEditing ? <FontAwesomeIcon icon={faSave}/> : <FontAwesomeIcon icon={faPen}/>}
            </button>
  
            <div className="space-y-4">
              <h1 className="text-2xl font-medium text-[#1CC896]">Personal Details</h1>

              <div className="flex justify-between items-center space-y-1">
                <p className="text-gray-700 font-semibold w-1/3">Username:</p>
                <p className="text-gray-700 w-2/3">
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.username}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-transparent border-b-2 border-[#1CC896] outline-none py-1"
                    />
                  ) : (
                    userDetails.username
                  )}
                </p>
              </div>

              
              <div className="flex justify-between items-center space-y-1">
                <p className="text-gray-700 font-semibold w-1/3">Email:</p>
                <p className="text-gray-700 w-2/3">
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-transparent border-b-2 border-[#1CC896] outline-none py-1"
                    />
                  ) : (
                    userDetails.email
                  )}
                </p>
              </div>
              <div className="flex justify-between items-center space-y-1">
                <p className="text-gray-700 font-semibold w-1/3">Phone:</p>
                <p className="text-gray-700 w-2/3">
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.phoneNumber}
                      onChange={(e) => handleChange('phoneNumber', e.target.value)}
                      className="bg-transparent border-b-2 border-[#1CC896] outline-none py-1"
                    />
                  ) : (
                    userDetails.phoneNumber
                  )}
                </p>
              </div>
              <div className="flex justify-between items-center space-y-1">
                <p className="text-gray-700 font-semibold w-1/3">Birthday:</p>
                <p className="text-gray-700 w-2/3">
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.birthday}
                      onChange={(e) => handleChange('birthday', e.target.value)}
                      className="bg-transparent border-b-2 border-[#1CC896] outline-none py-1"
                    />
                  ) : (
                    userDetails.birthday
                  )}
                </p>
              </div>
              <div className="flex justify-between items-center space-y-1">
                <p className="text-gray-700 font-semibold w-1/3">Gender:</p>
                <p className="text-gray-700 w-2/3">
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.gender}
                      onChange={(e) => handleChange('gender', e.target.value)}
                      className="bg-transparent border-b-2 border-[#1CC896] outline-none py-1"
                    />
                  ) : (
                    userDetails.gender
                  )}
                </p>
              </div>
              <div className="flex justify-between items-center space-y-1">
                <p className="text-gray-700 font-semibold w-1/3">Nationality:</p>
                <p className="text-gray-700 w-2/3">
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.nationality}
                      onChange={(e) => handleChange('nationality', e.target.value)}
                      className="bg-transparent border-b-2 border-[#1CC896] outline-none py-1"
                    />
                  ) : (
                    userDetails.nationality
                  )}
                </p>
              </div>
            </div>
  
            <div className="w-full mt-6">
              <h2 className="text-2xl font-medium text-[#1CC896]">Skills</h2>
              <div className="flex flex-wrap gap-4 mt-2">
                  {userDetails.skills.map((skill, index) => (
                  <div key={index} className="p-2 flex items-center justify-center bg-gray-200 rounded-lg text-center text-gray-700">
                      {isEditing ? (
                      <input
                          type="text"
                          value={skill}
                          onChange={(e) =>
                          handleChange(
                              'skills',
                              userDetails.skills.map((s, i) => (i === index ? e.target.value : s))
                          )
                          }
                          className="bg-transparent border-b-2 border-[#1CC896] outline-none py-1 px-2"
                      />
                      ) : (
                      <span className="text-gray-600">{skill}</span>
                      )}
                  </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;


// import React, { useEffect, useState } from "react";
// import '../styles/Profile.css'
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faLinkedin, faGithub, faTwitter, faDribbble, } from "@fortawesome/free-brands-svg-icons";
// import { faPen, faSave } from '@fortawesome/free-solid-svg-icons';
// import axios from "axios";

// function Profile() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: "Alex Johnson",
//     title: "Biology Student",
//     location: "San Francisco, CA",
//     personalDetails: [
//       { label: "Username", value: "alexjohnson123" },
//       { label: "Email", value: "alex.johnson@mit.edu" },
//       { label: "Mobile", value: "+1 123 456 7890" },
//       { label: "Address", value: "1234 Market St, San Francisco, CA 94103 1234 Market St, San Francisco, CA 94103" },
//       { label: "Birthday", value: "April 10, 2000" },
//       { label: "Gender", value: "Male" },
//       { label: "Nationality", value: "American" },
//       { label: "Marital Status", value: "Single" },
//     ],
//     skills: ["Biology", "Chemistry", "Lab Techniques", "Cell Biology", "Genetics", "Environmental Science", "Botany", "Microbiology"],
//     hobby: ["Gaming", "Trekking", "Work-out", "Hang-out", "Bookworm", "Microbiology"],
//     contact: { phone: "+1 123 456 7890", address: "1234 Market St, San Francisco, CA 94103", email: "alex.johnson@mit.edu", website: "www.alexjohnson.com" },
//     basicInfo: { birthday: "April 10, 2000", gender: "Male" },
//   });

//   const [credentials, setCredentials] = useState([]);
//   const [formData, setFormData] = useState({});

//   async function getCredentials() {
//     try {
//       const response = await axios.get('https://hackathonfeb2025users-default-rtdb.asia-southeast1.firebasedatabase.app/.json')
//       setCredentials(Object.values(response.data))     
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async function getFormData() {
//     try {
//       const response = await axios.get('https://hackathon-form-data-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
//       setFormData(Object.values(response.data))
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   useEffect(() => {
//     getFormData()
//     getCredentials()
//   }, [])
  
//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (field, value) => {
//     setUserDetails({
//       ...userDetails,
//       [field]: value
//     });
//   };
//     console.log(credentials[0])
//     console.log(formData[0])
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 profile">
//       <div className="flex flex-col sm:flex-row bg-white rounded-3xl shadow-xl max-w-6xl w-full p-8 gap-8">
//         <div className="flex flex-col items-center sm:items-start gap-8 sm:w-1/3">
//           <div className="w-full flex justify-between items-center">
//             <h1 className="text-2xl font-semibold text-[#1CC896]">
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={userDetails.name}
//                   onChange={(e) => handleChange('name', e.target.value)}
//                   className="bg-transparent border-b-2 border-[#1CC896] outline-none"
//                 />
//               ) : (
//                 userDetails.name
//               )}
//             </h1>
//             <div className="flex gap-4">
//                 <Link>
//                     <FontAwesomeIcon icon={faLinkedin} />
//                 </Link>
//                 <Link>
//                     <FontAwesomeIcon icon={faGithub} />
//                 </Link>
//                 <Link>
//                     <FontAwesomeIcon icon={faFacebook} />
//                 </Link>
//                 <Link>
//                     <FontAwesomeIcon icon={faTwitter} />
//                 </Link>
//                 <Link>
//                     <FontAwesomeIcon icon={faTwitter} />
//                 </Link>
//                 <Link>
//                     <FontAwesomeIcon icon={faDribbble} />
//                 </Link>
//             </div>
//           </div>

//           <img
//             src="https://www.usnews.com/object/image/0000017f-2352-df1a-a3ff-b77bab9e0000/gettyimages-1369617365.jpg?update-time=1645565687144&size=responsive640"
//             alt="Profile"
//             className="rounded-full w-40 h-40 object-cover border-4 border-gray-200 mt-4"
//           />

//           <div className="text-center sm:text-left mt-4">
//             <p className="text-gray-600">
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={userDetails.title}
//                   onChange={(e) => handleChange('title', e.target.value)}
//                   className="bg-transparent border-b-2 border-[#1CC896] outline-none"
//                 />
//               ) : (
//                 userDetails.title
//               )}
//             </p>
//             <p className="text-gray-600">
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={userDetails.location}
//                   onChange={(e) => handleChange('location', e.target.value)}
//                   className="bg-transparent border-b-2 border-[#1CC896] outline-none"
//                 />
//               ) : (
//                 userDetails.location
//               )}
//             </p>
//           </div>
//           <div className="w-full mt-6">
//             <h2 className="text-lg font-medium text-[#1CC896]">About Me</h2>
//             <p className="text-gray-600 mt-2">
//               As a biology student, my life revolves around learning and exploring the natural world. My studies at MIT have given me the opportunity to dive into various biological fields, from genetics to microbiology. I am passionate about conducting research and contributing to the scientific community. Outside of academics, I balance my time with a part-time job at McDonald's to support myself and gain work experience.
//             </p>
//           </div>
//         </div>

//         <div className="sm:w-2/3 flex flex-col gap-8">
//           <button
//             onClick={handleEditToggle}
//             className="self-end px-6 py-2 rounded-lg bg-[#1CC896] text-black hover:bg-[#76cdb4] transition duration-300"
//           >
//             {isEditing ? <FontAwesomeIcon icon={faSave}/> : <FontAwesomeIcon icon={faPen}/>}
//           </button>

//           <div className="space-y-4">
//             <h1 className="text-2xl font-medium text-[#1CC896]">Personal Details</h1>
//             {userDetails.personalDetails.map((detail, index) => (
//               <div key={index} className="flex justify-between items-center space-y-1">
//                 <p className="text-gray-700 font-semibold w-1/3">{detail.label}:</p>
//                 <p className="text-gray-700 w-2/3">
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={detail.value}
//                       onChange={(e) =>
//                         handleChange('personalDetails', [
//                           ...userDetails.personalDetails.slice(0, index),
//                           { ...detail, value: e.target.value },
//                           ...userDetails.personalDetails.slice(index + 1)
//                         ])
//                       }
//                       className="bg-transparent border-b-2 border-[#1CC896] outline-none py-1"
//                     />
//                   ) : (
//                     detail.value
//                   )}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="w-full mt-6">
//             <h2 className="text-lg font-medium text-[#1CC896]">Skills</h2>
//             <div className="flex flex-wrap gap-4 mt-2">
//                 {userDetails.skills.map((skill, index) => (
//                 <div key={index} className="p-2 flex items-center justify-center bg-gray-200 rounded-lg text-center text-gray-700">
//                     {isEditing ? (
//                     <input
//                         type="text"
//                         value={skill}
//                         onChange={(e) =>
//                         handleChange(
//                             'skills',
//                             userDetails.skills.map((s, i) => (i === index ? e.target.value : s))
//                         )
//                         }
//                         className="bg-transparent border-b-2 border-[#1CC896] outline-none py-1 px-2"
//                     />
//                     ) : (
//                     <span className="text-gray-600">{skill}</span>
//                     )}
//                 </div>
//                 ))}
//             </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
