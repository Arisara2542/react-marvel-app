import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route , Switch } from 'wouter'

import './App.css'

//Components
import { Navbar } from './components/Navbar'
import { Home ,Heroes , HeroesDetail} from './pages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar>
        <Switch>
          <Route path='/' component={Home}></Route>
          <Route path='/heroes' component={Heroes}></Route>
          <Route path='/heroes/:heroesName' component={HeroesDetail}></Route>
        </Switch>
      </Navbar>
    </>
  )
}

export default App
