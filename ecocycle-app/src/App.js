import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<RegistrationForm />} />
      <Route path="/" element={<MainPage/>} />
      </Routes>   
    </div>
    </BrowserRouter>
  );
}

export default App;
