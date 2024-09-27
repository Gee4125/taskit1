

import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateTask from './pages/Create-task';
function App() {
  return (
    <div>
      <Routes>
        {/* Redirect root URL to /log-in */}
        <Route path="/" element={<Navigate to="/log-in" />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/Create-task" element={<CreateTask/>} />

      </Routes>
    </div>
  );
}

export default App;


