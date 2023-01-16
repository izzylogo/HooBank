import './App.css';
import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonal} from "./components"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Stats/>
      <Business/>
      <Billing/>
      <CardDeal/>
      {/* <Testimonal/> */}
    </div>
  );
}

export default App;
