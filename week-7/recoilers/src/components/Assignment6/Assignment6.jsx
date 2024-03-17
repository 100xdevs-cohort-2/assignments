const Assignment6 = () => {
  return (
    <>
      <div
        style={{
          background:
            "url('https://imgs.search.brave.com/rkNozOWiQB6xQEBWSPhzosImgdSjUf3UltkHtr2NA8s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/OS8xNC8xOC8wNC9k/YW5kZWxpb24tNDQ1/MjI4XzY0MC5qcGc')",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
            backgroundColor: "blue",
            color: "white",
            padding: "2rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "1rem",
            }}
          >
            Enter Your Name
          </h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            style={{ color: "black", padding: ".2rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default Assignment6;
