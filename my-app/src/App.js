import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
 
import Second from "./components/stanjo";
import Third from "./components/Third";
import Why from "./components/why";
import Download from "./components/Download";
import Clients from "./components/clients";
import LightingPreview from "./components/Fourth";
import Yourworld from "./components/Yourworld";


function App() {
  return (
    <div>
      <Header />
      <Yourworld />
      <Second />
      <Third/>
      <LightingPreview/>
      <Why/>
      <Download/>
      <Clients/>
      <Footer />
    </div>
  );
}

export default App;