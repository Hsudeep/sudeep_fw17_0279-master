import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the

const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  const [idVal, setidVal] = useState(0);

  const handleNext = () => {
    setidVal(idVal + 1);
  };

  const handlePrev = () => {
    setidVal(idVal - 1);
  };
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide data={data[idVal]} />
      <button disabled={idVal === 0} onClick={handlePrev} data-testid="prev">
        Prev
      </button>
      <button
        disabled={idVal === data.length - 1}
        onClick={handleNext}
        data-testid="next"
      >
        Next
      </button>
    </div>
  );
}
