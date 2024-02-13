export default function Profile() {
    const {name, age, place, followers, likes, photos, img_url} =  
    {
        name:"Rita Correia",
        age:32,
        place:"London",
        followers:"80K",
        likes:"803K",
        photos:"1.4K",
        img_url:"http://none"
    }
    

    return <div className="flex flex-col h-auto w-[380px] border-2 border-red-500">
        <div className="flex flex-col flex-auto h-50 border-2 border-sky-500">
            <div className="flex flex-auto flex-col justify-end h-60 border-2 border-sky-500">
                <div className="h-[100px] w-[100px] rounded-full bg-black" style={{alignSelf:"center"}}></div>
            </div>
            <div className="flex flex-auto flex-col justify-center p-2 h-20 border-2 border-sky-500">
                <div className="flex justify-center">
                    <h1 className="font-bold text-lg mr-2">{name}</h1><p className="text-lg">{age}</p>
                </div>
                <div className="flex justify-center">
                    {place}
                </div>
            </div>
        </div>
        <div className="flex flex-auto m-2 p-2 justify-around h-20 border-2 border-yellow-500">
            <div className="flex flex-col justify-center text-center">
                <h1 className="font-bold text-lg">{followers}</h1>
                <p className="text-base">Followers</p>
            </div>
            <div className="flex flex-col justify-center text-center">
                <h1 className="font-bold text-lg">{likes}</h1>
                <p className="text-base">Likes</p>
            </div>
            <div className="flex flex-col justify-center text-center">
                <h1 className="font-bold text-lg">{photos}</h1>
                <p className="text-base">Photos</p>
            </div>
        </div>
    </div>
}