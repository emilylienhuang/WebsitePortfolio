import React from "react";
import IntroSection from "./components/IntroSection";
import "./App.css"; // Ensure global styles are loaded

const App: React.FC = () => {
  return (
    <div className="App">
      <IntroSection />
    </div>
  );
};

export default App;
