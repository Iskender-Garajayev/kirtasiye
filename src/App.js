import './App.css';
import Contacts from './components/contacts/Contacts';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/home/Header';

function App() {
  return (
    <div className="App bg-[#FAF0E4]">
      <Header/>
      <Main/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
