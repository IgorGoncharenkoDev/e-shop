import styled, { css } from 'styled-components';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
  
  ${ ({ element }) => element === 'textarea' && css`
		margin-top: 65px;
	` }
`;

export const Label = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  //pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  
  ${ ({ labelShrinked }) => labelShrinked && css`
		${ shrinkLabel }
	` }
`;

export const FormControl = styled.input`
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${ Label } {
    top: -14px;
    font-size: 12px;
    color: black;
  }
  
  ${ ({ type }) => type === 'password' && css`
    letter-spacing: 0.3em;
  `
}
`;

export const Textarea = styled.textarea`
	width: 100%;
	resize: none;
	font-family: 'Open Sans Condensed', sans-serif;
	font-size: 16px;
	font-weight: normal;
	border: none;
  border-bottom: 1px solid grey;
  
  ${ ({ element }) => element === 'textarea' && css`
		& ~ ${ Label } {
			top: 2px;
		}
	` }
  
  &:focus ~ ${ Label } {
		top: -24px;
    font-size: 12px;
    color: black;
  }
`;
