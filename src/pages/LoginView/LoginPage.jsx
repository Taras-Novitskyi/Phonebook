import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Button,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { authOperations } from '../../redux/auth';
import { Form, Container } from './LoginPage.styled';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    try {
      e.preventDefault();
      dispatch(authOperations.logIn({ email, password }));
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error(`Something wrong, try again.`);
    }
  };

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <InputLabel sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </InputLabel>

        <InputLabel sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
          Password
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handleChange}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </InputLabel>

        <Button variant="contained" size="medium" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
