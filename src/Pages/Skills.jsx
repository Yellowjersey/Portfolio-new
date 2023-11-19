import { styled } from 'styled-components';
import ContentContainer from '../UI/ContentContainer';
import Techstack from '../UI/Techstack';
import { Container } from 'react-bootstrap';
import Toolstack from '../UI/Toolstack';
import Designstack from '../UI/Designstack';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Skills() {
  return (
    <StyledDiv className="skills">
      <ContentContainer
        style={{ backgroundColor: 'rgb(243, 169, 9)', color: 'white' }}
      >
        <h1>Skills</h1>
      </ContentContainer>
      <ContentContainer
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'rgb(255, 175, 3)' }}>
              Languages and Frameworks
            </h2>
            <Techstack />
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'rgb(255, 175, 3)' }}>Tools & Platforms</h2>
            <Toolstack />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'rgb(255, 175, 3)' }}>Design Tools</h2>
            <Designstack />
          </div>
        </div>
      </ContentContainer>
    </StyledDiv>
  );
}

export default Skills;
