import { styled } from "styled-components";
import ContentContainer from "../UI/ContentContainer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`


function Skills() {
  return <StyledDiv>
  <ContentContainer>
    <h1>Skills</h1>
  </ContentContainer>
  <ContentContainer style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
       
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      <div>

      <h2>Programming Languages</h2>
      <p>JavaScript, C#, C++, SQL, Python, Dart </p>
      </div>
      <div>

      <h2>Libraries & Frameworks</h2>
      <p>React, Flutter </p>
      </div>
      <div>

      <h2>Tools & Platforms</h2>
      <p>Git, Docker, VsCode, React-Router, Redux, React-Query </p>
      </div>
      <div>

      <h2>Design Tools</h2>
      <p>Photoship, Illustrator, Figma</p>
      </div>

    </div>


    

  </ContentContainer>
  </StyledDiv>;
}

export default Skills;
