import { styled } from 'styled-components';
import ContentContainer from '../UI/ContentContainer';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

function Projects() {
  return (
    <StyledDiv className="projects">
      <ContentContainer
        style={{
          backgroundColor: 'rgb(243, 169, 9)',
          color: 'white',
          marginBottom: '-5px',
        }}
      >
        <h1>Projects</h1>
      </ContentContainer>
      <ContentContainer
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <ContentContainer
          style={{
            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'center',
            alignItems: 'center',
            margin: '-5px',
          }}
        >
          <h1>Wild Oasis</h1>
          <a
            href="https://booking-the-wild-oasis.netlify.app/dashboard"
            target="#blank"
            style={{
              cursor: 'pointer',
            }}
          >
            <img
              src="/wild-oasis.PNG"
              height="cover"
              width="500px"
              alt="The Wild Oasis"
            />
          </a>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '4px',
            }}
          >
            <p>A webapp to be used as a hotel booking system</p>
            <p>Test account: test@test.com</p>
            <p>Test password: password1</p>
            <p
              style={{
                color: '#a1a1a1',
              }}
            >
              React, React-Query, React-Router, Custom Hooks, Supabase, Netlify,
              React Icons
            </p>
          </div>
        </ContentContainer>
        <ContentContainer
          style={{
            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-5px',
          }}
        >
          <h1>Fast React Pizza</h1>
          <a
            href="https://react-pizza-application.netlify.app/"
            target="#blank"
            style={{
              cursor: 'pointer',
            }}
          >
            <img
              src="/pizza.PNG"
              height="cover"
              width="500px"
              alt="Fast React Pizza"
            />
          </a>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '4px',
            }}
          >
            <p>A mock-up pizza ordering Webapp</p>
            <p
              style={{
                color: '#a1a1a1',
              }}
            >
              React, Redux, React-Router
            </p>
          </div>
        </ContentContainer>
        <ContentContainer
          style={{
            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Today I Learned</h1>
          <a
            href="https://fact-board.netlify.app/"
            target="#blank"
            style={{
              cursor: 'pointer',
            }}
          >
            <img
              src="/FactBoard.PNG"
              height="cover"
              width="500px"
              alt="Today I Learned"
            />
          </a>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '4px',
            }}
          >
            <p>An online fact board</p>
            <p
              style={{
                color: '#a1a1a1',
              }}
            >
              React, Redux, React-Router
            </p>
          </div>
        </ContentContainer>
      </ContentContainer>
    </StyledDiv>
  );
}

export default Projects;
