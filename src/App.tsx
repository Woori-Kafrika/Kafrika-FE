import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PasswordResetPage from './pages/PasswordResetPage';
import RenewalPage from './pages/RenewalPage';
import DashboardPage from './pages/DashboardPage';
import TrafficExceededPage from './pages/TrafficExceededPage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-password" element={<PasswordResetPage />} />
        <Route path="/renewal" element={<RenewalPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/traffic-exceeded" element={<TrafficExceededPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
