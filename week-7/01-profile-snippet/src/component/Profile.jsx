const userData = {
  fullName: "Saksham",
  country: "India",
  followers: 24000,
  likes: 80_403,
  postCount: 1440,
};

export function Profile() {
  return (
    <>
      <div className="pf-container bg-white h-112 w-112 overflow-hidden relative rounded-2xl">
        <div className="bg-image-div bg-gradient-to-r from-violet-500 to-fuchsia-500 w-112 h-48 "></div>

        <div className=" profile-pic w-36 h-36 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-profile-pic bg-cover cursor-pointer hover:scale-125 transition-all"></div>

        <div className="content-div pt-20 flex flex-col items-center h-80 w-112">
          <h3 className="font-bold text-3xl mx-auto tracking-wide mb-2 text-gray-900">
            {userData.fullName}
          </h3>
          <h4 className="text-lg tracking-wide text-gray-900 font-medium mb-12">
            {userData.country}
          </h4>

          <hr className="bg-gray-300 w-104 h-1" />
          <div className="w-112 h-32 flex items-center justify-center gap-20">
            <div className="flex flex-col justify-center items-center cursor-pointer">
              <h3 className="font-bold tracking-wide text-gray-900 text-2xl">
                {userData.followers > 999
                  ? (userData.followers / 1000).toFixed(1) + "K"
                  : userData.followers}
              </h3>
              <h4 className="font-medium tracking-wide text-gray-900 text-lg">
                Followers
              </h4>
            </div>

            <div className="cursor-pointer flex flex-col justify-center items-center">
              <h3 className="font-bold tracking-wide text-gray-900 text-2xl">
                {userData.likes > 999
                  ? (userData.likes / 1000).toFixed(1) + "K"
                  : userData.likes}
              </h3>
              <h4 className="font-medium tracking-wide text-gray-900 text-lg">
                Likes
              </h4>
            </div>

            <div className="cursor-pointer flex flex-col justify-center items-center">
              <h3 className="font-bold tracking-wide text-gray-900 text-2xl">
                {userData.postCount > 999
                  ? (userData.postCount / 1000).toFixed(1) + "K"
                  : userData.postCount}
              </h3>
              <h4 className="font-medium tracking-wide text-gray-900 text-lg">
                Posts
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
