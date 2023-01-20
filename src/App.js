// LIBRARIES
import { Routes, Route, BrowserRouter } from "react-router-dom";

// COMPONENTS
import Layout from "./components/Layout/Layout";
import Authenticate from "./views/Authenticate/Authenticate";
import Dashboard from "./views/Dashboard/Dashboard";
import Persons from "./views/Persons/Persons";
import Projects from "./views/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authenticate />} />
      </Routes>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/persons"
          element={
            <Layout>
              <Persons />
            </Layout>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
