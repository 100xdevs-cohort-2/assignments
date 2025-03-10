// "use client";

export const Button = ({onclick , label} : {
    onclick : () => void
    label : string
}) =>{
    return(
        <button onClick={onclick} className=" border-b border-gray-600 rounded-sm text-3xl">
            {label}
        </button>
    )
}