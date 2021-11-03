import './App.css';
import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navbar  />
      <Body    />
      <Body    />
      <Footer  />
    </div>
  );
}

export default App;
