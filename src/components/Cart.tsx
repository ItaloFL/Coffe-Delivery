import { Trash } from '@phosphor-icons/react'
import numeral from 'numeral'
import { useContext } from 'react'
import { CoffeContext } from '../context/CoffeContext'
import { Countdown } from './Countdown'

export function Cart() {
  const { cartItens, RemoveItemToCart, ChangeCartItemQuantity } =
    useContext(CoffeContext)

  function handleRemoveItemToCart(removeId: string) {
    RemoveItemToCart(removeId)
  }

  function handlePlusQuantityItem(coffeId: string) {
    ChangeCartItemQuantity(coffeId, 'increase')
  }

  function handleMinusQuantityItem(coffeId: string) {
    ChangeCartItemQuantity(coffeId, 'decrease')
  }

  const totalPrice = cartItens.reduce(
    (acc, coffe) => acc + coffe.price * coffe.quantity,
    0
  )
  const totalPriceConvert = numeral(totalPrice / 100).format('0, 0.00')

  const totalPriceWithFeeDelivery = parseFloat(totalPriceConvert) + 3.0

  return (
    <div className="bg-base-200 mt-4 p-10 rounded-tl-[6px] rounded-tr-[44px] rounded-br-[6px] rounded-bl-[44px]">
      <ul>
        {cartItens.map(cartItem => {
          return (
            <li
              key={cartItem.id}
              className="flex justify-between mb-6 pb-6 border-b-[1px]"
            >
              <div className="flex gap-5">
                <div className="w-16 h-16">
                  <img src={cartItem.image} alt="" />
                </div>
                <div>
                  <p className="mb-2">{cartItem.name}</p>
                  <div className="flex gap-2 items-start">
                    <Countdown
                      type="cart"
                      countdownQuantity={cartItem.quantity}
                      onMinusProductAmount={() => {
                        if (cartItem.quantity > 1) {
                          handleMinusQuantityItem(cartItem.id)
                        }
                      }}
                      onPlusProductAmount={() => {
                        handlePlusQuantityItem(cartItem.id)
                      }}
                    />
                    <button
                      className="w-[91px] h-8 flex items-center justify-center gap-1 uppercase text-xs bg-base-400 rounded-md transition-colors hover:bg-base-500"
                      onClick={() => {
                        handleRemoveItemToCart(cartItem.id)
                      }}
                    >
                      <Trash size={16} color="#8047F8" />
                      Remover
                    </button>
                  </div>
                </div>
              </div>
              <p className="font-bold">
                {numeral((cartItem.price / 100) * cartItem.quantity).format(
                  '0, 0.00'
                )}
              </p>
            </li>
          )
        })}
      </ul>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="text-base-700 text-sm">Total de itens</p>
          <p className="text-base-700 text-sm">R$ {totalPriceConvert}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-base-700 text-sm">Entrega</p>
          <p className="text-base-700 text-sm">R$ 3,00</p>
        </div>

        <div className="flex justify-between">
          <p className="text-base-700 text-xl font-bold">Total</p>
          <p className="text-base-700 text-xl font-bold">
            R$ {totalPriceWithFeeDelivery.toFixed(2)}
          </p>
        </div>

        <button className="w-[368px] h-[46px] bg-yellow-300 text-white uppercase rounded-md mt-6 font-bold text-sm transition-colors duration-200 hover:bg-yellow-500">
          Confirmar pedido
        </button>
      </div>
    </div>
  )
}
