import React from 'react';
import {Container, Title, NavigationButton} from './styles';

export const LoginScreen = () => {
  return (
    <Container>
      <Title>Login Screen</Title>
      <NavigationButton
        title="Click here"
        onPress={() => alert('Button Clicked')}
      />
    </Container>
  );
};
