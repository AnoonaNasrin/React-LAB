import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);


  return render({ mousePosition });
};

const PanelMouseLogger = ({ mousePosition }) => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => {
          return (
            <div className="Row">
              {" "}
              <span>x: {mousePosition.x}</span>
              <span>y: {mousePosition.y}</span>
            </div>
          );
        }}
      />
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = ({ mousePosition }) => {
  
  return (
    <MousePosition render={({ mousePosition }) => (
      <p>({mousePosition.x},{ mousePosition.y})</p>)}/>
    // <p>
    //   ({mousePosition.x}, {mousePosition.y})
    // </p>
  );
};

function RenderProp() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default RenderProp;
