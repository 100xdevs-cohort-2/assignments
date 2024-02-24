import { useState } from 'react'
import './App.css'
import TextTag from './components/TextTag'
import SocialButton from './components/SocialButton'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <TextTag text="Manikanta Mandala"/>
            <TextTag text="A final year BTech student"/>
            <SocialButton urlLink="https://www.github.com/ManikantaMandala" name="Github"/>
            <SocialButton urlLink="https://www.linkedin.com/in/manikanta-mandala-206677202/" name="LinkedIn"/>
            <SocialButton urlLink="https://www.instagram.com/m4n1k4nt4/reels" name="Instagram"/>
            <h1> Interests </h1>
            <TextTag text="Learning new technologies"/>
            <TextTag text="Meeting like minded people"/>
            <TextTag text="Watching movies"/>
        </>
    )
}

export default App
