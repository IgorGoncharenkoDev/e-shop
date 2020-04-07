import React from 'react';

import {
	MenuItemStyled,
	MenuItemContent,
	MenuItemTitle,
	MenuItemSubtitle
} from './menu-item.styles';

const MenuItem = () => (
	<MenuItemStyled>
		<MenuItemContent>
			<MenuItemTitle>
				Menu item title
			</MenuItemTitle>
			<MenuItemSubtitle>
				Menu item sub title
			</MenuItemSubtitle>
		</MenuItemContent>
	</MenuItemStyled>
);

export default MenuItem;
