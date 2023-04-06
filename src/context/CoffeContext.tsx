import produce from 'immer'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState
} from 'react'

type CoffeType = {
  id: string
  name: string
  description: string
  image: string
  price: number
}

interface PurchaseCoffeProps {
  id: string
  name: string
  description: string
  image: string
  price: number
  quantity: number
}

interface CoffeContextType {
  cartItens: PurchaseCoffeProps[]
  PurchaseCoffe: (coffe: PurchaseCoffeProps) => void
  RemoveItemToCart: (removeId: string) => void

  ChangeCartItemQuantity: (coffeId: string, typeQuantityAlter: string) => void
}

interface CoffeContextProps {
  children: ReactNode
}

export const CoffeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({ children }: CoffeContextProps) {
  const [cartItens, setCartItens] = useState<PurchaseCoffeProps[]>(() => {
    const storedCartItens = localStorage.getItem(
      '@Coffe-delivery:cartItens-state-1.0.0'
    )

    if (storedCartItens) {
      return JSON.parse(storedCartItens)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem(
      '@Coffe-delivery:cartItens-state-1.0.0',
      JSON.stringify(cartItens)
    )
  }, [cartItens])

  function PurchaseCoffe(coffe: PurchaseCoffeProps) {
    const verifyIfCoffeAlreadyInCart = cartItens.findIndex(
      cartItem => cartItem.id === coffe.id
    )

    const newCartWithCoffe = produce(cartItens, draft => {
      if (verifyIfCoffeAlreadyInCart < 0) {
        draft.push(coffe)
      } else {
        draft[verifyIfCoffeAlreadyInCart].quantity += coffe.quantity
      }
    })

    setCartItens(newCartWithCoffe)
  }

  function RemoveItemToCart(removeId: string) {
    setCartItens(cartItens => cartItens.filter(coffes => coffes.id != removeId))
  }

  function ChangeCartItemQuantity(coffeId: string, typeQuantityAlter: string) {
    const verifyIfItemExist = cartItens.findIndex(
      cartItem => cartItem.id === coffeId
    )

    if (verifyIfItemExist >= 0) {
      const updateQuantityCoffe = cartItens.map(coffe => {
        if (coffe.id === coffeId) {
          return {
            ...coffe,
            quantity:
              typeQuantityAlter === 'increase'
                ? coffe.quantity + 1
                : coffe.quantity - 1
          }
        } else {
          return coffe
        }
      })
      setCartItens(updateQuantityCoffe)
    }
  }

  return (
    <CoffeContext.Provider
      value={{
        cartItens,
        PurchaseCoffe,
        RemoveItemToCart,
        ChangeCartItemQuantity
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
