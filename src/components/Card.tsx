import { ShoppingCart } from '@phosphor-icons/react'
import { Countdown } from './Countdown'
import numeral from 'numeral'
import { useContext, useState } from 'react'
import { CoffeContext } from '../context/CoffeContext'

interface FlagsType {
  tagId: string
  tagName: string
}

export interface CoffeProps {
  id: string
  image: string
  flags: FlagsType[]
  name: string
  description: string
  price: number
}

export function Card({
  id,
  image,
  flags,
  name,
  description,
  price
}: CoffeProps) {
  const { PurchaseCoffe } = useContext(CoffeContext)
  const [amountProduct, setAmountProduct] = useState(1)
  const coffeCard = {
    id,
    name,
    image,
    description,
    price,
    quantity: amountProduct
  }

  function handlePlusProductAmount() {
    setAmountProduct(state => state + 1)
  }

  function handleMinusProductAmount() {
    if (amountProduct > 1) {
      setAmountProduct(state => state - 1)
    }
  }

  function handlePurchaseCoffe() {
    PurchaseCoffe(coffeCard)
  }

  const priceAfterConvert = numeral(price / 100).format('0, 0.00')

  return (
    <li className="relative flex flex-col items-center text-center bg-base-200 w-[276px] h-[310px] rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]">
      <div className={`absolute -top-7`}>
        <img src={image} alt="" />
      </div>
      <div>
        <ul className="flex gap-2 items-center justify-center  rounded-full mt-[104px] mb-4">
          {flags.map((flag: FlagsType) => {
            return (
              <li
                key={flag.tagId}
                className="text-center font-bold bg-yellow-100 text-[10px] uppercase text-yellow-500 py-1 px-2 rounded-md"
              >
                {flag.tagName}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="px-6">
        <h3 className="font-bold text-xl leading-[1.3] mb-2">{name}</h3>
        <p className="text-sm leading-[1.3] text-base-600">{description}</p>
      </div>
      <div className="flex items-center gap-[23px] mt-[33px]">
        <div>
          <span className="text-base-700 text-sm">
            R${' '}
            <span className="font-baloo text-base-700 text-xl">
              {priceAfterConvert}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Countdown
            countdownQuantity={amountProduct}
            onPlusProductAmount={handlePlusProductAmount}
            onMinusProductAmount={handleMinusProductAmount}
          />
          <button
            className="bg-purple-500 p-2 rounded-md hover:bg-purple-300 transition-colors"
            onClick={handlePurchaseCoffe}
          >
            <ShoppingCart size={22} color="#FFFFFF" weight="fill" />
          </button>
        </div>
      </div>
    </li>
  )
}
