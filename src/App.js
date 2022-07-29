import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Screensaver from './components/Screensaver';

const App = () => {
  return (
    <div className="App_shop_wear">
      <Header />
      <Screensaver />
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
