export default function CustomLink({href ,text ,target}){
        return (
                <>
                <a href={href} target={target}>
                        {text}
                </a>
                </>
        )
}

