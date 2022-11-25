import { useState } from "react";
import "./styles.css";

const Slide = ({className}) => {
  return (
    <svg className={className} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <rect className="theme_background" width="300" height="300" />
        <text className="theme_heading" x="10" y="35">Example Heading</text>
        <text className="theme_body a" x="30" y="100">First Body text</text>
        <text className="theme_body b" x="30" y="175">Body text #2</text>
        <text className="theme_body c" x="30" y="250">Another body text!</text>
    </svg>
  )
}

export default function App() {
  const [isAnimated, setIsAnimated] = useState(true);
  const classes = `plain ${isAnimated? 'animated': 'animation-off'}`;
  return (
    <div className="App">
      <fieldset name="Options">
        <legend>Options</legend>
        <label>
          <input type="checkbox" checked={isAnimated} onChange={(e) => setIsAnimated(e.target.checked)} />
          Animated
        </label>
      </fieldset>
      <Slide className={classes} />
    </div>
  );
}
