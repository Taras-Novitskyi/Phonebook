import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Box } from '@mui/material';
import { BiLogIn } from 'react-icons/bi';
import { toast } from 'react-toastify';

import { authSelectors, authOperations } from '../../redux/auth';

export  function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);

  const logOut = () => {
    try {
      dispatch(authOperations.logOut())
    } catch (error) {
      toast.error(`Something wrong, try again.`);
    }
  }
 
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          fontWeight: '700',
          marginRight: 1,
        }}
      >
        {name}
      </Box>
      <IconButton
        type="button"
        aria-label="Logout"
        onClick={logOut}
      >
        <BiLogIn />
      </IconButton>
    </Box>
  );
}
