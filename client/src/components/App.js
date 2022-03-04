import React from "react";
import getEvent from "../utils/getEvents";
import postEvent from "../utils/postEvents";

const App = () => {
  return (
    <>
      <div>APP</div>
      <button onClick={getEvent}>GET EVENT</button>
      <button onClick={() => postEvent({eventType: "button-press", eventName: 'POST EVENT BUTTON'})}>POST EVENT</button>
    </>
  )
};

export default App;
