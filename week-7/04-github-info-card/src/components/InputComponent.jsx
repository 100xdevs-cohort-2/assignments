import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { usernameAtom } from "../atoms";

export function InputComponent() {
  const inputRef = useRef();
  const setUsername = useSetRecoilState(usernameAtom);

  function handleButtonClick() {
    const username = inputRef.current.value;
    if (!username) return;

    setUsername(username);
    inputRef.current.value = "";
  }

  function handleKeyUp(event) {
    const username = inputRef.current.value;
    if (!username) return;

    if (event.key === "Enter") {
      setUsername(username);
      inputRef.current.value = "";
    }
  }

  return (
    <>
      <h1 className="font-bold text-4xl tracking-wide mt-10 text-center text-[#0c0c24]">
        Find any Developer's Info Through Github
      </h1>

      <div className="flex gap-7">
        <input
          type="text"
          className="h-11 md:w-[40rem] w-96 rounded-md  border-solid border-2 border-slate-500 px-4"
          placeholder="Enter a Valid GitHub Username"
          onKeyUp={handleKeyUp}
          required
          ref={inputRef}
        />

        <button
          className="rounded-full w-36 h-11 bg-[#f43c04] text-gray-100 tracking-wider font-medium text-lg"
          onClick={handleButtonClick}
        >
          Search
        </button>
      </div>
    </>
  );
}
