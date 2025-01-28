import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
