import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div className="max-w-[1344px] mx-auto relative">
      <Header />
      <Outlet />
    </div>
  )
}
