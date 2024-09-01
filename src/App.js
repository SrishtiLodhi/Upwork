import { useState } from "react";
import JobsList from "./components/JobsList";
import Navbar from "./components/Navbar";
import RampupCard from "./components/RampupCard";
import OptionsCard from "./components/OptionsCard";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="font-sans flex flex-col px-6 space-y-4 tracking-wide pb-4">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Navbar />
          <div className="flex space-x-6">
            <div className="flex-1 flex-col space-y-6">
              <RampupCard />
              <JobsList />
            </div>
            <OptionsCard />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
