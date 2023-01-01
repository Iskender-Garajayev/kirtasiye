import './App.css';
import Contacts from './components/contacts/Contacts';
import Home from './components/home/Home';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Main/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
