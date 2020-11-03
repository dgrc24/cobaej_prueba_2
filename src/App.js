import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import SideBar from './components/SideBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <SideBar></SideBar>
      <Footer></Footer></div>
  );
}

export default App;
