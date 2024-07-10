import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const person = {
      firstname: firstname,
      lastname: lastname,
    };
    try {
      const data = await axios.post(`/api/register`, person);
      console.log(data);
    } catch (error) {
      console.error("Error registering person:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Register Form</h2>
        <label htmlFor="exampleInputEmail1">Enter Your First Name</label>
        <input
          type="text"
          id="exampleInputEmail1"
          placeholder="First Name........."
          name="firstname"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstname}
        />

        <label htmlFor="exampleInputPassword1">Enter Your Last Name</label>
        <input
          type="text"
          id="exampleInputPassword1"
          placeholder="Last Name........."
          name="lastname"
          onChange={(e) => setLastName(e.target.value)}
          value={lastname}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
