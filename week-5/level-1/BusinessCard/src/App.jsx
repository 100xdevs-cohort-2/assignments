import './App.css'
import BusinessCard from './components/BusinessCard'

function App() {
 

  return (
    <>
    <BusinessCard name="pavan" designation="fullstack developer" interests={["React","nodejs","webdev"]} socials={["twitter","LinkedIn","youtube"]}/>
    </>
  )
}

export default App
