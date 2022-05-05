// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard name="Doe, Jane" Age={45} hairColor="Black" buttonName="Jane Doe"/>
        <PersonCard name="Smith, John" Age={88} hairColor="Brown" buttonName="John Smith"/>
        <PersonCard name="Fillmore, Millard" Age={50} hairColor="Brown" buttonName="Millard Fillmore"/>
        <PersonCard name="Smith, Maria" Age={62} hairColor="Brown" buttonName="Maria Smith"/>
    </div>
  );
}

export default App;
