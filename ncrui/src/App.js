import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Authorizedprojects from "./scenes/authorizedprojects";

function App() {
  return (
    <div className="app" > 
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/authorized-projects" element={<Authorizedprojects /> } />


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;