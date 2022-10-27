import logo from './logo.svg';
import './App.css';
import { Table } from './Components/Table';
import { EditForm } from './Components/EditForm';
import {useSelector} from 'react-redux'
import { AddForm } from './Components/AddForm';
import { Navbar } from './Components/Navbar';
import { LeftComponent } from './Components/LeftComponent';

function App() {
  const isEdit=useSelector((state)=>state.isEdit)
  const isAdd=useSelector((state)=>state.isAdd)
  return (
    <div className="App">
      <div>
      <Navbar/>
      {/* <div>
        <LeftComponent/>
      </div> */}
      </div>
      {
        isEdit?<EditForm/>:isAdd?<AddForm/>:<Table/>
      }
    </div>
  );
}

export default App;
