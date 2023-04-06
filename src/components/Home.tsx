import { Coffee, Package, Timer } from '@phosphor-icons/react'
import { Card } from './Card'
import Ilustration from '../assets/illustation.png'
import CoffeJSON from '../../CoffesJSON.json'

export function Home() {
  return (
    <>
      <div className="relative mx-auto z-10 py-36 grid grid-cols-2 text-base-800">
        <main className="max-w-[588px]">
          <h1 className="text-5xl font-extrabold leading-[1.3]">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-4 text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          {/* Modificar AQUI */}
          {/* <div className="bg-app absolute inset-0" /> */}

          <ul className="mt-[70px] grid grid-cols-2 gap-y-5">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 p-2 bg-yellow-500 rounded-full">
                <Timer color="#FFFFFFFF" size={16} />
              </div>
              Compra simples e segura
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 p-2 bg-base-700 rounded-full">
                <Package color="#FFFFFFFF" size={16} />
              </div>
              Embalagem mantém o café intacto
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 p-2 bg-yellow-300 rounded-full">
                <Timer color="#FFFFFFFF" size={16} />
              </div>
              Entrega rápida e rastreada
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 p-2 bg-purple-300 rounded-full">
                <Coffee color="#FFFFFFFF" size={16} />
              </div>
              O café chega fresquinho até você
            </li>
          </ul>
        </main>

        <div className="flex items-center justify-center">
          <img src={Ilustration} alt="" />
        </div>
      </div>

      <h2 className="text-[32px] font-extrabold mb-14 mt-4">Nossos cafés</h2>
      <ul className=" flex flex-wrap gap-11 mb-36">
        {CoffeJSON.map(coffe => {
          return (
            <Card
              key={coffe.id}
              id={coffe.id}
              image={coffe.image}
              flags={coffe.tags}
              name={coffe.title}
              description={coffe.description}
              price={coffe.priceInCents}
            />
          )
        })}
      </ul>
    </>
  )
}
