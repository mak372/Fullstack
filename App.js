import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/addemployee' element={<AddUser/>}></Route>
          <Route exact path='/updateemployee/:id' element={<EditUser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
