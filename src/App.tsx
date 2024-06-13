import React from "react";
import ToggleSwitch from "./components/togglesw/ToggleSwitch";
import LoadingTube from "./components/loadingtube/LoadingTube";
import PlusButton from "./components/plusbutton/PlusButton";

function App() {
  return (
    <>
      <div className="w-svw h-svh">
        {/* <ToggleSwitch /> */}
        <div className="flex justify-around mt-24">
          <LoadingTube />
          <PlusButton />
        </div>
      </div>
    </>
  );
}

export default App;
