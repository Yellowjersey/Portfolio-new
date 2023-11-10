import styled from 'styled-components';
import LinkButton from './LinkButton';
import { HiHome } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import HeaderItem from './HeaderItem';

const StyledHeader = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  height: fit-content;
  justify-content: space-between;
  align-items: center;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

const StyledText = styled.p`
  color: white;
  background-color: #e04c3f;
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderInner>
        <HeaderItem>
          <Link to="/">
            <img
              className="headerImage "
              src="/Gb-Logo.png"
              alt="GB Portfolio"
            />
          </Link>
        </HeaderItem>
      </HeaderInner>
      <HeaderInner>
        <StyledText>Gavin Bradford Portfolio</StyledText>
      </HeaderInner>
      <HeaderInner>
        <HeaderItem>
          <a
            href="https://www.linkedin.com/in/gavin-bradford-ab2566123/"
            target="#blank"
          >
            <img
              className="headerImage"
              src="/linkedin.png"
              alt="GB Portfolio"
            />
          </a>
        </HeaderItem>
        <HeaderItem>
          <a href="https://github.com/Yellowjersey" target="#blank">
            <img className="headerImage" src="/github.png" alt="GB Portfolio" />
          </a>
        </HeaderItem>
        <HeaderItem>
          <a href="mailto:bradfordgavin@gmail.com?subject=Portfolio%20Inquiry">
            <img className="headerImage" src="/email.png" alt="GB Portfolio" />
          </a>
        </HeaderItem>
      </HeaderInner>
    </StyledHeader>
  );
}

export default Header;
