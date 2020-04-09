import React from 'react';

import {
	PageHeaderStyled,
	LogoLink,
	LogoStyled,
	Options,
	LinkStyled
} from './page-header.styles';

const PageHeader = () => (
	<PageHeaderStyled>
		<LogoLink to="/">
			<LogoStyled/>
		</LogoLink>

		<Options>
			<LinkStyled to="/shop">Shop</LinkStyled>
			<LinkStyled to="/shop">Contact</LinkStyled>
		</Options>
	</PageHeaderStyled>
);

export default PageHeader;
