import './App.css';
import {Router} from '@reach/router';
import AllPets from './components/AllPets';
import PetDetails from './components/PetDetails';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
function App() {
  return (
    <div className="App">
      <Router>
        <AllPets default/>
        <NewPet path='/pets/new'/>
        <PetDetails path='/pets/:pet_id'/>
        <EditPet path='pets/:id/edit'/>
      </Router>
    </div>
  );
}

export default App;
