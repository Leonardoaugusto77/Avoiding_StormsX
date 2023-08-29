import App from "../App";
import Form from "../Components/Form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
