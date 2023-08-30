import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App"; // Importe o componente que você deseja usar
import Form from "../Components/Form/Form";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Defina as rotas usando a tag <Route> dentro da tag <Routes> */}
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
