/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
///recoil allows only component that use context api children are rendered
import { useContext } from 'react'
import './App.css'
import {CountContext} from './context'
// import {useRecoilValue} from "recoil "
import { countAtom } from './count'
import { RecoilRoot, useRecoilState,useRecoilValue } from 'recoil'
function App() {
  // const [count,setCount]=useState(0)

  return (
    <>
      <RecoilRoot>
      <Count ></Count> 
      </RecoilRoot>
      
      
      
    </>
  )
}
function Count(){
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons ></Buttons>
  </div>
}
function CountRenderer(){
  const count=useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}
function Buttons(){
  const [count,setCount]=useRecoilState(countAtom)
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}> Increase</button>

    <button onClick={()=>{
      setCount(count-1)
    }}>Increase</button>
  </div>
}
export default App
