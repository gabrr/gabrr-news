import { GraphqlProvider } from 'contexts/graphqlProvider'
import { combineComponents } from 'contexts/providersCombiner'

const providers = [
  GraphqlProvider
]

export const AppContextProvider = combineComponents(...providers)