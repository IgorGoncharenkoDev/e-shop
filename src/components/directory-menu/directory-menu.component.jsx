import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuStyled } from './directory-menu.styles';

const DirectoryMenu = () => (
	<DirectoryMenuStyled>
		<MenuItem/>
		<MenuItem/>
		<MenuItem/>
		<MenuItem/>
		<MenuItem/>
	</DirectoryMenuStyled>
);

export default DirectoryMenu;
