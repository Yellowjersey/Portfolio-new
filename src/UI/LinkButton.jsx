import styled from 'styled-components';

const StyledLi = styled.li`
  margin-bottom: 10px;
`;

function LinkButton({ children }) {
  return <StyledLi>{children}</StyledLi>;
}

export default LinkButton;
