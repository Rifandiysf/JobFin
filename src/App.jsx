import "../public/css/satoshi.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import SignupPage from "./pages/Signup";
import AppLayout from "./components/layout/app-layout";
import Application from "./pages/Application";
import OAuthSuccess from "./pages/OAuthSuccess";
import { ProtectedRoute } from "./components/common/protected-route";
import { GuestRoute } from "./components/common/guest-route";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<GuestRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          <Route path="/oauth-success" element={<OAuthSuccess />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/application" element={<Application />} />
            </Route>

            <Route path="/setting" element={<Setting />} />
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App