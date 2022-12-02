import "./App.css";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
