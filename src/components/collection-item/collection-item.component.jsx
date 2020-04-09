import React from 'react';

import {
	CollectionItemStyled,
	CollectionItemImage,
	CollectionItemFooter,
	CollectionItemName,
	CollectionItemPrice
} from './collection-item.styles';

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<CollectionItemStyled>
		<CollectionItemImage style={ { backgroundImage: `url(${ imageUrl })` } }/>
		<CollectionItemFooter>
			<CollectionItemName>{ name }</CollectionItemName>
			<CollectionItemPrice>{ price }</CollectionItemPrice>
		</CollectionItemFooter>
	</CollectionItemStyled>
);

export default CollectionItem;
