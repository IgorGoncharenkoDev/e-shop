import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
	min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bolder;
  border: 1px solid transparent;
  cursor: pointer;
  
  ${ ({ primary, disabled }) => primary && !disabled && css`
		&:hover {
			background-color: white;
	    color: black;
	    border-color: black;
		}
	` }
	
	${ ({ primary }) => primary && css`
		background-color: #000;
		color: #fff;
		cursor: pointer;
	`};
	
	${ ({ disabled }) => disabled && css `
		opacity: .5;
		cursor: auto;
	` }
	}
	
	${ ({ google }) => google && css`
		background-color: #3b5998;
		border-color: #3b5998;
		
			&:hover {
				background-color: #37538d;
			}
	` } 
`;
