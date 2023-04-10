import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'

export function PaymentButtons() {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center space-x-4">
        <div>
          <input
            type="radio"
            value="credit"
            id="credit"
            {...register('paymentMethod')}
            className="hidden checked:bg-purple-100 border-[1px] border-purple-300"
          />
          <label
            htmlFor="credit"
            className="w-[190px] h-[51px] flex items-center bg-base-400 cursor-pointer text-xs uppercase gap-3 py-2 px-4 rounded-md transition-colors hover:bg-base-500 checked:text-red-800"
          >
            <CreditCard color="#8047F8" size={16} />
            Cartão de Crédito
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="debit"
            id="debit"
            {...register('paymentMethod')}
            className="hidden checked:bg-purple-100 border-[1px] border-purple-300"
          />
          <label
            htmlFor="debit"
            className="w-[190px] h-[51px] flex items-center bg-base-400 cursor-pointer text-xs uppercase gap-3 py-2 px-4 rounded-md transition-colors hover:bg-base-500 checked:text-red-800"
          >
            <Bank color="#8047F8" size={16} />
            Cartão de Débito
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="cash"
            id="cash"
            {...register('paymentMethod')}
            className="hidden checked:bg-black"
          />
          <label
            htmlFor="cash"
            className="w-[190px] h-[51px] flex items-center bg-base-400 cursor-pointer text-xs uppercase gap-3 py-2 px-4 rounded-md transition-colors hover:bg-base-500 checked:text-red-800"
          >
            <Money color="#8047F8" size={16} />
            Dinheiro
          </label>
        </div>
      </div>
    </div>
  )
}
