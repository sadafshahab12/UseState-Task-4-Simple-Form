import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setMessage("Form Submitted Successfully");
      setTimeout (()=>{
        setMessage("");
        setFormData({
          username: "",
          email: "",
          password: "",
        })
      },1000)
    }, 500);
  };

  return (
    <>
      <div className=" bg-bgImage bg-cover bg-center bg-no-repeat h-screen flex justify-end items-center sm:p-10 p-5">
        <div className="max-w-lg  space-y-4 border p-5 bg-pink-200 ">
          <h1 className="text-center text-3xl font-bold">Simple Form</h1>
          <form onSubmit={handleFormSubmit} className="flex flex-wrap gap-5 ">
            <input
              type="text"
              value={formData.username}
              placeholder="Enter User Name"
              className="input"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <input
              type="email"
              value={formData.email}
              placeholder="Enter Email Address"
              className="input"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              value={formData.password}
              placeholder="Enter Password"
              className="input"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="submit"
              className="bg-pink-500  py-4 px-4 w-full text-lg text-white"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
            {message && (<p className="text-center">{message}</p>)}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
