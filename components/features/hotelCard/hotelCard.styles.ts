import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
`;

export const StyledHotelInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%
`;

export const StyledPricingInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%
`;

export const StyledPropertyName = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;

export const StyledPropertyAddress = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  & span {
    margin-left: 4px;
  }
`;

export const StyledOffer = styled.a`
  flex: 1;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: red;
  text-decoration: underline;
`;

export const StyledCancellation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  color: green;
`;


export const StyledPrice = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  font-size: 26px;
`;

export const StyledSaving = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  color: red;
`;

