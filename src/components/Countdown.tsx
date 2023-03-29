import { Minus, Plus } from '@phosphor-icons/react'

interface CoutdownProps {
  type?: string
  countdownQuantity: number
  onMinusProductAmount: () => void
  onPlusProductAmount: () => void
}

export function Countdown({
  type = 'home',
  countdownQuantity,
  onMinusProductAmount,
  onPlusProductAmount
}: CoutdownProps) {
  return (
    <div
      className={`flex items-center justify-around w-[72px] ${
        type === 'cart' ? 'h-8' : 'h-[38px]'
      } bg-base-400 rounded-md`}
    >
      <button onClick={onMinusProductAmount}>
        <Minus
          size={14}
          className="fill-purple-300 transition-colors hover:fill-purple-500"
        />
      </button>
      <p>{countdownQuantity}</p>
      <button onClick={onPlusProductAmount}>
        <Plus
          size={14}
          className="fill-purple-300 transition-colors hover:fill-purple-500"
        />
      </button>
    </div>
  )
}
