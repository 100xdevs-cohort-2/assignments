import { useState } from "react"
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const [number, setNumber] = useState();
    const navigate = useNavigate();
    
    function clickHandler() {
        if((number.length === 10) && (/^\d$/.test(number))){
            navigate('/sucess')
        } else {
            navigate('/error')
        }
    }

    return(
        <div>
            <h3>Login Via OTP</h3>
            <input type="tel"
                    placeholder="Enter Phone no" 
                    maxLength="10" 
                    onChange={(e) =>{setNumber(e.target.value)}}></input>
            <button onClick={clickHandler}>Send OTP</button>
        </div>
    )

}