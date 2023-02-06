import './App.css';
import AddDetails from './Components/AddDetails';
import DataBoard from './Components/DataBoard';
import NavBar from './Components/NavBar';
import EditDetails from './Components/EditDetails';
import { useState } from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {
  const [userdata,setuserData]=useState([
    {
        name : "Manju",
        age:"15",
        dob:"31.10.2001",
        standard:"10"
    },

    {
      name : "vasu",
      age:"15",
      dob:"16.11.1998",
      standard:"10"
  }
])
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <Routes>
      <Route path='/databoard'element={<DataBoard data={{userdata,setuserData}}/>}/>
    
      <Route path='/add-details'element={ <AddDetails data={{userdata , setuserData}}/>}/>
      <Route path='*'element={<Navigate to='/databoard'/>}/>
      <Route path='/edit-user/:id' element={<EditDetails data={{userdata , setuserData}}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;