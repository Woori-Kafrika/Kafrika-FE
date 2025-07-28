import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PasswordResetPage from './pages/PasswordResetPage';
import RenewalPage from './pages/RenewalPage';
import DashboardPage from './pages/DashboardPage';
import TrafficExceededPage from './pages/TrafficExceededPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-password" element={<PasswordResetPage />} />
        <Route path="/renewal" element={<RenewalPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/traffic-exceeded" element={<TrafficExceededPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
