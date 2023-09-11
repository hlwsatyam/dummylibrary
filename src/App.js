import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Book from "./components/Book";
import AddBook from "./components/AddBook";
import ClickToViewDetail from "./components/ClickToViewDetail";
function App() {
  return (
    <div data-aos="flip-right"  >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/all-books" element={<Book />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/update-book" element={<AddBook />} />
          <Route path="/details" element={<ClickToViewDetail />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
