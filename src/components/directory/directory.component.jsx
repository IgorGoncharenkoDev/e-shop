import React, { useState, useEffect } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import SHOP_DATA from '../../data/data';

import { DirectoryStyled } from './directory.styles';

const Directory = () => {
	const [shopItems, setShopItems] = useState([]);

	useEffect(() => {
		setShopItems(SHOP_DATA);
	}, [])

	return (
		<DirectoryStyled>
			{
				shopItems.map(({ id, ...otherProps }) =>
					<MenuItem
						key={ id }
						{ ...otherProps }
					/>
				)
			}
		</DirectoryStyled>
	)
};

export default Directory;
