import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeContextProvider } from './context/CoffeContext'

export function App() {
  return (
    <BrowserRouter>
      <CoffeContextProvider>
        <Router />
      </CoffeContextProvider>
    </BrowserRouter>
  )
}
