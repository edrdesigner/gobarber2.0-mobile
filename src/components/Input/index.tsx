import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <>
    <Container>
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  </>
);

export default Input;
