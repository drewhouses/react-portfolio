import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";

const router = createBrowserRouter([
  {}
])

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
