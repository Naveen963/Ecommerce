import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginPage, SignUpPage } from "./Routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace={true} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
