import React from 'react';

import {
	FormGroup,
	Label,
	FormControl,
	Textarea
} from './form-input.styles';

const FormField = ({ element = 'input', id, value, handleChange, label, ...otherInputProps }) => (
	<FormGroup element={ element }>
		{
			element === 'input' && (
				<FormControl
					value={ value }
					onChange={ handleChange }
					{ ...otherInputProps }
				/>
			)
		}

		{
			element === 'textarea' && (
				<Textarea
					element={ element }
					rows={ 3 }
					value={ value }
					onChange={ handleChange }
					{ ...otherInputProps }
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

	</FormGroup>
);

export default FormField
