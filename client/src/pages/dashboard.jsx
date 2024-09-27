// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear authentication tokens or state here
//     // For example: localStorage.removeItem('authToken');
//     // Then redirect to the login page
//     navigate('/login');
//   };


//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             {/* Left Side */}
//             <div className="flex">
//               <div className="flex-shrink-0 flex items-center">
//                 {/* Logo or Site Name */}
//                 <span className="text-2xl font-bold text-[#e25647]">Taskit</span>
//               </div>
//               {/* Navigation Links */}
//               <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
//                 <a
//                   href="#"
//                   className="border-[#e25647] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                 >
//                   Dashboard
//                 </a>
//                 {/* Add more navigation links as needed */}
//               </div>
//             </div>
//             {/* Right Side */}
//             <div className="flex items-center">
//               <button
//                 onClick={handleLogout}
//                 className="text-gray-600 hover:text-[#e25647] focus:outline-none"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="py-10">
//         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//           {/* Welcome Message */}
//           <h1 className="text-3xl font-bold text-gray-900">
//             Welcome to your Taskit
//           </h1>

//           {/* Task Management Components */}
//           {/* You can add your task list, create task form, etc., here */}
//           <div className="mt-6">
//             {/* Example Task List */}
//             <div className="bg-white shadow overflow-hidden sm:rounded-md">
//               <ul>
//                 {/* Replace the following list items with dynamic content */}
//                 <li className="border-t border-gray-200">
//                   <a href="#" className="block hover:bg-gray-50">
//                     <div className="px-4 py-4 sm:px-6">
//                       <div className="flex items-center justify-between">
//                         <p className="text-sm font-medium text-[#e25647] truncate">
//                           Task Title
//                         </p>
//                         <div className="ml-2 flex-shrink-0 flex">
//                           <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                             Completed
//                           </p>
//                         </div>
//                       </div>
//                       <div className="mt-2 sm:flex sm:justify-between">
//                         <div className="sm:flex">
//                           <p className="flex items-center text-sm text-gray-500">
//                             Task description goes here.
//                           </p>
//                         </div>
//                         <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
//                           {/* Task metadata */}
//                           <svg
//                             className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                             aria-hidden="true"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M6 2a1 1 0 000 2h1v1a1 1 0 102 0V4h2v1a1 1 0 102 0V4h1a1 1 0 100-2H6zM4 6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H4zm0 2h12v8H4V8z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                           <p>Due date: Tomorrow</p>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 {/* Repeat for more tasks */}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication tokens or state here
    // For example: localStorage.removeItem('authToken');
    // Then redirect to the login page
    navigate('/login');
  };

  const handleCreateTask = () => {
    navigate('/create-task'); // Navigate to the Create Task page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left Side */}
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo or Site Name */}
                <span className="text-2xl font-bold text-[#e25647]">Taskit</span>
              </div>
              {/* Navigation Links */}
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="#"
                  className="border-[#e25647] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Dashboard
                </a>
                {/* Add more navigation links as needed */}
              </div>
            </div>
            {/* Right Side */}
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-[#e25647] focus:outline-none"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Welcome Message */}
          <h1 className="text-3xl font-bold text-gray-900">Welcome to your Taskit</h1>

          {/* Create Task, Team Members, Chat Sections */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Create Task Section */}
            <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
              <h2 className="text-xl font-semibold text-[#e25647] mb-2">Create Task</h2>
              <ul>
                <li> </li>
              </ul>

              <button
                onClick={handleCreateTask}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Go to Create Task
              </button>
            </div>

            {/* Team Members Section */}
            <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
              <h2 className="text-xl font-semibold text-[#e25647] mb-2">Team Members</h2>
              <ul>
                {/* Replace the following list items with dynamic content */}
                <li className="border-b border-gray-200 py-2">Dharshni</li>
                <li className="border-b border-gray-200 py-2">Saranya</li>
                <li className="border-b border-gray-200 py-2">Govarthini</li>
                <li className="border-b border-gray-200 py-2">Geetha</li>

                {/* Add more team members as needed */}
              </ul>
            </div>

            {/* Chat Section */}
            <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
              <h2 className="text-xl font-semibold text-[#e25647] mb-2">Chat</h2>
              <div className="h-48 overflow-auto">
              <button
                onClick={handleCreateTask}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Start you conversation
              </button>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
