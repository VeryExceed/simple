import React, { useEffect } from "react";
import { fetchHome } from "../core/api";

const Home = ({ staticContext }) => {
  console.log("staticContext", staticContext);
  useEffect(() => {
    fetchHome().then((data) => console.log("Home data:", data));
  }, []);
  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
};
Home.getData = fetchHome;

export default Home;
