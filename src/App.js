import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Task from "./pages/Task";
import TaskCreate from "./pages/TaskCreate";
import PrivateRoute from "./components/PrivateRouter";
import HomeAdmin from "./pages/HomeAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/homeadmin" element={<PrivateRoute><HomeAdmin /></PrivateRoute>}/>
        <Route path="/task/:id" element={<PrivateRoute><Task /></PrivateRoute>}/>
        <Route path="/task/create" element={<PrivateRoute><TaskCreate /></PrivateRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;
