import { 
  ADD_PRODUCT, 
} from './actionTypes'

export function addProduct (newProduct) {
  return {type: ADD_PRODUCT, payload: newProduct}
}



