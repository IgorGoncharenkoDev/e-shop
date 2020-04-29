import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	MenuItemStyled,
	MenuItemBackgroundImage,
	MenuItemContent,
	MenuItemTitle,
	MenuItemSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, routeName, history, match}) => (
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
);

export default withRouter(MenuItem);
