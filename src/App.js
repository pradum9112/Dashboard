import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/topbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Dashboard from "./views/dashboard/Dashboard";

import Login from "./views/auth/Login";
import ResetPassword from "./views/auth/ResetPassword";
import Visitors from "./views/visitor/Visitors";
import Users from "./views/user/Users";
import UserProfile from "./views/userProfile/UserProfile";

function App() {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <BrowserRouter>
        <Topbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/visitors" element={<Visitors />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/resetpassword" element={<ResetPassword />}></Route>
            <Route path="/userprofile/:id" element={<UserProfile />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
