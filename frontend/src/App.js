import { Routes, Route, Navigate } from 'react-router-dom';
import "./components/styles/App.css"
import Home from "./components/pages/Home"
import Chat from "./components/pages/Chat"
import Login from "./components/pages/Login"
import SignUp from './components/pages/SignUp';
import { isAuthenticated } from './components/auth/AuthContext';

// Create a ProtectedRoute component to handle protected routes
const ProtectedRoute = ({ path, element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Use inline rendering for conditional routing */}
        <Route path='/' element={<Home />} />
        <Route
          path='/chat'
          element={<ProtectedRoute element={<Chat />} />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
