import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonList from "./components/PersonList";
import AddPerson from "./components/AddPerson";
import EditPerson from "./components/EditPerson";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<PersonList />} />
          <Route path="add" element={<AddPerson />} />
          <Route path="edit/:id" element={<EditPerson />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
