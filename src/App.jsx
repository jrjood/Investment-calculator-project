import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue === "" ? null : +newValue, // Allow empty input
    }));
  }

  return (
    <>
      <Header />
      <UserInput userData={userInput} onChangeUserInput={handleChange} />
      {userInput.duration > 0 ? (
        <Result userData={userInput} />
      ) : (
        <p className="center">Please a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
