import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Authors from "./pages/Authors";
import DeleteAuthor from "./pages/DeleteAuthor";

function App() {
  
  return (
    <div className="app bg-gray-900 min-h-screen">
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/delete" element={<DeleteAuthor />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;