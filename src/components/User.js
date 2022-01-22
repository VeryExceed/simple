import React, { useEffect } from "react";
import { fetchUser } from "../core/api";
const User = ({ staticContext }) => {
  console.log("staticContext", staticContext);
  useEffect(() => {
    fetchUser().then((data) => console.log("user data:", data));
  }, []);
  return (
    <main>
      <h1>User Page</h1>
      <button onClick={() => alert("user!")}>click</button>
    </main>
  );
};
User.getData = fetchUser;
export default User;
