import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo__crwn.svg';

export const PageHeaderStyled = styled.header`
	display: flex;
  justify-content: space-between;
	align-items: center;
	height: 70px;
  width: 100%;
	padding-bottom: 25px;
`;

export const LogoLink = styled(Link)`
  width: 70px;
  padding: 10px;
`;

export const LogoStyled = styled(Logo)`
	max-width: 100%;
`;

export const Options = styled.div`
	width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LinkStyled = styled(Link)`
	padding: 10px 15px;
`;
