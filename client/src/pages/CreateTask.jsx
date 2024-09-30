
// import { useState } from "react";

// const CreateTask = ({ isOpen, onClose, handleAddTask }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("low");
//   const [deadline, setDeadline] = useState("");
//   const [tags, setTags] = useState("");

//   const handleSubmit = () => {
//     const newTask = {
//       id: Date.now(),
//       title,
//       description,
//       priority,
//       deadline, // already formatted as 'YYYY-MM-DDTHH:MM' from input
//       tags: tags.split(',').map((tag) => ({ title: tag.trim(), bg: "#ccc", text: "#000" })),
//     };
//     handleAddTask(newTask);
//     resetForm(); // Reset form after adding the task
//   };

//   const resetForm = () => {
//     setTitle("");
//     setDescription("");
//     setPriority("low");
//     setDeadline("");
//     setTags("");
//     onClose(); // Close the modal
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Title</label>
//           <input
//             type="text"
//             className="w-full border rounded px-3 py-2"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <textarea
//             className="w-full border rounded px-3 py-2"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Priority</label>
//           <select
//             className="w-full border rounded px-3 py-2"
//             value={priority}
//             onChange={(e) => setPriority(e.target.value)}
//           >
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Deadline (Date and Time)</label>
//           <input
//             type="datetime-local"
//             className="w-full border rounded px-3 py-2"
//             value={deadline}
//             onChange={(e) => setDeadline(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
//           <input
//             type="text"
//             className="w-full border rounded px-3 py-2"
//             value={tags}
//             onChange={(e) => setTags(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Add Task
//           </button>
//           <button
//             onClick={resetForm}
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateTask;


import React, { useState } from 'react';

const CreateTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [deadline, setDeadline] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      deadline, // in 'YYYY-MM-DDTHH:MM' format
      tags: tags.split(',').map((tag) => tag.trim()), // convert comma-separated string into array
    };

    onAddTask(newTask); // Call the function passed as a prop to add the task
    resetForm(); // Clear the form after submission
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPriority('low');
    setDeadline('');
    setTags('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Create New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter task title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter task description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Deadline</label>
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="e.g., urgent, team"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
