import styled from 'styled-components';

const StyledCotentContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  height: fit-content;
  width: fit-content;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

function ContentContainer({ children, style }) {
  return (
    <StyledCotentContainer style={style}>{children}</StyledCotentContainer>
  );
}

export default ContentContainer;
