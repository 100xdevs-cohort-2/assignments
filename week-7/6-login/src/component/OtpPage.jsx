import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";


export const Otp = () => {
    const [OTP, setOTP] = useState(['','','','']);
    const inputRef = Array.from({ length: 4 }, () => useRef(null));
    const navigate = useNavigate();

    function handleInput(index, value){
        const newOTP = [...OTP];
        newOTP[index] = value;

        if(value !== '' && index < OTP.length-1){
            inputRef[index + 1].current.focus();  
        }

        setOTP(newOTP);
    }

    function verifyHandler() {
        for(let i=0; i<OTP.length; i++){
            if(OTP[i] === ''){
                throw console.error('OTP is inavlid');
            }
        }
        console.log(OTP.join(''));
        navigate('/verified');

    }

    return(
        <div>
            <div className="flex">
                {
                    OTP.map((digit, index) => {
                        return(<input key={index} 
                               ref={inputRef[index]} 
                               type="text"  
                               onChange={(e) => handleInput(index, e.target.value)} 
                               maxLength="1" 
                               className=""
                               />)
                    })
                }
            </div>
            <button onClick={verifyHandler}>Verify OTP</button>
        </div>
    )
}