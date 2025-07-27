import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PasswordResetPage from './pages/PasswordResetPage';
import RenewalPage from './pages/RenewalPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-password" element={<PasswordResetPage />} />
        <Route path="/renewal" element={<RenewalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
