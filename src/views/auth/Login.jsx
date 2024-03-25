import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar";
import Footer from "../../components/footer";

// Alert component
const Alert = ({ message }) => {
  return (
    <div
      className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Alert:</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Code for any side effects on component mount
  }, []);

  const handleSubmit = () => {
    const message = `Username: ${username}, Password: ${password}`;
    setUsername("");
    setPassword("");
    setShowAlert(true);
  };

  return (
    <div style={{ display: "block" }}>
      {/* <Topbar /> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="w-[28rem] max-w-md p-3 bg-white rounded-lg shadow p-4">
          <div className="mb-2">
            {showAlert && <Alert message="Login Successful!" />}
          </div>
          <div className="mb-3 ms-2 text-3xl font-bold flex items-center justify-between">
            Login
          </div>
          <form className="bg-white  rounded px-3 py-3">
            <div className="mb-3">
              <input
                className="shadow-inner appearance-none border border-gray-300 hover:border-[#98adea] rounded w-[26rem] py-1 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                style={{ width: "-webkit-fill-available" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="shadow-inner appearance-none border border-gray-300 rounded w-[26rem] hover:border-[#98adea] py-1 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                style={{ width: "-webkit-fill-available" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#011638] hover:bg-[#011638]/90 w-[26rem] text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
