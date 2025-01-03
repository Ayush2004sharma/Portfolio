import BackgroundImage from "../Components/BackgroundImage";
import Navbar from "../Components/NavBar";
import Intro from "../Components/Intro";
import Image from "../Components/image";
import Skills from "../Components/Skills";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="relative">

      <div className="relative z-10 bg-white shadow-xl">
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>

    
     {selectedTab==="Home"&&( <div className="relative w-full h-screen -z-10">
        <BackgroundImage />
      </div>)}

      {selectedTab === "Home" && (
        <div className="absolute top-24 z-20">
          <Intro />
        </div>
      )}

      {selectedTab === "Skills" && (
        <div className="relative bg-white z-20">
          <Skills />
        </div>
      )}

      {selectedTab === "About" && (
        <div className="relative p-8 bg-white z-20">
          <h1 className="text-2xl font-bold">About Section</h1>
          <p>This is the About section content.</p>
        </div>
      )}

      {selectedTab === "Contact" && (
        <div className="relative p-8 bg-white z-20">
          <h1 className="text-2xl font-bold">Contact Section</h1>
          <p>This is the Contact section content.</p>
        </div>
      )}
      {selectedTab === "Work" && (
        <div className="relative p-8 bg-white z-20">
          <h1 className="text-2xl font-bold">Work Section</h1>
          <p>This is the Work section content.</p>
        </div>
      )}

      {selectedTab === "Education" && (
        <div className="relative p-8 bg-white z-20">
          <h1 className="text-2xl font-bold">Education Section</h1>
          <p>This is the Education section content.</p>
        </div>
      )}

      {selectedTab === "Experience" && (
        <div className="relative p-8 bg-white z-20">
          <h1 className=" text-2xl font-bold">Experience Section</h1>
          <p>This is the Experience section content.</p>
        </div>
      )}
     {selectedTab==="Home" &&( <div className="absolute top-44 right-10 md:right-20 lg:right-44 z-30 hidden lg:block">
        <Image />
      </div>)}
    </div>
  );
}

export default App;
