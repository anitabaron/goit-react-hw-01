import { useState } from "react";
import "./App.css";

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // clicks = clicks + 1;
    setClicks(clicks + 1);
  };

  return <button onClick={handleClick}>Current: {clicks}</button>;
};

export default App;
