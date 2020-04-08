import styled, { css } from 'styled-components';

export const MenuItemBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const MenuItemStyled = styled.div`
	min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  cursor: pointer;
  overflow: hidden;
  
  ${ ({ size }) => size === 'large' && css`
    height: 380px;
  `
}

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  
  &:hover {
    ${ MenuItemBackgroundImage } {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(.25, .45, .45, .95);
    }
  }
`;

export const MenuItemContent = styled.div`
  position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
	height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid black;
  opacity: .7;
`;

export const MenuItemTitle = styled.div`
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const MenuItemSubtitle = styled.div`
	font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;
