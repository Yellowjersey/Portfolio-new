import { styled } from "styled-components";
import ContentContainer from "../UI/ContentContainer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

function Projects() {
  return <StyledDiv>
  <ContentContainer>
    <h1>Projects</h1>
  </ContentContainer>
  <ContentContainer style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
   

  }}>
  <ContentContainer style={{
       display: 'flex',
       flexDirection: 'column',
    
     justifyContent: 'center',
     alignItems: 'center'
  }}>
    <h1>Wild Oasis</h1>
    <a href="https://booking-the-wild-oasis.netlify.app/dashboard" target="#blank" style={{
 cursor: 'pointer',
    }}>
      <img src="../wild-oasis.PNG" height='cover' width='500px' alt="The Wild Oasis" />
      </a>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '4px'
      }}>

      <p>A webapp to be used as a hotel booking system</p>
      <p>Test account: test@test.com</p>
      <p>Test password: password1</p>
      <p style={{
        color: '#a1a1a1'
      }}>React, React-Query, React-Router, Custom Hooks, Supabase, Netlify, React Icons</p>
      </div>
  </ContentContainer>
  <ContentContainer style={{
       display: 'flex',
       flexDirection: 'column',
    
     justifyContent: 'center',
     alignItems: 'center'
  }}>
    <h1>Fast React Pizza</h1>
    <a href="https://friendly-gecko-266451.netlify.app/" target="#blank" style={{
 cursor: 'pointer',
    }}>
      <img src="../pizza.PNG" height='cover' width='500px' alt="Fast React Pizza"  />
      </a>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '4px'
      }}>

      <p>A mock-up pizza ordering Webapp</p>
      <p style={{
        color: '#a1a1a1'
      }}>React, Redux, React-Router</p>

      </div>
  </ContentContainer>
 
  </ContentContainer>

  </StyledDiv>;
}

export default Projects;
