import JobsList from "./components/jobs-list";
import Navbar from "./components/navbar";
import RampupCard from "./components/rampup-card";
import OptionsCard from "./components/options-card";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-sans flex flex-col px-6 space-y-4 tracking-wide pb-4">
      <Navbar />
      <div className="flex space-x-6">
        <div className="flex-1 flex-col space-y-6">
          <RampupCard />
          <JobsList />
        </div>
        <OptionsCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
