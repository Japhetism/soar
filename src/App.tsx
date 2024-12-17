// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"; // Adjust the path as necessary
import Dashboard from "./pages/dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
