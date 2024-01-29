import { useEffect, useState } from "react";
import MobileView from "../components/Dashboard/Mobileview";
import MediumView from "../components/Dashboard/MediumView";
import LargeView from "../components/Dashboard/LargeView";

function Dashboard() {
  const [viewSize, setViewSize] = useState(null);

  useEffect(() => {
    console.log("Component mounted");

    const handleResize = () => {
      // Update the state based on the viewport width
      const width = window.innerWidth;
      if (width <= 576) {
        setViewSize("small");
      } else if (width > 576 && width <= 1024) {
        setViewSize("medium");
      } else {
        setViewSize("large");
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      console.log("Component will unmount");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {viewSize === "small" ? (
        <MobileView />
      ) : viewSize === "medium" ? (
        <MediumView />
      ) : (
        <LargeView />
      )}
    </div>
  );
}

export default Dashboard;