import { nanoid } from 'nanoid';
import { ADD_PRODUCT } from '../actions/actionTypes';

const initialState = {
  productsList: [
    { id: nanoid(), productName: 'Умная колонка', price: 1200, oldPrice: 1400, mainImage: 'https://avatars.mds.yandex.net/get-marketcms/1523779/img-5f5fd628-2d0b-4400-b856-797f22561c05.png/optimize' },
    { id: nanoid(), productName: 'Смартфон', price: 3200, oldPrice: null, mainImage: 'https://avatars.mds.yandex.net/get-mpic/6236983/img_id1743618275562799298.jpeg/200x200' },
  ],
};

export default function productsListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const { productName, price, oldPrice,  mainImage} = action.payload;
      return {
        ...state,
        productsList: [
          ...state.productsList, 
          { 
            id: nanoid(), 
            productName, 
            price: Number(price),
            oldPrice: Number(oldPrice),
            mainImage: mainImage,
          }
        ]
      }


    default:
      return state;
  }
}