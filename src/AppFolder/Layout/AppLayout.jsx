import { Outlet } from 'react-router-dom';
import Sidebar from '../UI/SideBar';
import Header from '../UI/Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 5fr;
  padding-top: 20px;
`;

const StyledMain = styled.div`
  display: flex;

  padding-top: 20px;
  justify-content: center;
`;

// test update

function AppLayout() {
  return (
    <>
      <Header />
      <StyledAppLayout>
        <Sidebar />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
