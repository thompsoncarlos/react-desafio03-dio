import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Cadastro from "./pages/cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-desafio03-dio" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
