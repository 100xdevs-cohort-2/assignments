export default function ProfileCard({dp, name, followers, following}){
    return(
        <>
            <div class="flex items-center pt-12 w-full justify-center">

                <div class="w-[300px]">
                    <div class="bg-white shadow-xl rounded-lg py-3">
                        <div class="photo-wrapper p-2">
                            <img class="w-48 h-48 rounded-full mx-auto" src={dp} alt="John Doe" />
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
                            
                            <table class="text-xs my-3">
                                <tbody><tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Followers</td>
                                    <td class="px-2 py-2">{followers}</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Following</td>
                                    <td class="px-2 py-2">{following}</td>
                                </tr>
                                
                            </tbody></table>

                            
                        </div>
                    </div>
                </div>

                </div>
        </>
    )
}