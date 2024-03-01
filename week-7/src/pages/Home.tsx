export default function Home() {
  return (
    <div className="bg-gray-50 rounded-xl p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461e93df25e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="object-cover w-16 h-16 rounded-full"
          />
          <div className="space-y-2">
            <h3 className="text-lg font-medium">John Doe</h3>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          <ProfileCardItem Icon={HiOutlineHeart} count={25} />
          <ProfileCardItem Icon={HiOutlineChat} count={15} />
          <ProfileCardItem Icon={HiOutlineBell} count={10} />
          <ProfileCardItem Icon={HiOutlineMenuAlt4} />
        </div> */}
      </div>
    </div>
  );
}
