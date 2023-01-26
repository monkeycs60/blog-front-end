import Layout from "./components/Layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to={"/error404"} />} />
      </Routes>
    </Layout>
  );
}

export default App;
