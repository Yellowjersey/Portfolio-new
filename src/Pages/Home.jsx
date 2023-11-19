import HomeContainer from '../UI/HomeContainer';

function Home() {
  return (
    <div className="home">
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '40px',
        }}
      >
        <HomeContainer
          style={{
            display: 'flex',
            fontSize: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',

            width: '50dvw',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontSize: '1.5rem',

              padding: '20px',
              paddingLeft: '30px',
              paddingRight: '30px',
            }}
          >
            <h2>Hi There!</h2>
            <h2 className="headerTitle">I'm Gavin Bradford</h2>

            <p className="headerMajor">Web Developer and Designer </p>

            <p>
              I am a upcoming graduate of the Pellissippi State Community
              College's Web Development Program. I have a passion for creating
              and designing websites and applications. I am a hard worker and a
              fast learner. I am always looking for new ways to improve my
              skills and learn new things.
            </p>
          </div>
          <div style={{ height: '500px', padding: '0px', margin: '0px' }}>
            <img
              src="/GavinAvatar.jpg"
              alt="Gavin Bradford"
              height="500px"
              width="500px"
            />
          </div>
        </HomeContainer>
      </div>
    </div>
  );
}

export default Home;
