import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: green;
  }
`;

export const Layout = () => {
  return (
    <Wrapper>
      <header>
        <ul>
          <li>
            <StyledLink to={'/'}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to={'/movies'}>Movies</StyledLink>
          </li>
        </ul>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
