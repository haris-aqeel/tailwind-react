import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tokenomics from "./components/Tokenomics";

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Tokenomics />

    </div>
  );
}
