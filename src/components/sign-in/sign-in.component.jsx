import React, { useCallback, useReducer } from 'react';

import FormField from '../form-input/form-field.component';
import CustomButton from '../button/button.component';

import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utils/validators';

import { SignInStyled, Title, SubTitle } from './sign-in.styles';

const INITIAL_STATE = {
	inputs: {
		// the input property name must match the input's id attribute value
		// e.g.: 'email' here must correspond id="email"
		email: { value: '', isValid: false },
		userName: { value: '', isValid: false },
		password: { value: '', isValid: false }
	},
	formIsValid: false
};

const actionTypes = {
	INPUT_CHANGE: 'INPUT_CHANGE'
};

const formReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.INPUT_CHANGE:
			let formIsValid = true;

			for (const input in INITIAL_STATE.inputs) {
				// checking if current input is the one which has just been updated
				if (input === action.payload.inputId) {
					formIsValid = formIsValid && action.payload.isValid;
				}
				else {
					// checking input (in the state) which is not currently getting updated
					// by the current action
					formIsValid = formIsValid && state.inputs[input].isValid
				}
			}

			return {
				...state,
				inputs: {
					...state.inputs,
					[action.payload.inputId]: {
						value: action.payload.value,
						isValid: action.payload.isValid
					}
				},
				formIsValid: formIsValid
			}
		default:
			return state
	}
};

const SignIn = () => {
	const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

	const handleSubmit = e => {
		e.preventDefault();

		// here: send the data to the server
		console.log(state.inputs);
	};

	// using 'useCallback' prevents 'infinite loop'
	// which may occur due to parent component rerender
	const handleFormFieldInput = useCallback((inputId, value, isValid) => {
		dispatch({
			type: actionTypes.INPUT_CHANGE,
			payload: { inputId, value, isValid }
		});
	}, []);
	// since the 'deps' array is empty the function inside 'useCallback'
	// will get stored by React and will be reused

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
					label="Email"
					labelShrinked={ false }
					required
					errorText="Please, provide correct email"
					validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
					onInput={ handleFormFieldInput }
				/>
				<FormField
					element="input"
					type="text"
					name="userName"
					id="userName"
					label="User name"
					labelShrinked={ false }
					required
					errorText="Please, provide user name, with a minimum of 3 characters"
					validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
					onInput={ handleFormFieldInput }
				/>
				<FormField
					element="input"
					type="password"
					name="password"
					id="password"
					label="Password"
					labelShrinked={ false }
					required
					errorText="Please, provide correct password, with a minimum of 5 characters"
					validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
					onInput={ handleFormFieldInput }
				/>

				{/*<FormField*/}
				{/*	element="textarea"*/}
				{/*	name="email"*/}
				{/*	id="email"*/}
				{/* rows="3"*/}
				{/*	label="Email"*/}
				{/*	labelShrinked={ false }*/}
				{/*	required*/}
				{/*	validators={[]}*/}
				{/*/>*/}

				<CustomButton
					type="submit"
					primary
					disabled={ !state.formIsValid }
					// onClick={}
				>Submit form</CustomButton>
			</form>
		</SignInStyled>
	)
};

export default SignIn;
