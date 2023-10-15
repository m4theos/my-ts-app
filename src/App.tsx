import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Main } from "./main/main";
import { Login } from "./pages/login";
import { NavBar } from "./components/navbar";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CreatePost } from "./pages/create-post/create-post";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
