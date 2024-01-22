import React, { useRef } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  console.log("app rendered");
  return (
    <>
      <Container />
    </>
  );
}

function Container() {
  console.log("container rendered");
  return (
    <>
      <div
        className="border-2 border-solid border-white rounded-3xl flex flex-col justify-center items-center gap-10"
        style={{ width: "30rem", height: "30rem" }}
      >
        <h1 className="tracking-wide text-5xl text-white font-medium">
          Login via OTP
        </h1>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InputNumberInterface />} />
            <Route path="/otp-login" element={<InputOtpInterface />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

function InputNumberInterface() {
  console.log("number interface rendered");
  const inputNumRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputNumRef.current.focus();
  }, []);

  function handleButtonClick() {
    if (!inputNumRef.current.value) return;

    navigate("/otp-login");
  }

  return (
    <>
      <input
        type="number"
        className="rounded-md px-4 h-12 w-80 bg-transparent border-2 border-solid border-white text-white tracking-wide [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        placeholder="Enter Your Mobile Number"
        ref={inputNumRef}
        required
      />

      <button
        className="rounded-2xl h-14 w-36 bg-transparent border-2 border-solid border-white text-lg text-white tracking-wider"
        onClick={handleButtonClick}
      >
        Send OTP
      </button>
    </>
  );
}

function InputOtpInterface() {
  console.log(" otp interface rerendered");

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();

  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  function handleInput(e) {
    let inputValue = e.target.value;
    const target = e.target;

    if (!inputValue) return;

    const refs = [inputRef4, inputRef1, inputRef2, inputRef3];

    refs.forEach((ref, index) => {
      if (ref.current.value.length > 1) {
        ref.current.value = ref.current.value.slice(0, 1);
        index !== 0 ? ref[index - 1].current.focus() : ref.current.blur();
      }
    });

    if (inputValue.toString().length === 1 && !target.id.includes("input-4")) {
      target.nextElementSibling.focus();
    }

    if (target.id.includes("input-4") && inputValue.length === 1) {
      target.blur();
    }
  }

  function handleKeys(e) {
    if (e.key === "Backspace") e.target.previousElementSibling.focus();
  }

  function submitOTP() {
    if (
      !inputRef1.current.value ||
      !inputRef2.current.value ||
      !inputRef3.current.value ||
      !inputRef4.current.value
    )
      return;

    const refs = [inputRef1, inputRef2, inputRef3, inputRef4];

    if (
      inputRef1.current.value &&
      inputRef2.current.value &&
      inputRef3.current.value &&
      inputRef4.current.value
    ) {
      const otp =
        inputRef1.current.value +
        inputRef2.current.value +
        inputRef3.current.value +
        inputRef4.current.value;
      console.log(parseInt(otp));
    }

    refs.forEach((ref) => {
      ref.current.value = "";
    });
  }

  return (
    <>
      <div className="flex gap-5">
        <input
          type="number"
          id="input-1"
          className="rounded-2xl h-16 w-16 bg-transparent border-2 border-solid border-white text-4xl px-2 text-center text-white tracking-wider [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          ref={inputRef1}
          onChange={(e) => handleInput(e)}
          onKeyUp={(e) => handleKeys(e)}
          required
        />

        <input
          type="number"
          id="input-2"
          className="rounded-2xl h-16 w-16 bg-transparent border-2 border-solid border-white text-4xl px-2 text-center text-white tracking-wider [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          ref={inputRef2}
          onChange={(e) => handleInput(e)}
          onKeyUp={(e) => handleKeys(e)}
          required
        />

        <input
          type="number"
          id="input-3"
          className="rounded-2xl h-16 w-16 bg-transparent border-2 border-solid border-white text-4xl px-2 text-center text-white tracking-wider [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          onChange={(e) => handleInput(e)}
          onKeyUp={(e) => handleKeys(e)}
          ref={inputRef3}
          required
        />

        <input
          type="number"
          id="input-4"
          className="rounded-2xl h-16 w-16 bg-transparent border-2 border-solid border-white text-4xl px-2 text-center text-white tracking-wider [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          onChange={(e) => handleInput(e)}
          onKeyUp={(e) => handleKeys(e)}
          ref={inputRef4}
          required
        />
      </div>

      <button
        className="rounded-2xl h-14 w-36 bg-transparent border-2 border-solid border-white text-xl text-white tracking-wider"
        onClick={submitOTP}
      >
        Login
      </button>
    </>
  );
}

export default App;
