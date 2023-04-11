import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export function PaymentButtons() {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext()

  const [isCheckedInput, setIsCheckedInput] = useState('')

  function handleInputCheckedCash() {
    setIsCheckedInput('cash')
  }

  function handleInputCheckedDebit() {
    setIsCheckedInput('debit')
  }

  function handleInputCheckedCredit() {
    setIsCheckedInput('credit')
  }

  //I know about this dont be the better form to do that, i will refactor this.

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center space-x-4">
        <div>
          <input
            type="radio"
            value="credit"
            id="creditMethod"
            className="hidden"
            {...register('paymentMethod')}
            onClick={handleInputCheckedCredit}
          />
          <label
            htmlFor="creditMethod"
            className={`w-[180px] h-[51px] flex items-center bg-base-400 cursor-pointer text-xs uppercase gap-3 py-2 px-4 rounded-md transition-colors hover:bg-base-500 ${
              isCheckedInput === 'credit' &&
              'bg-purple-100 border-[1px] border-purple-300'
            }`}
          >
            <CreditCard color="#8047F8" size={16} />
            Cartão de Crédito
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="debit"
            id="debitMethod"
            className="hidden"
            {...register('paymentMethod')}
            onClick={handleInputCheckedDebit}
          />
          <label
            htmlFor="debitMethod"
            className={`w-[180px] h-[51px] flex items-center bg-base-400 cursor-pointer text-xs uppercase gap-3 py-2 px-4 rounded-md transition-colors hover:bg-base-500 ${
              isCheckedInput === 'debit' &&
              'bg-purple-100 border-[1px] border-purple-300'
            }`}
          >
            <Bank color="#8047F8" size={16} />
            Cartão de Débito
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="cash"
            id="cashMethod"
            className="hidden"
            {...register('paymentMethod')}
            onClick={handleInputCheckedCash}
          />
          <label
            htmlFor="cashMethod"
            className={`w-[180px] h-[51px] flex items-center bg-base-400 cursor-pointer text-xs uppercase gap-3 py-2 px-4 rounded-md transition-colors hover:bg-base-500 ${
              isCheckedInput === 'cash' &&
              'bg-purple-100 border-[1px] border-purple-300'
            }`}
          >
            <Money color="#8047F8" size={16} />
            Dinheiro
          </label>
        </div>

        
      </div>
    </div>
  )
}
