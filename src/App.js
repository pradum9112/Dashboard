import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/topbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Dashboard from "./views/dashboard/Dashboard";

import Login from "./views/auth/Login";
import ResetPassword from "./views/auth/ResetPassword";

import Users from "./views/user/Users";
<<<<<<< Updated upstream
import UserProfile from "./views/userProfile/UserProfile";
=======
import AddNewUser from "./views/user/AddNewUser";
import UpdateUser from "./views/user/UpdateUser";
import UserProfile from "./views/user/UserProfile";

import Visitors from "./views/visitor/Visitors";
import AddNewVisitor from "./views/visitor/AddNewVisitor";
import UpdateVisitor from "./views/visitor/UpdateVisitor";
import VisitorProfile from "./views/visitor/VisitorProfile";
>>>>>>> Stashed changes

function App() {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <BrowserRouter>
        <Topbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/resetpassword" element={<ResetPassword />}></Route>
<<<<<<< Updated upstream
            <Route path="/userprofile/:id" element={<UserProfile />}></Route>
=======

            <Route path="/users" element={<Users />}></Route>
            <Route path="/users/addnewuser" element={<AddNewUser />}></Route>
            <Route path="/users/updateuser" element={<UpdateUser />}></Route>
            <Route path="/users/userprofile" element={<UserProfile />}></Route>

            <Route path="/visitors" element={<Visitors />}></Route>
            <Route path="/visitors/addnewvisitor" element={<AddNewVisitor />}></Route>
            <Route path="/visitors/updatevisitor" element={<UpdateVisitor />}></Route>
            <Route path="/visitors/visitorprofile" element={<VisitorProfile />}></Route>            
>>>>>>> Stashed changes
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
