import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="heading">
        <h1 class="font-mono text-blue-700">
          <FaUser /> Register
        </h1>
        <p class="font-mono text-blue-500">Please create an account</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-blue-800 font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] p-2.5 mt-[20px]"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-blue-800 font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] p-2.5 mt-[20px]"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-blue-800 font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] p-2.5 mt-[20px]"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-blue-800 font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] p-2.5 mt-[20px]"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 border-b-4 border-blue-700 hover:border-blue-500 rounded  mt-[20px]">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
