export default function ProfileCard() {
  return (
    <div className=" w-full h-screen flex justify-center items-center p-3">
      <div className="__card bg-white shadow h-[320px] w-[280px] rounded overflow-hidden">
        <div className="__image h-1/2 relative flex justify-center items-end">
          <div className="__background h-[80%] w-full bg-blue-500 absolute top-0"></div>
          <img
            className="relative z-20 rounded-full w-20 h-20 shadow"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
            alt=""
          />
        </div>
        <div className="__bottom relative h-1/2">
          <div className="flex justify-center items-center py-3 gap-2">
            <b className="font-bold text-gray-800">John Doe</b>{" "}
            <span className="text-gray-400">32</span>
          </div>
          <div className="__profile_info w-full border-t border-gray-300 p-5 py-3 absolute bottom-0 left-0 flex justify-between items-center">
            <div className="flex flex-col gap-1 justify-center items-center">
              <b className="font-bold">80K</b>
              <p className="text-gray-400 text-xs">followers</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <b className="font-bold">803K</b>
              <p className="text-gray-400 text-xs">likes</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <b className="font-bold">1.4K</b>
              <p className="text-gray-400 text-xs">photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
