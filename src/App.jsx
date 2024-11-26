import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AuthChecker from './components/AuthChecker';

const App = () => {
  return (
    <Router>
      <AuthChecker>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthChecker>
    </Router>
  );
};

export default App;
