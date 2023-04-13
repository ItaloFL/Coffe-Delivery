import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import SucessIllustration from '../assets/SucessIlustration.png'
import { useContext } from 'react'
import { CoffeContext } from '../context/CoffeContext'

export function SucessPurchase() {
  const { adressForSucessData } = useContext(CoffeContext)

  const { paymentMethod, numero, rua, cidade, bairro, uf } = adressForSucessData

  return (
    <div className="mt-36 flex items-end gap-36">
      <div>
        <h2 className="text-[32px] font-extrabold text-yellow-500">
          Uhu! Pedido confirmado
        </h2>
        <p className="text-xl mb-10">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <div className="flex flex-col gap-8 border border-red-600 p-10 pr-[132px] rounded-md rounded-tr-[36px] rounded-bl-[36px]">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-300 flex items-center justify-center rounded-full">
                <MapPin size={16} color="#FFFFFF" weight="fill" />
              </div>
              <p className="max-w-[310px]">
                Entrega em <span className="font-bold">Rua {rua}</span>,{' '}
                {numero} {bairro} - {cidade}, {uf}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-300 flex items-center justify-center rounded-full">
                <Timer size={16} color="#FFFFFF" weight="fill" />
              </div>
              <p className="max-w-[141px]">
                Previsão de entrega{' '}
                <span className="font-bold">20 min - 30 min</span>
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center rounded-full">
                <CurrencyDollar size={16} color="#FFFFFF" weight="fill" />
              </div>
              <p className="max-w-[162px]">
                Pagamento na entrega{' '}
                <span className="font-bold">
                  {paymentMethod === 'cash' && 'Dinheiro'}
                  {paymentMethod === 'debit' && 'Cartão de Débito'}
                  {paymentMethod === 'credit' && 'Cartão de Crédito'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src={SucessIllustration} alt="" />
    </div>
  )
}
