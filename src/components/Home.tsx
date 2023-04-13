import { Coffee, Package, Timer } from '@phosphor-icons/react'
import { Card } from './Card'
import Ilustration from '../assets/illustation.png'
import Americano from '../assets/Americano.svg'
import Arabe from '../assets/Arabe.svg'
import CafeComLeite from '../assets/CafecomLeite.svg'
import CaféGelado from '../assets/CafeGelado.svg'
import Expresso from '../assets/Expresso.svg'
import ExpressoCremoso from '../assets/ExpressoCremoso.svg'
import Latte from '../assets/Latte.svg'
import Cubano from '../assets/Cubano.svg'
import Havaino from '../assets/Havaiano.svg'
import Irlandes from '../assets/Irlandês.svg'

const CoffeJSON = [
  {
    id: '1',
    tags: [
      {
        tagId: '1',
        tagName: 'Tradicional'
      }
    ],
    image: Expresso,
    title: 'Café Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    priceInCents: 1890
  },
  {
    id: '2',
    tags: [
      {
        tagId: '1',
        tagName: 'Tradicional'
      }
    ],
    image: Americano,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    priceInCents: 2090
  },
  {
    id: '3',
    tags: [
      {
        tagId: '1',
        tagName: 'Tradicional'
      }
    ],
    image: ExpressoCremoso,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    priceInCents: 790
  },
  {
    id: '4',
    tags: [
      {
        tagId: '1',
        tagName: 'Tradicional'
      },
      {
        tagId: '2',
        tagName: 'Gelado'
      }
    ],
    image: CaféGelado,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    priceInCents: 1590
  },
  {
    id: '5',
    tags: [
      {
        tagId: '1',
        tagName: 'Tradicional'
      },
      {
        tagId: '3',
        tagName: 'Com Leite'
      },
      {
        tagId: '2',
        tagName: 'Gelado'
      }
    ],
    image: CafeComLeite,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    priceInCents: 1390
  },
  {
    id: '6',
    tags: [
      {
        tagId: '4',
        tagName: 'Especial'
      },
      {
        tagId: '3',
        tagName: 'Com Leite'
      }
    ],
    image: Latte,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    priceInCents: 1890
  },
  {
    id: '7',
    tags: [
      {
        tagId: '4',
        tagName: 'Especial'
      },
      {
        tagId: '3',
        tagName: 'Com Leite'
      }
    ],
    image: Cubano,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    priceInCents: 1490
  },
  {
    id: '8',
    tags: [
      {
        tagId: '5',
        tagName: 'Havaiano'
      }
    ],
    image: Havaino,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    priceInCents: 1290
  },
  {
    id: '9',
    tags: [
      {
        tagId: '4',
        tagName: 'Especial'
      }
    ],
    image: Arabe,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    priceInCents: 890
  },
  {
    id: '10',
    tags: [
      {
        tagId: '4',
        tagName: 'Especial'
      },
      {
        tagId: '6',
        tagName: 'Irlandês'
      }
    ],
    image: Irlandes,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    priceInCents: 790
  }
]

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
