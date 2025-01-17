import { useState } from "react";
import "./App.css";

function App() {
  const [inputVal, setInputValue] = useState({
    websiteName: "",
    yourName: "",
    email: "",
    feedBack: "",
    greeting: "",
    githubUrl: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setInputValue((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };
  return (
    <>
 
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-4 p-5 bg-slate-600 lg:h-screen h-auto">
        <div className="space-y-10 bg-sky-900 p-5 rounded-lg">
          <h1 className="text-3xl font-bold text-white">Input Mirror</h1>
          <div className="flex flex-wrap md:gap-5 gap-3 ">
            <input
              type="text"
              name="websiteName"
              placeholder="Website Name"
              value={inputVal.websiteName}
              onChange={handleInputChange}
              className=" py-3 px-4 rounded-md w-full placeholder:text-gray-800 outline-none focus:shadow-md focus:shadow-sky-300 transition-all duration-300 ease-in"
            />
            <input
              type="text"
              name="greeting"
              placeholder="Greet Here ..."
              value={inputVal.greeting}
              onChange={handleInputChange}
              className=" py-3 px-4 rounded-md w-full placeholder:text-gray-800 outline-none focus:shadow-md focus:shadow-sky-300 transition-all duration-300 ease-in"
            />
            <input
              type="text"
              name="yourName"
              placeholder="Enter Your Name"
              value={inputVal.yourName}
              onChange={handleInputChange}
              className=" py-3 px-4 rounded-md w-full placeholder:text-gray-800 outline-none focus:shadow-md focus:shadow-sky-300 transition-all duration-300 ease-in"
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={inputVal.email}
              onChange={handleInputChange}
              className=" py-3 px-4 rounded-md w-full placeholder:text-gray-800 outline-none focus:shadow-md focus:shadow-sky-300 transition-all duration-300 ease-in"
            />
            <input
              type="text"
              name="githubUrl"
              placeholder="Email Address"
              value={inputVal.githubUrl}
              onChange={handleInputChange}
              className=" py-3 px-4 rounded-md w-full placeholder:text-gray-800 outline-none focus:shadow-md focus:shadow-sky-300 transition-all duration-300 ease-in"
            />
            <textarea
              type="text"
              name="feedBack"
              placeholder="Your Feedback here..."
              value={inputVal.feedBack}
              onChange={handleInputChange}
              className=" py-3 px-4 rounded-md w-full placeholder:text-gray-800 outline-none focus:shadow-md focus:shadow-sky-300 transition-all duration-300 ease-in"
            ></textarea>
          </div>
        </div>
        <div className="space-y-4 bg-gradient-to-tr from-slate-800 to-sky-300 md:p-5 p-3 rounded-lg">
        <h1 className="md:text-3xl text-2xl font-bold text-center">OutPut Mirror</h1>
          <div className="mirror w-full space-y-5">
            <p className="sm:text-2xl text-lg text-center">
              Welcome to <strong className="underline underline-offset-8">{inputVal.websiteName}</strong>
            </p>
            <p className="text-center underline underline-offset-8">{inputVal.greeting}</p>
            <p className="sm:text-2xl text-lg text-center ">
              I am <strong className="underline underline-offset-8">{inputVal.yourName}</strong>
            </p>
            <div className="bg-sky-200 space-y-4 p-4 border-4 border-sky-500 rounded-lg">
              <p className="sm:text-xl text-lg">
                Email: <strong className="underline underline-offset-4">{inputVal.email}</strong>
              </p>
              <p className="break-words sm:text-xl text-lg">
                Github URL:{" "}
                <a href={inputVal.githubUrl}>
                  <strong className="hover:underline underline-offset-4">{inputVal.githubUrl}</strong>
                </a>
              </p>
              <p className="break-words sm:text-xl text-lg">Your Feedback: <span className="leading-[2.5rem]">{inputVal.feedBack}</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
