
import './App.css';

import Navbar from './components/Navbar';


import Footer from './components/Footer';

import Formone from './events/Formone';
import Fetch from './fetch/Fetch';



function App() {
  return (
    <div className="App">


      <Navbar />
      {/* <Parent /> */}
      <Formone/>
      <Fetch/>
      <Footer />


    </div>
  );
}

export default App;
