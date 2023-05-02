import React, { useState } from "react";

const Footballer = () => {
  const [footballers, setFootballers] = useState([
    {
      name: "Ebrima Samba",
      age: 22,
      country: "Gambia",
    },
    {
      name: "Buba Conteh",
      age: 22,
      country: "Gambia",
    },

    {
      name: "Alieu Bah",
      age: 22,
      country: "Gambia",
    },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = () => {
    setFootballers((currentItems) => [
      ...currentItems,
      { name: name, age: age, country: country },
    ]);
  };

  const deletePlayer = (player) => {
    let filtered = footballers.filter((value) => value.name !== player);
    setFootballers(filtered);
    console.log(filtered);
  };

  return (
    <div>
      <h1>Footballer</h1>
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Age</label>
        <input
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Country</label>
        <input
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
      </div>
      <button onClick={handleSubmit}>submit</button>
      <ol>
        {footballers.map((footballer) => (
          <li key={footballer.name}>
            <h2>Name: {footballer.name}</h2>
            <h3>Age: {footballer.age}</h3>
            <h3>Country: {footballer.country}</h3>
            <button
              style={{ background: "red", color: "#fff" }}
              onClick={() => deletePlayer(footballer.name)}
            >
              delete player
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Footballer;
