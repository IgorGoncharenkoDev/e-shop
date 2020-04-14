import React, { useState } from 'react';

import FormField from '../form-input/form-input.component';
import CustomButton from '../button/button.component';



import { SignInStyled, Title, SubTitle } from './sign-in.styles';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		// here: send data to the server
	};

	const handleChange = e => {
		const { value, name } = e.target;

		switch (name) {
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
			default:
				return;
		}
	};

	return (
		<SignInStyled>
			<Title>I already have an account</Title>
			<SubTitle>Sign in with your email and password</SubTitle>

			<form onSubmit={ handleSubmit }>
				<FormField
					element="input"
					type="email"
					name="email"
					id="email"
					value={ email }
					label="Email"
					floatingLabel={ true }
					labelShrinked={ false }
					required
					handleChange={ handleChange }
					validators={[]}
				/>
				<FormField
					element="input"
					type="password"
					name="password"
					id="password"
					value={ password }
					label="Password"
					floatingLabel={ true }
					labelShrinked={ false }
					required
					handleChange={ handleChange }
					validators={[]}
				/>
				<FormField
					element="textarea"
					label="Description"
					floatingLabel={ false }
					labelShrinked={ false }
					value=""
				/>
				<CustomButton
					type="submit"
					primary
				>Submit form</CustomButton>
			</form>
		</SignInStyled>
	)
};

export default SignIn;
