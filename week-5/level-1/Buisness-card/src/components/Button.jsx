export function Button({ ButtonName }) {
    return <div>
        <button
            style={{
                padding: 20,
                border: "2px",
                backgroundColor: "skyblue",
                margin: 10,
                borderRadius: 5,
                fontSize: 20,
                cursor: "pointer"
            }}
        >{ButtonName}</button>
    </div>
}