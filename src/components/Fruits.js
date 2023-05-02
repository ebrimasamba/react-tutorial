import React, { useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);
  const [value, setValue] = useState("");

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    // console.log(value)
    setFruits((currentItems) => [...currentItems, value]);
  };

  return (
    <div>
      <h1>Fruits</h1>
      <input type="text" onChange={onInputChange} />
      <button onClick={handleSubmit}>submit</button>
      <ol>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ol>
    </div>
  );
};

export default Fruits;
