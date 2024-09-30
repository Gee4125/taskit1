

// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// //import CreateTask from './pages/Create-task';
// function App() {
//   return (
//     <div>
//       <Routes>
//         {/* Redirect root URL to /log-in */}
//         <Route path="/" element={<Navigate to="/log-in" />} />
//         <Route path="/log-in" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard/>} />
        

//       </Routes>
//     </div>
//   );
// }

// export default App;


import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateTask from './pages/CreateTask'; // Correct file name

function App() {
  return (
    <div>
      <Routes>
        {/* Redirect root URL to /log-in */}
        <Route path="/" element={<Navigate to="/log-in" />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Route for CreateTask */}
        <Route path="/CreateTask" element={<CreateTask />} />
      </Routes>
    </div>
  );
}

export default App;
