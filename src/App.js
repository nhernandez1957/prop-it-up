// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard name="Doe, Jane" Age="45" hairColor="Black"/>
        <PersonCard name="Smith, John" Age="88" hairColor="Brown"/>
        <PersonCard name="Fillmore, Millard" Age="50" hairColor="Brown"/>
        <PersonCard name="Smith, Maria" Age="62" hairColor="Brown"/>
    </div>
  );
}

export default App;
