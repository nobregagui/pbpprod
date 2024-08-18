import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importe os componentes de roteamento
import "./App.css";
import CustomTheme from "./CustomTheme";
// import Teste from "./components/pages";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import Home from "./components/pages/About";
import Galery from "./components/pages/Galery";
import Depoiments from "./components/pages/Depoiments";

const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galery />} />
          <Route path="/depoimentos" element={<Depoiments />} />
        </Routes>
      </Theme>
    </BrowserRouter>
  );
};

export default App;
