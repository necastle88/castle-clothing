import React from 'react';
import './collections-preview.scss';
import CollectionItem from './../collection-item/collectionItem';

const PreviewCollection = ({title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          // Map over shop item
          items.filter((item, index) => index < 4).map(({ id, ...itmProps}) => (
            <CollectionItem key={id} {...itmProps} />
          ))
        }
      </div>
    </div>
  );
}

export default PreviewCollection;