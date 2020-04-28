import React, { useReducer, useEffect } from 'react';

import { validate } from '../../utils/validators';

import {
	FormGroup, Label, FormControl,
	Textarea, FormControlError
} from './form-field.styles';

const INITIAL_STATE = {
	value: '',
	isTouched: false,
	isValid: false
};

const actionTypes = {
	CHANGE: 'CHANGE',
	TOUCH: 'TOUCH',
	BLUR: 'BLUR'
};

const inputReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.CHANGE:
			return {
				...state,
				isValid: validate(action.payload, action.validators),
				value: action.payload
			}
		case actionTypes.BLUR:
			return {
				...state,
				isTouched: true
			}
		default:
			return state;
	}
};

const FormField = ({ element = 'input', id, label, rows, errorText, validators,
	                   onInput, ...otherFieldProps }) => {
	const [state, dispatch] = useReducer(inputReducer, INITIAL_STATE);

	const { value, isTouched, isValid } = state;

	useEffect(() => {
		onInput(id, value, isValid);
	}, [id, onInput, value, isValid]);

	const handleChange = e => {
		dispatch({
			type: actionTypes.CHANGE,
			payload: e.target.value,
			validators: validators
		});
	}

	const handleTouch = () => {
		dispatch({ type: actionTypes.BLUR })
	}

	return (
		<FormGroup element={ element } invalid={ !isValid && isTouched }>
			{
				element === 'input' && (
					<FormControl
						id={ id }
						value={ value }
						onChange={ handleChange }
						onBlur={ handleTouch  }
						{ ...otherFieldProps }
					/>
				)
			}

			{
				element === 'textarea' && (
					<Textarea
						id={ id }
						rows={ rows || 3 }
						value={ value }
						onChange={ handleChange }
						onBlur={ () => dispatch({ type: actionTypes.BLUR }) }
						{ ...otherFieldProps }
					/>
				)
			}

			{
				label && (<Label
						forHtml={ id }
						labelShrinked={ !!value.length }
					>
						{ label }
					</Label>
				)
			}

			{
				!isValid && isTouched && (
					<FormControlError>
						{ errorText }
					</FormControlError>
				)
			}
		</FormGroup>
	)
};

export default FormField
