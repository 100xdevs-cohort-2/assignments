export default function SocialButton(props){
    const urlLink = props.urlLink;
    console.log(urlLink)
    const name = props.name;
    return (
        <button style={{
            margin: "20px"
        }}>
            <a href={urlLink} target="_blank">
                {name}
            </a>
        </button>
    );
}
