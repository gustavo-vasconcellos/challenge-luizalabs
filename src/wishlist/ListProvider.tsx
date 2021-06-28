import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from 'react'

interface List {
  // eslint-disable-next-line no-unused-vars
  addOrRemoveItem: (item: Product) => void
  items: Product[]
  isAdded?: boolean
}

const ListContext = createContext<List>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addOrRemoveItem: () => {},
  items: [],
})

const ListProvider: React.FunctionComponent = ({ children }) => {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    const localItems = localStorage.getItem('maganets_list')

    if (localItems?.length) {
      setItems(JSON.parse(localItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('maganets_list', JSON.stringify(items))
  }, [items])

  const addOrRemoveItem = useCallback(
    (newItem: Product): void => {
      if (items.some((current) => current.sku === newItem.sku)) {
        const newItems = items.filter((current) => current.sku !== newItem.sku)

        setItems(newItems)
        return
      }

      setItems([...items, newItem])
    },
    [items, setItems]
  )

  return (
    <ListContext.Provider value={{ addOrRemoveItem, items }}>
      {children}
    </ListContext.Provider>
  )
}

export const useList = (sku: number): List => {
  const context = useContext(ListContext)

  if (!context) {
    throw new Error('useList must need to be used inside ListProvider')
  }

  if (sku) {
    const isAdded = context.items.some((item) => item.sku === sku)

    return {
      ...context,
      isAdded,
    }
  }

  return context
}

export default ListProvider
