export function Interest({ Interest }) {
    return <div>
        <h2>Interest</h2>
        <ul>
            {Interest.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
}