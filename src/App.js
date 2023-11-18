import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index path="login" element={<Login />} />
        <Route path="reset_password" element={<ResetPassword />} />
        <Route path="register" element={<Register />} />

        {/* catch all - replace with 404 component */}
        {/* replace is a bad request to good request in history */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
