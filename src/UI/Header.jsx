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
`;

const StyledText = styled.p`
  color: white;
  background-color: rgb(243, 169, 9);
  padding: 5px;
  border-radius: 50px;
  cursor: default;
  font-size: 1.2rem;
  margin-left: 420px;
`;

function Header() {
  return (
    <StyledHeader className="top">
      <HeaderInner>
        <HeaderItem ID="headerItemStale">
          <img className="headerImage " src="/Gb-Logo.png" alt="GB Portfolio" />
        </HeaderItem>
      </HeaderInner>
      <HeaderInner>
        <StyledText>Gavin Bradford Portfolio</StyledText>
      </HeaderInner>
      <HeaderInner>
        <HeaderItem ID="headerItem">
          <a
            href="/Gavin_Bradford_Resume.pdf"
            download="Gavin_Bradford_Resume.pdf"
          >
            <img
              className="headerImage"
              src="./resume.png"
              alt="GB Portfolio"
            />
          </a>
        </HeaderItem>
        <HeaderItem ID="headerItem">
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
        <HeaderItem ID="headerItem">
          <a href="https://github.com/Yellowjersey" target="#blank">
            <img className="headerImage" src="/github.png" alt="GB Portfolio" />
          </a>
        </HeaderItem>
        <HeaderItem ID="headerItem">
          <a href="mailto:bradfordgavin@gmail.com?subject=Portfolio%20Inquiry">
            <img className="headerImage" src="/email.png" alt="GB Portfolio" />
          </a>
        </HeaderItem>
      </HeaderInner>
    </StyledHeader>
  );
}

export default Header;
