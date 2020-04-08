import React from 'react';

import {
	MenuItemStyled,
	MenuItemBackgroundImage,
	MenuItemContent,
	MenuItemTitle,
	MenuItemSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size }) => (
	<MenuItemStyled size={ size } >
		<MenuItemBackgroundImage style={{ backgroundImage: `url(${ imageUrl })` }} />
		<MenuItemContent>
			<MenuItemTitle>{ title }</MenuItemTitle>
			<MenuItemSubtitle>Shop now</MenuItemSubtitle>
		</MenuItemContent>
	</MenuItemStyled>
);

export default MenuItem;
