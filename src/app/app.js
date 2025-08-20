import { Routes, Route } from "react-router-dom";
import Main_Pages from "./main_pages.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main_Pages />} />
    </Routes>
  );
}
