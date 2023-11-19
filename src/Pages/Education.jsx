import ContentContainer from '../UI/ContentContainer';

function Education() {
  return (
    <div
      className="education"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        borderRadius: '20px',
        height: '80dvh',
      }}
    >
      <ContentContainer
        style={{
          width: '40%',
          textAlign: 'center',
          backgroundColor: 'rgb(243, 169, 9)',
          color: 'white',
        }}
      >
        <h1>Education</h1>
      </ContentContainer>
      <ContentContainer
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <div>
          <h1>College Degree</h1>
          <p>A.A.S. of Web Development and Design</p>
          <p
            style={{
              paddingTop: '10px',
              color: '#848484',
              fontSize: '.8rem',
            }}
          >
            Graduating Dec. 2023
          </p>
        </div>
        <div>
          <h1>Internship</h1>
          <p>Fathom Reads Flutter Intern</p>
          <p
            style={{
              paddingTop: '10px',
              color: '#848484',
              fontSize: '.8rem',
            }}
          >
            Jan 2022 - May 2022
          </p>
        </div>
        <div
          style={{
            paddingTop: '20px',
          }}
        >
          <h1>Certificates</h1>
          <div
            style={{
              paddingBottom: '10px',
            }}
          >
            <p>Google CyberSecurity: Detection and Response</p>
            <p
              style={{
                paddingTop: '10px',
                color: '#848484',
                fontSize: '.8rem',
              }}
            >
              Aug 2023
            </p>
          </div>
          <div
            style={{
              paddingBottom: '10px',
            }}
          >
            <p>Google CyberSecurity: Automate tasks with Python</p>
            <p
              style={{
                paddingTop: '10px',
                color: '#848484',
                fontSize: '.8rem',
              }}
            >
              Aug 2023
            </p>
          </div>
          <div
            style={{
              paddingBottom: '10px',
            }}
          >
            <p>Google CyberSecurity: Manage Security Risks</p>
            <p
              style={{
                paddingTop: '10px',
                color: '#848484',
                fontSize: '.8rem',
              }}
            >
              Aug 2023
            </p>
          </div>
          <div
            style={{
              paddingBottom: '10px',
            }}
          >
            <p>Google CyberSecurity: Foundations of CyberSecurity</p>
            <p
              style={{
                paddingTop: '10px',
                color: '#848484',
                fontSize: '.8rem',
              }}
            >
              Aug 2023
            </p>
          </div>
          <div
            style={{
              paddingBottom: '10px',
            }}
          >
            <p>Google CyberSecurity: Assets, Threats, and Vulnerabilities</p>
            <p
              style={{
                paddingTop: '10px',
                color: '#848484',
                fontSize: '.8rem',
              }}
            >
              Aug 2023
            </p>
          </div>
          <div
            style={{
              paddingBottom: '10px',
            }}
          >
            <p>Google CyberSecurity: Linux and SQL</p>
            <p
              style={{
                paddingTop: '10px',
                color: '#848484',
                fontSize: '.8rem',
              }}
            >
              Aug 2023
            </p>
          </div>
          <div
            style={{
              paddingBottom: '10px',
            }}
          >
            <p>Google CyberSecurity: Network and Network Security</p>
            <p
              style={{
                paddingTop: '10px',
                color: '#848484',
                fontSize: '.8rem',
              }}
            >
              Aug 2023
            </p>
          </div>
          <div
            style={{
              paddingBottom: '10px',
            }}
          >
            <p>Google CyberSecurity: Prepare for CyberSecurity Jobs</p>
            <p
              style={{
                paddingTop: '10px',
                color: '#848484',
                fontSize: '.8rem',
              }}
            >
              Aug 2023
            </p>
          </div>
          <div
            style={{
              paddingBottom: '10px',
            }}
          >
            <p>Google CyberSecurity</p>
            <p
              style={{
                paddingTop: '10px',
                color: '#848484',
                fontSize: '.8rem',
              }}
            >
              Aug 2023
            </p>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}

export default Education;
