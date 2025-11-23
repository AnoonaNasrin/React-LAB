import React, { useEffect, useState } from "react";

function ApiFetching() {
  const [data, setDate] = useState();
  const [response, setResponse] = useState(null);
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
     
   
  };

  // GET request
  useEffect(() => {
    fetchData()
     
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setDate(json);
      });
  }, []);
  // POST request
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello World",
        body: "This is my first POST request",
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);


 return Object.keys(user).length > 0 ? (
    <div>
      <h1>Customer data</h1>
      <h2>Name:{user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="image"/>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );

}

export default ApiFetching;
