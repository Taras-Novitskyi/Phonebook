import { toast } from 'react-toastify';

export const getError = errCode => {
  switch (errCode) {
    case 400:
      toast.error(`Bad request, try again.`);
      break;

    case 401:
      toast.error(`Missing header with authorization token.`);
      break;

    case 404:
      toast.error(`There is no such user collection.`);
		  break;
	  
    case 500:
      toast.error(`Server error.`);
      break;

    default:
      toast.error(`Something wrong, try again.`);
      break;
  }
};
