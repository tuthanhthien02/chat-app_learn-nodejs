import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Home />
        {/* <Login /> */}
        {/* <SignUp /> */}

        {/* <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
        <Toaster /> */}
      </div>
    </>
  );
}

export default App;
