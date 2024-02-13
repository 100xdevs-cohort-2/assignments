import { useState } from "react"


export const Insertcard = ({setUsername}) => {
    
    const [inputValue, setInputValue] = useState();
    
    function searchHandler() {
        setUsername(inputValue);
    }
    
    return(
        <div>
            <input title="username" placeholder="username" onChange={(e) => {
                setInputValue(e.target.value);
            }} ></input>
            <button onClick={searchHandler}>Search</button>
        </div>
    )
}