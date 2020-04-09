import styled from 'styled-components';

export const CollectionItemStyled = styled.div`
	width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

export const CollectionItemImage = styled.img`
	width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionItemFooter = styled.div`
	width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionItemName = styled.div`
	width: 90%;
  margin-bottom: 15px;
`;

export const CollectionItemPrice = styled.div`
	width: 10%;
`;
