import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './Components/User/User.jsx'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<User/>} />
      </Routes>
    </Router>
  );
}

export default App;
