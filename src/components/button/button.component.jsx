import React from 'react';

import { ButtonStyled } from './button.styles';

const CustomButton = ({ type = 'button', children, ...otherButtonProps }) => (
	<ButtonStyled
		type={ type }
		{ ...otherButtonProps }
	>
		{ children }
	</ButtonStyled>
);

export default CustomButton;
