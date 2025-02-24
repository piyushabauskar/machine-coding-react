import { useState } from "react";
const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: [],
    age: "",
    password: "",
  });

  const setAttribute = (e, attribute) => {
    let val = e.target.value;
    setUser((prev) => {
      return {
        ...prev,
        [attribute]: val,
      };
    });
  };

  return (
    <div className="container">
      <div className="item">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={user.name}
          onChange={(e) => setAttribute(e, "name")}
        />
      </div>
      <div  className="item">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => setAttribute(e, "email")}
        />
      </div>
      <div  className="item">
        <label>Phone</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={user.phone}
          onChange={(e) => setAttribute(e, "phone")}
        />
      </div>
      <div  className="item">
        <label>Address</label>
        <textarea
          placeholder="Enter your address"
          value={user.address}
          onChange={(e) => setAttribute(e, "address")}
        />
      </div>
      <div  className="item">
        <label>Gender</label>
        <div>
          <span>Male</span>
          <input
            type="radio"
            value="Male"
            checked={user.gender.includes("Male")}
            onChange={(e) => setAttribute(e, "gender")}
          />
        </div>
        <div>
          <span>Female</span>
          <input
            type="radio"
            value="Female"
            checked={user.gender.includes("Female")}
            onChange={(e) => setAttribute(e, "gender")}
          />
        </div>
      </div>
      <div  className="item">
        <label>Age</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={user.age}
          onChange={(e) => setAttribute(e, "age")}
        />
      </div>
    </div>
  );
};

export default Form;
