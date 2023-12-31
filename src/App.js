import './App.css';
import Chat from "./Components/Chat.jsx";
import Home from "./Components/Home.jsx";
import Oizo from "./Components/Oizo.jsx";
import VraiChat from "./Components/VraiChat.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/galeriez_react/" exact element={<Home />} />
          <Route path="/galeriez_react/Chat" exact element={<Chat />} />
          <Route path="/galeriez_react/Oizo" exact element={<Oizo />} />
          <Route path="/galeriez_react/VraiChat" exact element={<VraiChat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
