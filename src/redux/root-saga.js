import { all, call } from 'redux-saga/effects';

import { shopSages } from './shop/shop.saga';
import { userSagas } from './user/users.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
  yield all([call(shopSages), call(userSagas), call(cartSagas)]);
}