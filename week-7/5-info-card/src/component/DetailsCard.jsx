

export const DetailsCard = ({data}) => {
    console.log( data);

    return(<div>
        <div><img src={data.avatar_url}></img></div>
        <p>{data.name}</p>
        <div>
            <p>{data.following} </p>
            <p> </p>
        </div>
    </div>)
}