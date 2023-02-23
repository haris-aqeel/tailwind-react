import EchoSystems from "./components/EchoSystems";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platforms from "./components/Platforms";

export default function App() {
  return (
    <div className="bg-black ">
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <Platforms/>
        <EchoSystems/>
      </div>
    </div>
  );
}
