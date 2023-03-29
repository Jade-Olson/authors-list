import './App.css';
import AuthorList from "./components/AuthorList";
import AuthorForm from './components/AuthorForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorList/>} path="/home" default/>
          <Route element={<AuthorForm/>} path="/new" />
          <Route element={<UpdateAuthor/>} path="/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
