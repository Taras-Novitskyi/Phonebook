import React from 'react';
import { StyledLink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <div>
      <StyledLink to="/register">Sign Up</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </div>
  );
}
