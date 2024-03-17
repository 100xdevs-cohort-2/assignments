import { useRef, useState } from "react";

export const EnterMobile = () => {
  const [phoneNo, setPhoneNo] = useState("");
  console.log(phoneNo);
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
          margin: "1rem",
          height: "100vh",
          padding: "10rem",
          border: ".1rem solid white",
          borderRadius: "4rem",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Login via OTP</h1>
        <input
          type="text"
          placeholder="Enter your Mobile Number"
          style={{
            padding: "20px",
            width: "100vh",
            color: "white",
            backgroundColor: "black",
            borderRadius: "20px",
            border: "2px solid white",
          }}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <button
          type="submit"
          style={{
            color: "white",
            padding: "10px 5px",
            border: ".1rem solid white",
            width: "50vh",
            borderRadius: "10px",
          }}
        >
          Send Otp
        </button>
      </div>
    </>
  );
};

export const OTP = () => {
  const inputsRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInput = (index, event) => {
    const { value } = event.target;
    if (value.length === 1) {
      if (index < inputsRefs.length - 1) {
        inputsRefs[index + 1].current.focus();
      }
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
          height: "100vh",
          padding: "10rem",
          border: ".1rem solid white",
          borderRadius: "4rem",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Login via OTP</h1>
        <div style={{ display: "flex", gap: "2rem" }}>
          {Array.from({ length: 4 }, (_, index) => (
            <input
              key={index}
              type="number"
              maxLength={1}
              ref={inputsRefs[index]}
              style={{
                padding: "20px",
                width: "80px",
                color: "white",
                fontSize : "2rem",
                backgroundColor: "black",
                borderRadius: "20px",
                border: "2px solid white",
              }}
              onChange={(e) => handleInput(index, e)}
            />
          ))}
        </div>
        <button
          type="button"
          style={{
            color: "white",
            padding: "10px 5px",
            border: ".1rem solid white",
            width: "50vh",
            borderRadius: "10px",
          }}
        >
          Verify OTP
        </button>
      </div>
    </>
  );
};
