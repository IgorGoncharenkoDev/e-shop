import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import {
	PageHeaderStyled,
	LogoLink,
	LogoStyled,
	Options,
	LinkStyled
} from './page-header.styles';
import { Link } from 'react-router-dom';

const PageHeader = ({ currentUser }) => (
	<PageHeaderStyled>
		<LogoLink to="/">
			<LogoStyled/>
		</LogoLink>

		<Options>
			<LinkStyled to="/shop">Shop</LinkStyled>
			<LinkStyled to="/contact">Contact</LinkStyled>
			{
				currentUser ? (
					<LinkStyled
						as="button"
						type="register"
						onClick={ () => auth.signOut() }
					>Sign Out</LinkStyled>
				) : (
					<LinkStyled
						to="/register"
						type="register"
					>Sign In</LinkStyled>
				)
			}
		</Options>
	</PageHeaderStyled>
);

export default PageHeader;
