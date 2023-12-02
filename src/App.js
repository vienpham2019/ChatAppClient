import { Routes, Route, Navigate } from "react-router-dom";
import AuthorizationLayout from "./components/AuthorizationLayout.js";
import NotFound from "./pages/not_found/NotFound.js";
import Login from "./pages/authorization/login/Login.js";
import Register from "./pages/authorization/register/Register.js";
import ResetPassword from "./pages/authorization/reset_password/ResetPassword.js";
import UserLayout from "./components/UserLayout.js";
import ProfilePage from "./pages/profile/ProfilePage.js";

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

        <Route path="user" element={<UserLayout />}>
          <Route index element={<Navigate to="/user/profile" />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        {/* catch all - replace with 404 component */}
        {/* replace is a bad request to good request in history */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
