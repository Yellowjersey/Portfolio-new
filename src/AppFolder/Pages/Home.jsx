import ContentContainer from '../UI/ContentContainer';

function Home() {
  return (
    <>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ContentContainer
          style={{
            display: 'flex',
            fontSize: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',

            gap: '10px',
            width: 'fit-content',
          }}
        >
          <img
            src="/GavinAvatar.jpg"
            alt="Gavin Bradford"
            height="100px"
            width="100px"
            style={{ borderRadius: '50%' }}
          />
          <p>Hi I'm Gavin</p>
        </ContentContainer>
        <ContentContainer
          style={{
            fontSize: '1.2rem',
          }}
        >
          <p>I am a Web Developer and Designer </p>
        </ContentContainer>
        <ContentContainer
          style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            fontWeight: 'semi-bold',
          }}
        >
          <p>
            I am a upcoming graduate of the Pellissippi State Community
            College's Web Development Program. I have a passion for creating and
            designing websites and applications. I am a hard worker and a fast
            learner. I am always looking for new ways to improve my skills and
            learn new things.
          </p>
        </ContentContainer>
      </div>
    </>
  );
}

export default Home;
