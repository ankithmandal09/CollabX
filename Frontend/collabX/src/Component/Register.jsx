import React from 'react'
import "../styles/register.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';


const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthday: '',
    gender: '',
    bio: '',
    nationality: '',
    skills: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username' || name === 'password') {
      setCredentials((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSkillChange = (e, index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = e.target.value;
    setFormData((data) => ({ ...data, skills: updatedSkills }));
  };


  const addSkill = () => {
    setFormData((data) => ({
      ...data,
      skills: [...data.skills, '']
    }));
  };

  const saveCredentials = async () => {
    try {
      const credentialsPayload = {
        username: credentials.username,
        password: credentials.password
      };

      // const response = await axios.post('https://hackathonfeb2025users-default-rtdb.asia-southeast1.firebasedatabase.app/.json', credentialsPayload);
      const response = await axios.post(`http://localhost:8090/users`,credentialsPayload);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const saveFormData = async () => {
    try {
      const formPayload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        birthday: formData.birthday,
        gender: formData.gender,
        bio: formData.bio,
        nationality: formData.nationality,
        skills: formData.skills
      };

      // const response = await axios.post('https://hackathon-form-data-default-rtdb.asia-southeast1.firebasedatabase.app/.json', formPayload);
      const response = await axios.post(`http://localhost:8090/profiles/${credentials.username}`,formPayload);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveCredentials();
    saveFormData();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10 register">
      <div className="w-full sm:w-3/6 md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Create your account</h1>
        <p className="text-center text-gray-600 mt-2">
          Already have an account? &nbsp;
          <Link to='/login' className="text-[#1CC896] hover:underline">
            Sign in
          </Link>
        </p>

        <form id="register-form" className="mt-6" onSubmit={handleSubmit}>
          <div className="flex space-x-4 mb-4">
            <input
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              minLength={3}
            />
            <input
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              minLength={3}
            />
          </div>

          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
            minLength={3}
          />
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="flex space-x-4 mb-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              minLength={8}
              required
            />
          </div>

          <div className="flex space-x-4 mb-4">
            <input
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              type="tel"
              name="phoneNumber"
              minLength={10}
              maxLength={10}
              id="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              type="date"
              name="birthday"
              id="birthday"
              value={formData.birthday}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="w-full mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Country</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
                name="nationality"
                id="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              >
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="india">India</option>
              </select>
            </div>
          </div>

          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
            type="text"
            name="bio"
            id="bio"
            placeholder="Bio (Max 200 characters)"
            value={formData.bio}
            onChange={handleChange}
            maxLength={200}
          />

          <div className="mb-4">
            {formData.skills.map((skill, index) => (
              <div className="flex space-x-4 mb-2" key={index}>
                <input
                  className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
                  type="text"
                  name={`skill-${index}`}
                  value={skill}
                  onChange={(e) => handleSkillChange(e, index)}
                />
              </div>
            ))}
            <button
              type="button"
              className="text-[#1CC896] mb-4"
              onClick={addSkill}
            >
              Add Skill
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 mb-4 text-white bg-[#1CC896] rounded-3xl font-semibold hover:bg-[#16a779] focus:outline-none"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;





  // function Register() {
  //   const [formData, setFormData] = useState({
  //     firstName: '',
  //     lastName: '',
  //     username: '',
  //     email: '',
  //     password: '',
  //     phoneNumber: '',
  //     dob: '',
  //     gender: '',
  //     country: '',
  //     about: '',
  //     nationality: '',
  //     maritalStatus: '',
  //     skills: [
  //       "Biology", "Chemistry", "Cell Biology", "Genetics", "Botany", "Microbiology"
  //     ]
  //   });
  
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((data) => ({ ...data, [name]: value }));
  //   };
  
  
  //   const postData = async () => {
  //     try {
  //       const payload = {
  //         name: `${formData.firstName} ${formData.lastName}`,
  //         about: formData.about,
  //         location: `${formData.country}`,
  //         personalDetails: [
  //           { label: "Username", value: formData.username },
  //           { label: "Email", value: formData.email },
  //           { label: "Mobile", value: formData.phoneNumber },
  //           { label: "Birthday", value: formData.dob },
  //           { label: "Gender", value: formData.gender },
  //           { label: "Nationality", value: formData.nationality },
  //         ],
  //         skills: formData.skills,
  //         contact: {
  //           phone: formData.phoneNumber,
  //           email: formData.email,
  //         }
  //       };
  
  //       const response = await axios.post('https://hackathonfeb2025users-default-rtdb.asia-southeast1.firebasedatabase.app/.json', payload);
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10 register">
  //       <div className="w-full sm:w-3/6 md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white p-8 rounded-3xl shadow-lg">
  //         <h1 className="text-3xl font-semibold text-center text-gray-700">Create your account</h1>
  //         <p className="text-center text-gray-600 mt-2">
  //           Already have an account? &nbsp;
  //           <Link to='/login' className="text-[#1CC896] hover:underline">
  //             Sign in
  //           </Link>
  //         </p>
  
  //         <form id="register-form" className="mt-6" onSubmit={(e) => { e.preventDefault(); postData(); }}>
  //           <div className="flex space-x-4 mb-4">
  //             <input
  //               className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //               type="text"
  //               name="firstName"
  //               id="firstName"
  //               placeholder="First Name"
  //               value={formData.firstName}
  //               onChange={handleChange}
  //             />
  //             <input
  //               className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //               type="text"
  //               name="lastName"
  //               id="lastName"
  //               placeholder="Last Name"
  //               value={formData.lastName}
  //               onChange={handleChange}
  //             />
  //           </div>
  
  //           <input
  //             className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //             type="text"
  //             name="username"
  //             id="username"
  //             placeholder="Username"
  //             value={formData.username}
  //             onChange={handleChange}
  //           />
  //           <input
  //             className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //             type="email"
  //             name="email"
  //             id="email"
  //             placeholder="Email"
  //             value={formData.email}
  //             onChange={handleChange}
  //           />
  
  //           <div className="flex space-x-4 mb-4">
  //             <input
  //               className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //               type="password"
  //               name="password"
  //               id="password"
  //               placeholder="Password"
  //               value={formData.password}
  //               onChange={handleChange}
  //             />
  //           </div>
  
  //           <div className="flex space-x-4 mb-4">
  //             <input
  //               className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //               type="tel"
  //               name="phoneNumber"
  //               minLength={10}
  //               maxLength={10}
  //               id="phoneNumber"
  //               placeholder="Phone Number"
  //               value={formData.phoneNumber}
  //               onChange={handleChange}
  //             />
  //             <input
  //               className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //               type="date"
  //               name="dob"
  //               id="dob"
  //               value={formData.dob}
  //               onChange={handleChange}
  //             />
  //           </div>
  
  
  //           <div className="w-full mb-4">
  //             <label className="block text-gray-700">Gender</label>
  //             <select
  //               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //               name="gender"
  //               id="gender"
  //               value={formData.gender}
  //               onChange={handleChange}
  //             >
  //               <option value="male">Male</option>
  //               <option value="female">Female</option>
  //               <option value="other">Other</option>
  //             </select>
  //           </div>
  
  //           <div className="w-full mb-4 flex space-x-4">
  //             <div className="w-1/2">
  //               <label className="block text-gray-700">Country</label>
  //               <select
  //                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //                 name="country"
  //                 id="country"
  //                 value={formData.country}
  //                 onChange={handleChange}
  //               >
  //                 <option value="usa">United States</option>
  //                 <option value="canada">Canada</option>
  //                 <option value="india">India</option>
  //               </select>
  //             </div>
  //             {/* <div className="w-1/2">
  //               <label className="block text-gray-700">State</label>
  //               <input
  //                 className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //                 type="text"
  //                 name="state"
  //                 id="state"
  //                 placeholder="State"
  //                 value={formData.state}
  //                 onChange={handleChange}
  //               />
  //             </div> */}
  //           </div>
  
  //           <input
  //             className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //             type="text"
  //             name="about"
  //             id="about"
  //             placeholder="About"
  //             value={formData.about}
  //             onChange={handleChange}
  //           />
  
  //           {/* <div className="mb-4">
  //             <label className="block text-gray-700">Skills</label>
  //             {formData.skills.map((skill, index) => (
  //               <div className="flex space-x-4 mb-2" key={index}>
  //                 <input
  //                   className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
  //                   type="text"
  //                   name={`skill-${index}`}
  //                   value={skill}
  //                   onChange={(e) => handleSkillChange(e, index)}
  //                 />
  //               </div>
  //             ))}
  //             <button
  //               type="button"
  //               className="text-[#1CC896] mb-4"
  //               onClick={addSkill}
  //             >
  //               Add Skill
  //             </button>
  //           </div> */}
  
  //           <button
  //             type="submit"
  //             className="w-full py-3 mb-4 text-white bg-[#1CC896] rounded-3xl font-semibold hover:bg-[#16a779] focus:outline-none"
  //           >
  //             Register
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }
  
  // export default Register;
  //                     {/* <div className="w-full text-center my-4">
  //             <span className="border-t border-gray-300 w-full inline-block mt-4 mb-4"></span>
  //             <span className="text-gray-600">or</span>
  //           </div> */}
    
  //           {/* <div className="w-full">
  //             <button
  //               type="button"
  //               className="w-full flex justify-center items-center py-3 mb-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-3xl hover:bg-gray-200"
  //             >
  //               <FontAwesomeIcon icon={faGoogle} className="mr-3" />
  //               Continue with Google
  //             </button>
    
  //             <button
  //               type="button"
  //               className="w-full flex justify-center items-center py-3 mb-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-3xl hover:bg-gray-200"
  //             >
  //               <FontAwesomeIcon icon={faFacebook} className="mr-3" />
  //               Continue with Facebook
  //             </button>
    
  //             <button
  //               type="button"
  //               className="w-full flex justify-center items-center py-3 mb-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-3xl hover:bg-gray-200"
  //             >
  //               <FontAwesomeIcon icon={faApple} className="mr-3" />
  //               Continue with Apple
  //             </button>
  //           </div> 
  //         </div>
  //       </div>
  //     );
  //   }
    
  //   export default Register;*/}