import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link to={"/home"}>Home</Link>} />
        <Route path="/login" element={<Link to={"/login"}>Login</Link>} />
        <Route path="/register" element={<Link to={"/register"}>Register</Link>} />

        <Route
          path="/dashboard"
          element={
            <Link to={"/dashboard"}>Dashboard</Link>
          }
        />
        <Route
          path="/add-product"
          element={
            <Link to={"/add-product"}>Add Product</Link>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
