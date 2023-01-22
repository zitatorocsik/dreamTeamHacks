import logo from './logo.svg';
import './App.css';
import HomePage from './components/home-page';
import PasswordGenerator from './components/password-generator';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <PasswordGenerator/>
    </div>
  );
}

export default App;
