import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import UserCard from './Components/UserCard';
import ApiFetch from './Components/ApiFetch';

function App() {
  return (
    <div className='app'>
      <ApiFetch/>
      <UserCard/>
    </div>
  );
}

export default App;
