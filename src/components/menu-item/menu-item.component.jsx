import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
	MenuItemStyled,
	MenuItemBackgroundImage,
	MenuItemContent,
	MenuItemTitle,
	MenuItemSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, routeName }) => {
	const history = useHistory();
	const match = useRouteMatch();

	return (
		<MenuItemStyled
			size={ size }
			onClick={ () => history.push(`${ match.url }${ routeName }`) }
		>
			<MenuItemBackgroundImage style={{ backgroundImage: `url(${ imageUrl })` }} />
			<MenuItemContent>
				<MenuItemTitle>{ title }</MenuItemTitle>
				<MenuItemSubtitle>Shop now</MenuItemSubtitle>
			</MenuItemContent>
		</MenuItemStyled>
	)
};

export default MenuItem;
