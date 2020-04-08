import React, { useState, useEffect } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import { shopData } from '../../data/data';

import { DirectoryStyled } from './directory.styles';

const Directory = () => {
	const [shopItems, setShopItems] = useState([]);

	useEffect(() => {
		setShopItems(shopData);
	}, [])

	return (
		<DirectoryStyled>
			{
				shopItems.map(({ id, title, imageUrl, size }) =>
					<MenuItem
						key={ id }
						title={ title }
						imageUrl={ imageUrl }
						size={ size }
					/>
				)
			}
		</DirectoryStyled>
	)
};

export default Directory;
