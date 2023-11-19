import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';
import LinkImage from './LinkImage';
import { HiBookOpen, HiHome } from 'react-icons/hi2';
import SideBarItem from './SideBarItem';
import styled from 'styled-components';

const StyledSideBar = styled.ul`
  width: 200px;
  height: fit-content;
  background-color: rgb(243, 169, 9);
  list-style: none;
  /* margin-top: -20px; */
  padding-top: 20px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;

function SideBar() {
  return (
    <StyledSideBar>
      <LinkButton>
        <Link to="/">
          <SideBarItem>
            <LinkImage
              source={'/home-icon.png'}
              alt="Avatar"
              height="40px"
              width="40px"
              style={{
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />{' '}
            Home
          </SideBarItem>
        </Link>
      </LinkButton>
      <LinkButton>
        <Link to="/education">
          <SideBarItem>
            <LinkImage
              source={'/about-me.png'}
              alt="About Me"
              height="40px"
              width="40px"
              style={{ marginRight: '10px' }}
            />{' '}
            Education
          </SideBarItem>
        </Link>
      </LinkButton>
      <LinkButton>
        <Link to="/projects">
          <SideBarItem>
            <LinkImage
              source={'/projects.png'}
              alt="Projects"
              height="40px"
              width="40px"
              style={{ marginRight: '10px' }}
            />{' '}
            Projects
          </SideBarItem>
        </Link>
      </LinkButton>
      <LinkButton>
        <Link to="/skills">
          <SideBarItem>
            <LinkImage
              source={'/hobbies.png'}
              alt="Hobbies"
              height="40px"
              width="40px"
              style={{ marginRight: '10px' }}
            />{' '}
            Skills
          </SideBarItem>
        </Link>
      </LinkButton>
      {/* <LinkButton>
        <Link to="/merged">
          <SideBarItem>
            <LinkImage
              source={'/Gear.png'}
              alt="Hobbies"
              height="40px"
              width="40px"
              style={{ marginRight: '10px' }}
            />{' '}
            Merged Test
          </SideBarItem>
        </Link>
      </LinkButton> */}
    </StyledSideBar>
  );
}

export default SideBar;
