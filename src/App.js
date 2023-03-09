import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Header from './components/home/Header';
import HomeCategory from './components/home/HomeCategory';
import { UserProvider } from './components/context/UserContext';
import Tutors from './components/home/Tutors';

function App() {
  return (
    <div className="App">

      <UserProvider>
        <Navbar />
        <Tutors/>

        <Header />
        <hr class="col-12"></hr>
        <Tutors/>
        <HomeCategory />
      </UserProvider>

    </div>
  );
}

export default App;
