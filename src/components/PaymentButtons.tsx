import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { useState } from 'react'

export function PaymentButtons() {
  const [selectedButton, setSelectedButton] = useState('')

  const handleButtonClick = (type: string) => {
    setSelectedButton(type)
  }

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => handleButtonClick('credit')}
        className={`${
          selectedButton === 'credit'
            ? 'bg-purple-100 border-[1px] border-purple-300'
            : 'bg-base-400 text-gray-700'
        } w-[178px] h-[51px] flex items-center text-xs uppercase gap-3 py-2 px-4 rounded-md transition-colors hover:bg-base-500`}
      >
        <CreditCard color="#8047F8" size={16} />
        Cartão de Crédito
      </button>
      <button
        onClick={() => handleButtonClick('debit')}
        className={`${
          selectedButton === 'debit'
            ? 'bg-purple-100 border-[1px] border-purple-300'
            : 'bg-base-400 text-gray-700'
        } w-[178px] h-[51px] flex items-center text-xs uppercase gap-3 py-2 px-4 rounded-md transition-colors hover:bg-base-500`}
      >
        <Bank color="#8047F8" size={16} />
        Cartão de Débito
      </button>
      <button
        onClick={() => handleButtonClick('cash')}
        className={`${
          selectedButton === 'cash'
            ? 'bg-purple-100 border-[1px] border-purple-300'
            : 'bg-base-400 text-gray-700'
        } w-[178px] h-[51px] flex items-center text-xs uppercase gap-3 py-2 px-4 rounded-md transition-colors hover:bg-base-500`}
      >
        <Money color="#8047F8" size={16} />
        Dinheiro
      </button>
    </div>
  )
}
