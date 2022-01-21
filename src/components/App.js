import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("App mounted!");
  }, []);
  return (
	<h1 onClick={() => alert("点击了我？？")}> click me !</h1>
	)
};

export default App;
