import { Link } from 'react-scroll';
import LinkButton from './LinkButton';
import LinkImage from './LinkImage';
import {
  HiBookOpen,
  HiHome,
  HiMiniPencilSquare,
  HiMiniWrench,
} from 'react-icons/hi2';
import SideBarItem from './SideBarItem';
import styled from 'styled-components';

const StyledSideBar = styled.ul`
  width: 200px;
  height: fit-content;
  background-color: rgb(243, 169, 9);
  list-style: none;
  /* margin-top: -20px; */
  padding-top: 20px;
  /* border-top-right-radius: 30px;
  border-bottom-right-radius: 30px; */
  border-radius: 30px;
  position: fixed;
  margin-left: 20px;
  margin-top: 70px;
`;

function SideBarSmooth() {
  return (
    <StyledSideBar>
      <LinkButton>
        <Link to="top" spy={true} smooth={true} duration={500}>
          <SideBarItem>
            {/* <LinkImage
              source={<HiHome />}
              alt="Avatar"
              height="40px"
              width="40px"
              style={{
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />{' '} */}
            <HiHome
              style={{
                borderRadius: '50%',
                marginRight: '10px',
                height: '40px',
                width: '40px',
              }}
            />
            Home
          </SideBarItem>
        </Link>
      </LinkButton>
      <LinkButton>
        <Link to="education" spy={true} smooth={true} duration={500}>
          <SideBarItem>
            {/* <LinkImage
              source={'/about-me.png'}
              alt="About Me"
              height="40px"
              width="40px"
              style={{ marginRight: '10px' }}
            />{' '} */}
            <HiBookOpen
              style={{
                borderRadius: '50%',
                marginRight: '10px',
                height: '40px',
                width: '40px',
              }}
            />
            Education
          </SideBarItem>
        </Link>
      </LinkButton>
      <LinkButton>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          <SideBarItem>
            {/* <LinkImage
              source={'/projects.png'}
              alt="Projects"
              height="40px"
              width="40px"
              style={{ marginRight: '10px' }}
            />{' '} */}
            <HiMiniPencilSquare
              style={{
                borderRadius: '50%',
                marginRight: '10px',
                height: '40px',
                width: '40px',
              }}
            />
            Projects
          </SideBarItem>
        </Link>
      </LinkButton>
      <LinkButton>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          <SideBarItem>
            {/* <LinkImage
              source={'/hobbies.png'}
              alt="Hobbies"
              height="40px"
              width="40px"
              style={{ marginRight: '10px' }}
            />{' '} */}
            <HiMiniWrench
              style={{
                borderRadius: '50%',
                marginRight: '10px',
                height: '40px',
                width: '40px',
              }}
            />
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

export default SideBarSmooth;
