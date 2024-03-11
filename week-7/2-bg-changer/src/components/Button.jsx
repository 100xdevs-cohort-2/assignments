import { useEffect, useRef } from "react";


export const Button = ({color, setBg}) => {
    const divRef = useRef(color);
    function clickHandler() {
        setBg(color);
    }

    useEffect(() => {
        divRef.current.style.backgroundColor = color;
        if(color === "Black"){
            divRef.current.style.color = "white";
        }
        
    }, [])

    return(
        <button ref={divRef} onClick={clickHandler}>{color}</button>
    )
}