import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Animals from "./Pages/Animals";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Animals />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
    </div>
  );
}

export default App;
