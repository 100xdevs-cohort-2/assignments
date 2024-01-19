import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Form } from './Form'
import {Cards} from './Cards'
import '@radix-ui/themes/styles.css';
import {Theme} from '@radix-ui/themes'
import './App.css'

function App() {
  return(
      <Theme appearance='inherit'>
        <div className='container'>
          <Form />
          <Cards />
        </div>
      </Theme>
  )
  
}

export default App
