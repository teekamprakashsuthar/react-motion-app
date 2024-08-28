import React from "react";
import Background from "./components/Background";
import Fromground from "./components/Fromground";

const App = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Fromground/>
      
      </div>
      
    </>
  );
};

export default App;
