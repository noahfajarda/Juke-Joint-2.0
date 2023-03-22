// Boilerplate
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link, Navigate } from "react-router-dom";
import { QUERY_me } from "./utils/queries";

// pages
import ReactBoilerplate from "./pages/ReactBoilerplate";
import LoginPage from "./pages/LoginPage";
import MainSearchPage from "./pages/MainSearchPage";

function App() {
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery(QUERY_me);

  return (
    <Router>
      {/* wrapper for everything routing related */}
      <div className="App">
        <header className="App-header">
          <Routes>
            {/* all other routes */}
            {/* needs below */}
            {/* <Route path="/home" element={<HomePage user={data?.me} />} /> */}
            <Route path="/login" element={<LoginPage user={data?.me} />} />
            <Route path="/main" element={<MainSearchPage />} />
            <Route path="/test" element={<ReactBoilerplate />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
