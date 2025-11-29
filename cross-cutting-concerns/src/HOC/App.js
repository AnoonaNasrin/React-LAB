import React, { useEffect, useState } from "react";
import "./App.css";

function withMousePosition(component) {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.addEventListener(
          "mousemove",
          handleMousePositionChange
        );
      };
    }, []);
    return <component {...props} mousePosition={mousePosition} />;
  };
}
const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};
const PanelMouseLoggerTracker = withMousePosition(PanelMouseLogger);
const PointMouseLoggerTracker = withMousePosition(PointMouseLogger)



function HOCComponent() {
  return (
    <div>
        <PanelMouseLoggerTracker/>
        <PointMouseLoggerTracker/>
    </div>
  )
}

export default HOCComponent