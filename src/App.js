import { Routes, Route, Navigate } from "react-router-dom";
import AuthorizationLayout from "./components/AuthorizationLayout";
import NotFound from "./pages/not_found/NotFound";
import Login from "./pages/login/Login.js";
import Register from "./pages/register/Register.js";
import ResetPassword from "./pages/reset_password/ResetPassword";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route element={<AuthorizationLayout />}>
          <Route index element={<Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="reset_password" element={<ResetPassword />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="user"></Route>
        {/* catch all - replace with 404 component */}
        {/* replace is a bad request to good request in history */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
