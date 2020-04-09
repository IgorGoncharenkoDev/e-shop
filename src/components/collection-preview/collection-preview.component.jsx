import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
	CollectionPreviewStyled,
	CollectionPreviewTitle,
	CollectionPreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
	<CollectionPreviewStyled>
		<CollectionPreviewTitle>{ title }</CollectionPreviewTitle>
		<CollectionPreviewContainer>
			{
				items
					.filter((item, i) => i < 4)
					.map(item =>
					<CollectionItem key={ item.id } { ...item } />
				)
			}
		</CollectionPreviewContainer>
	</CollectionPreviewStyled>
);

export default CollectionPreview;
