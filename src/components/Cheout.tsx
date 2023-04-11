import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { PaymentButtons } from './PaymentButtons'
import { SelectedCoffes } from './SelectedCoffes'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { CoffeContext } from '../context/CoffeContext'
import { useNavigate } from 'react-router-dom'
import { FormProvider } from 'react-hook-form'

export const ClientAdressData = zod.object({
  cep: zod
    .string()
    .nonempty('CEP obrigatório')
    .length(8, 'Insira um cep válido.'),
  rua: zod
    .string()
    .nonempty('Rua obrigatório')
    .min(2, 'Insira uma rua válida')
    .transform(roadName => {
      return roadName
        .trim()
        .split(' ')
        .map(word => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  numero: zod
    .string()
    .nonempty('Número de residencia obrigatório')
    .transform(numero => Number(numero)),
  complemento: zod.string().optional(),
  uf: zod
    .string()
    .nonempty('Insira a UF')
    .length(2, 'Insira uma UF válida')
    .transform(name => name.toLocaleUpperCase()),
  bairro: zod
    .string()
    .nonempty('Insira o seu bairro')
    .transform(districtName => {
      return districtName
        .trim()
        .split(' ')
        .map(word => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  cidade: zod
    .string()
    .nonempty('Insira a sua cidade')
    .transform(cityName => {
      return cityName
        .trim()
        .split(' ')
        .map(word => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  paymentMethod: zod.string({
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    }
  })
})

export type clientAdressData = zod.infer<typeof ClientAdressData>

export function Checkout() {
  const { setAdressForSucessData, clearCart } = useContext(CoffeContext)
  const navigate = useNavigate()

  const orderForm = useForm<clientAdressData>({
    resolver: zodResolver(ClientAdressData)
  })

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = orderForm

  console.log(errors)

  function handleSubmitPurchase(data: clientAdressData) {
    console.log(data)
    setAdressForSucessData(data)
    navigate('/sucess')
    clearCart()
  }

  return (
    <FormProvider {...orderForm}>
      <form
        className="grid grid-cols-checkout gap-8 mt-36"
        onSubmit={handleSubmit(handleSubmitPurchase)}
      >
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
              <div
                id="formCoffe"
                className="flex flex-col gap-y-2 placeholder-base-600 placeholder:text-sm"
              >
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="CEP"
                    className={`w-[200px] ${errors.cep && 'border-red-500'}`}
                    {...register('cep')}
                  />

                  {errors.cep && (
                    <div className="text-red-500 text-sm italic">
                      {errors.cep?.message}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <input type="text" placeholder="Rua" {...register('rua')} />
                  <div className="text-red-500 text-sm italic">
                    {errors.rua?.message}
                  </div>
                </div>

                <div className="grid grid-cols-inputGrid gap-3">
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      placeholder="Número"
                      {...register('numero')}
                    />
                    <div className="text-red-500 text-sm italic">
                      {errors.numero?.message}
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Complemento"
                    {...register('complemento')}
                  />
                </div>
                <div className="grid grid-cols-secondInputGrid gap-3">
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      placeholder="Bairro"
                      {...register('bairro')}
                    />
                    {errors.bairro && (
                      <div className="text-red-500 text-sm italic">
                        {errors.bairro?.message}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      placeholder="Cidade"
                      {...register('cidade')}
                    />
                    {errors.cep && (
                      <div className="text-red-500 text-sm italic">
                        {errors.cidade?.message}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input type="text" placeholder="UF" {...register('uf')} />
                    {errors.cep && (
                      <div className="text-red-500 text-sm italic">
                        {errors.uf?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-base-200 mt-4 p-10">
              <div className="mb-8">
                <div className="flex items-center gap-2">
                  <CurrencyDollar color="#8047F8" size={22} />
                  <h4 className="text-base-800">Pagamento</h4>
                </div>
                <p className="text-sm ml-[30px] text-base-700">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <PaymentButtons />
                {errors.paymentMethod && (
                  <div className="text-red-500 text-sm italic">
                    Defina seu método de pagamento
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <SelectedCoffes />
      </form>
    </FormProvider>
  )
}
