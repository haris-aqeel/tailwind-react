import EchoSystems from "./components/EchoSystems";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platforms from "./components/Platforms";
import Tokenomics from "./components/Tokenomics";

export default function App() {
  return (
    <div className="bg-black ">
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <Platforms/>
        <EchoSystems/>
        <Tokenomics/>
      </div>
    </div>
  );
}
