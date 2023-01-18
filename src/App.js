import './App.css';
import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonal, CTA, Footer} from "./components"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Stats/>
      <Business/>
      <Billing/>
      <CardDeal/>
      <Testimonal/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
