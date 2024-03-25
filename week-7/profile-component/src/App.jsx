
import './App.css'

function App() {
 
  return (
    <>
      <div className="flex h-screen items-center justify-center font-sans">
        <div className="flex h-[500px] w-[500px] flex-col">
          <div className="h-[200px] w-[100%]">
            <img className="h-full w-full object-cover" src="https://static.vecteezy.com/system/resources/previews/000/677/302/original/abstract-technology-banner-background.jpg" alt="" srcset="" />
          </div>
          <div className="flex h-[100px] w-[100%] justify-center">
            <img className="mt-[-70px] h-[150px] w-[150px] rounded-full" src="https://media.licdn.com/dms/image/C5603AQFTzZxYrwvOUw/profile-displayphoto-shrink_800_800/0/1648797724566?e=1717027200&v=beta&t=CEE16nFBRusioBdLmaWMk_dP6HWWrnwMJOtow-Yu9Ew" alt="" />
          </div>
          <div className="flex h-[100px] w-[100%] flex-col items-center justify-center">
            <div className="flex flex-row">
              <p className="text-4xl font-bold text-gray-800">Vishnu B V</p>
              <p className="pl-3 text-4xl text-gray-600">22</p>
            </div>
            <div className="text-2xl font-normal text-gray-600">India</div>
          </div>
          <div className="h-[2px] w-[100%] bg-gray-200"></div>
          <div className="flex h-[110px] w-[100%]">
            <div className="flex h-[100%] w-1/3 flex-col items-center justify-center ">
              <p className="text-4xl font-black text-gray-800">80k</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="flex h-[100%] w-1/3 flex-col items-center justify-center ">
              <p className="text-4xl font-black text-gray-800">803k</p>
              <p className="text-gray-600">Likes</p>
            </div>
            <div className="flex h-[100%] w-1/3 flex-col items-center justify-center ">
              <p className="text-4xl font-black text-gray-800">1.4k</p>
              <p className="text-gray-600">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
