import React, { useState, useEffect } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from '../../data/data';

import { ShopStyled } from './shop.styles';

const Shop = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

	useEffect(() => {

	}, [])

	return (
		<ShopStyled>
			{
				collections.map(({ id, ...otherCollectionProps }) =>
					<CollectionPreview key={ id } { ...otherCollectionProps }/>
				)
			}
		</ShopStyled>
	)
};

export default Shop;
