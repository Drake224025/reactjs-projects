// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log("data", data);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Repos: {data.public_repos}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/drake224025");
  return response.json();
};
