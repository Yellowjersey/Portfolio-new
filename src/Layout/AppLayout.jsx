import { Outlet } from 'react-router-dom';
import SideBarSmooth from '../UI/SideBarSmooth';
import Header from '../UI/Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 5fr;
  padding-top: 20px;
`;

const StyledMain = styled.div`
  display: flex;
  padding-left: 500px;
  padding-top: 20px;
  justify-content: center;
`;

function AppLayout() {
  return (
    <>
      <Header />
      <StyledAppLayout>
        <SideBarSmooth />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
