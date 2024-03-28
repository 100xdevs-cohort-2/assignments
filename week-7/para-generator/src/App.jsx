import './App.css'

function App() {
  

  return (
      <div class="flex flex-col items-center pt-28">
        <h1 class="text-5xl font-medium">Para Generator</h1>
        <div class="mt-7">
          <input class="h-14 w-[750px] border border-gray-300 px-4 py-2 focus:outline-0" type="search" name="" placeholder="Enter the number of words" id="" />
          <button class="inset-y-0 right-0 ml-4 h-14 rounded-2xl bg-black px-4 py-2 text-white">Generate</button>
        </div>
      </div>
  )
}

export default App
