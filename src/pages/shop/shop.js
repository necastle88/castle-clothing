import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from './../../components/collections-preview/collections-preview';

const ShopPage = ( props ) => {
  const [shopData, setShopData] = useState( SHOP_DATA )
  

  console.log(shopData)
  return (
    
    <div className='shop-page'>
    {
      shopData.map(({id, ...otherCollectionProps}) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))
    }
    </div>
  )
}

export default ShopPage;