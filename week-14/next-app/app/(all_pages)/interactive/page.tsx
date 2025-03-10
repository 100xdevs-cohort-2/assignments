"use client"
import { useState } from "react"

export default function(){
    const[count , setCount] = useState(0)
    return(
        <div className="flex justify-center items-center">
            <div>
                <div className=" text-3xl font-bold">
                    This is interractive page 
                </div>
                <div>
                    so this page renderd on the cleint side not on the sever side
                </div>
                <button className=" border border-gray-950 rounded-t-sm p-4 m-4" onClick={() => {
                    setCount(count => count+1)
                }} >
                    {`count : ${count}`}
                </button>
            </div>
        </div>
    )
}