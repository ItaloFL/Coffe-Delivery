import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { Cart } from './Cart'
import { PaymentButtons } from './PaymentButtons'

export function Checkout() {
  return (
    <div className="grid grid-cols-checkout gap-8 mt-36">
      <div>
        <h2 className="font-bold text-lg">Complete seu pedido</h2>
        <div>
          <div className="bg-base-200 mt-4 p-10">
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <MapPinLine color="#C47F17" size={22} />
                <h4 className="text-base-800">Endereço de entrega</h4>
              </div>
              <p className="text-sm ml-[30px] text-base-700">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
            <form
              action=""
              id="formPayment"
              className="flex flex-col gap-y-4 placeholder-base-600 placeholder:text-sm"
            >
              <input type="text" placeholder="CEP" className="w-[200px]" />
              <input type="text" placeholder="Rua" />
              <div className="grid grid-cols-inputGrid gap-3">
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </div>
              <div className="grid grid-cols-secondInputGrid gap-3">
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </div>
            </form>
          </div>

          <div className="bg-base-200 mt-4 p-10">
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <CurrencyDollar color="#8047F8" size={22} />
                <h4 className="text-base-800">Pagamento</h4>
              </div>
              <p className="text-sm ml-[30px] text-base-700">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>

            <div className="flex items-center gap-3">
              <PaymentButtons />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-lg">Cafés selecionados</h2>
        <Cart />
      </div>
    </div>
  )
}
