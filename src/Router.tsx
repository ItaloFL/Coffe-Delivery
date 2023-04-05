import { Route, Routes } from 'react-router-dom'
import { Checkout } from './components/Cheout'
import { Home } from './components/Home'
import { DefaultLayout } from './layout/DefaultLayout'
// import { ShoppingCart } from './components/ShoppingCart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
