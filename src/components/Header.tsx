import Logo from '../assets/Logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeContext } from '../context/CoffeContext'

export function Header() {
  const { cartItens } = useContext(CoffeContext)

  return (
    <div className="max-w-[1344px] fixed top-0 z-50 container flex items-center justify-between h-[104px] bg-base-100">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <nav className="flex items-center gap-3">
        <span className="flex items-center p-2 gap-1 rounded-md bg-purple-100">
          <MapPin size={22} color="#8047F8" weight="fill" />
          <span className="text-xs">Rio Branco, AC</span>
        </span>
        <Link to="cart" className="bg-yellow-100 p-2 rounded-md">
          {cartItens.length > 0 ? (
            <div className="flex">
              <div className="relative">
                <ShoppingCart size={22} color="#C47F17" weight="fill" />
                <div className="flex absolute text-xs text-center items-center justify-center -top-[18px] -right-[17px] w-5 h-5 bg-yellow-500 rounded-full text-white">
                  {cartItens.length}
                </div>
              </div>
            </div>
          ) : (
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          )}
        </Link>
      </nav>
    </div>
  )
}
