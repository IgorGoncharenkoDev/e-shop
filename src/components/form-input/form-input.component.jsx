import React from 'react';

import {
	FormGroup,
	Label,
	FormControl,
	Textarea
} from './form-input.styles';

const FormField = ({ element = 'input', id, value, handleChange, label, floatingLabel, ...otherInputProps }) => (
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
					rows={ 3 }
				/>
			)
		}

		{
			label && (<Label
					forHtml={ id }
					floatingLabel={ floatingLabel }
					labelShrinked={ !!value.length && floatingLabel }
				>
					{ label }
				</Label>
			)
		}

	</FormGroup>
);

export default FormField
